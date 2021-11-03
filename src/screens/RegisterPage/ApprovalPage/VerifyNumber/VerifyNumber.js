import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import {Card} from 'react-native-paper';
import  Checkbox  from '@react-native-community/checkbox';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconIonic from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import RegistrationVerification from './RegistrationVerification/RegistrationVerification';
import TermsPage from '../../../TermsPage/TermsPage';
import firestore from '@react-native-firebase/firestore';
import { Button } from 'react-native-elements';
import auth from '@react-native-firebase/auth';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

const VerifyNumber = ({ route ,props, navigation}) => {

    const { userDoc } = route.params;
    
    const [OTP, onChangeOTP] = React.useState();
    const [OTP2, onChangeOTP2] = React.useState();
    const [OTP3, onChangeOTP3] = React.useState();
    const [OTP4, onChangeOTP4] = React.useState();

    const [cellValue, setCellValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [cellprops, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const [mobile, onChangeMobile] = React.useState();
    const [isSelected, setSelection] = useState(false);


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = React.useState([
        {label: '+27', value: '+27'},
        {label: '+36', value: '+36'},
        {label: '+28', value: '+28'}
      ]);

       // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');


      async function signInWithPhoneNumber(phoneNumber) {
        // firestore()
        //     .collection('users')
        //     .get()
        //     .where('phone', '==', phoneNumber)
        //     .then(querySnapshot => {
        //         if(querySnapshot.size == 0){
        //             console.log('Number not found, Please check number')
        //         }else {
        //             const confirmation = auth().signInWithPhoneNumber(phoneNumber);
        //             setConfirm(confirmation);
        //         }
        //         // console.log('Total users: ', querySnapshot.size);

        //         // querySnapshot.forEach(documentSnapshot => {
        //         // //displays user id and document field data
        //         // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());

                
        //         // //fetch user email
        //         // console.log(documentSnapshot.get("email"))
        //         // });
        //     });

        console.log(userDoc.get('phone'))

        // if(userDoc.get('phone') == phoneNumber){

            const confirmation = await auth().signInWithPhoneNumber(phoneNumber).catch(function(error){console.log(error)});
            setConfirm(confirmation);
        // }
        // props.navigation.navigate('RegistrationVerification', {

        // })
      }


      async function confirmCode() {

        navigation.navigate('HomePage', {
            userDoc: userDoc
          })

        try {
            console.log(cellValue)
          await confirm.confirm(cellValue);
          props.navigation.navigate('HomePage', {
            userDoc: userDoc
          })
        } catch (error) {
          console.log('Invalid code.');

          //remove this, temp
        //   await confirm.confirm(cellValue);
          
        }
      }


    if(!confirm ) {

        return ( 
            <View style={{flex:1, padding: 20}}>
                <View>
                    <Text style={styles.text}>Verify your numbers.</Text>
    
                    <View style={{height: 10}}></View>
                    <Text style={{fontSize: 12,  width: 200, color:'teal'}}>
                        We will send an SMS with a code to 
                        verify your mobile number
                    </Text>
                </View>
                <View style={{height: 15}}></View>
    
                <Card style={{elevation: 5, borderRadius: 25}}>
                <View style={{flexDirection: 'row'}}>
    
                <DropDownPicker
                                style={{width: 80, borderWidth: 0, borderRadius: 25}}
                                    open={open}
                                    value={value}
                                    items={items}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems}
                                    placeholder='+27'
                                    />
                <TextInput
                                        style={{borderBottomColor: 'teal',
                                        borderWidth: 0,
                                        width: 100,
                                        paddingBottom: 5,
                                        margin: 10,
                                    right: 250}}
                                        onChangeText={onChangeMobile}
                                        value={mobile}
                                        placeholder='Mobile' 
                                        placeholderTextColor='teal'
                                        keyboardType='number-pad' 
                                    />
                </View>
                </Card>
    
                <View style={{height: 15}}></View>
    
                <View style={{ flexDirection: 'row', alignItems:'center'}}>
                 {/* I agree to the Terms & Conditions and Privacy Policy */}
                 <Checkbox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={{alignSelf: 'center',}}
                    />
                 <Text style={{fontSize:12, bottom: 3}}>I agree to the <Pressable onPress={() => props.navigation.navigate(TermsPage)}><Text style={{fontSize:12, color: 'teal', top: 3}}>Terms & Conditions and Privacy Policy</Text></Pressable></Text>
                </View>
                <View style={{height: 15}}></View>
                <View >
                    <Text style={{fontSize: 17, color: 'teal'}}>Or sign in with Socials</Text>
                    <View style={{flexDirection: 'row'}}>
                        {/* Add Social icons here */}
                                            <Image 
                        style={{height: 30, padding:0, width: 30, margin:5}}
                        resizeMode = 'contain'
                        source={require('../../../../assets/images/Facebook.png')} />
                                            <Image 
                        style={{ height: 30, width: 30, margin:5}}
                        resizeMode = 'contain'
                        source={require('../../../../assets/images/Google.png')} />
                        
                    </View>
                </View>
    
                <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5, }}>
                            <Pressable style={styles.button} onPress={() => signInWithPhoneNumber('+27'+mobile.toString())}>
                                <Text style={{color: 'teal', fontSize: 20, top:'1%'}}>Continue</Text>
                            </Pressable>
                        </View>
            </View>
         );
    }

    return ( 
        <View style={{flex:1, padding: 20}}>
            <Text style={styles.text}>Enter Verification Code</Text>
            <View style={{height: 15}}></View>
            <Text style={{color:'teal'}}>An SMS code was sent to</Text>

            <Text style={{fontWeight: 'bold', paddingVertical:5}}>{'+27 '+mobile.toString()}</Text>

            <Text style={{color:'teal'}}>Edit Mobile Numbers</Text>

            <View style={{height: 15}}></View>
            <View style={{flexDirection: 'row', right: '3%'}}>
                {/* <Card style={{elevation: 5, borderTopLeftRadius: 25, borderBottomLeftRadius: 25, margin: 10}}>
                <View style={{flexDirection: 'row'}}>
                <TextInput
                                        style={{borderBottomColor: 'teal',
                                        borderWidth: 0,
                                        width: 40,
                                        paddingBottom: 5,
                                        margin: 10,
                                    }}
                                        onChange={onChangeOTP}
                                        value={OTP}
                                        maxLength={1}
                                        keyboardType='number-pad'
                                        fontSize={22} 
                                    />
                </View>
                </Card>

                <Card style={{elevation: 5, margin: 10}}>
                    <View style={{flexDirection: 'row'}}>
                    <TextInput
                                            style={styles.inputCard}
                                            onChange={onChangeOTP2}
                                            value={OTP2}
                                            maxLength={1}
                                            keyboardType='number-pad' 
                                            fontSize={22}
                                        />
                    </View>
                </Card>
                <Card style={{elevation: 5, margin: 10}}>
                    <View style={{flexDirection: 'row'}}>
                    <TextInput
                                            style={styles.inputCard}
                                            onChange={onChangeOTP3}
                                            value={OTP3}
                                            maxLength={1}
                                            keyboardType='number-pad' 
                                            fontSize={22}
                                        />
                    </View>
                </Card>

                <Card style={{elevation: 5, borderTopRightRadius: 25, borderBottomRightRadius: 25, margin: 10}}>
                <View style={{flexDirection: 'row'}}>
                <TextInput
                                        style={{borderBottomColor: 'teal',
                                        borderWidth: 0,
                                        width: 40,
                                        paddingBottom: 5,
                                        margin: 10,
                                    }}
                                        onChange={onChangeOTP4}
                                        value={OTP4}
                                        maxLength={1}
                                        keyboardType='number-pad'
                                        fontSize={22}
                                        
                                    />
                </View>
                </Card> */}

<CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={cellValue}
        onChangeText={setCellValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
            </View>
            
            <View style={{height: 15}}></View>
            <Card style={styles.button} onPress={() => console.log('sign in')}>
                      
                            <Text style={{color: 'teal', fontSize: 15}}>Resend Code</Text>
                        
                {/* <Button text='Resend Code' navPage='' navigation={props.navigation}></Button> */}
                </Card>

                <View style={{height: 35}}></View>
                    {/* <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5,}}>
                        <Pressable style={styles.buttonBig} onPress={() => props.navigation.navigate(HomePage)}>
                            <Text style={{color: 'teal', fontSize: 20}}>Continue</Text>
                        </Pressable>
                    </View> */}

                    {/* <Button text='Continue' navPage='HomePage' navigation={props.navigation}></Button> */}
                    <Button title='Continue' type='outline' buttonStyle={{borderRadius: 25, }} onPress={() => confirmCode()}></Button>
        </View>
     );
}
 
export default VerifyNumber;