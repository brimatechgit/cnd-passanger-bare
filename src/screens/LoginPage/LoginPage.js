import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, Pressable,Image, Dimensions, } from 'react-native';
import  Checkbox  from '@react-native-community/checkbox';
import {Card} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconIonic from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Verification from './Verification/Verification';
import TermsPage from '../TermsPage/TermsPage';
import { Button } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

const LoginPage = (props) => {

  

  // const { userDoc } = route.params;

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
        // auth().currentUser.delete();
        auth().signOut()
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber).catch(function(error) {
            console.log(error)
        });
        setConfirm(confirmation);
        // props.navigation.navigate('RegistrationVerification', {

        // })
      }


      async function confirmCode() {
        //temp remove
        firestore()
                        .collection('users')
                        .where('phone', '==', mobile)
                        .get()
                        .then(querySnapshot => {
                            querySnapshot.forEach(documentSnapshot => {
                            //displays user id and document field data
                            console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());

                            
                            //fetch user email
                            console.log(documentSnapshot.get("email"))

                                props.navigation.navigate('HomePage', {
                                    userDoc: documentSnapshot,
                                })
                            });
                        });

        try {
            //temp 
            


          await confirm.confirm(cellValue);
          // firestore()
          //   .collection('Users')
          //   // Filter results
          //   .where('phone', '==', parseInt(mobile))
          //   .get()
          //   .then(querySnapshot => {
          //       /* ... */
          //       // querySnapshot.docChanges
          //   });
            
          firestore()
                        .collection('users')
                        .where('phone', '==', mobile)
                        .get()
                        .then(querySnapshot => {
                            querySnapshot.forEach(documentSnapshot => {
                            //displays user id and document field data
                            console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());

                            
                            //fetch user email
                            console.log(documentSnapshot.get("email"))

                                props.navigation.navigate('HomePage', {
                                    userDoc: documentSnapshot,
                                })
                            });
                        });
          // props.navigation.navigate('HomePage', {
          //   userDoc: userDoc
          // })
        } catch (error) {
          console.log('Invalid code.', error);
        }
      }


      useEffect( () => {
        auth().onAuthStateChanged( (user) => {
            if (user) {
                // Obviously, you can add more statements here, 
                //       e.g. call an action creator if you use Redux. 
    
                // navigate the user away from the login screens: 
                // props.navigation.navigate("PermissionsScreen");
                console.log(user);
                // auth().signOut()
            //     props.navigation.navigate('HomePage', {
            //       userDoc: user,
            //   })
            } 
            else 
            {
                // reset state if you need to  
                // dispatch({ type: "reset_user" });
            }
        });
    }, []);

      if(!confirm ) { return ( 

        //check db user collection for the number the user is entering, phone numbers should be unique
        <View style={{flex:1, padding: 20}}>

            

            <View>
                <Text style={styles.text}>Welcome Back</Text>
                <Text style={{fontSize: 15, color: 'teal'}}>Please Enter Your Number</Text>

                <View style={{height: 10}}></View>
                <Text style={{fontSize: 12, color: 'teal', width:'65%'}}>
                    We will send an SMS with a code to 
                    verify your mobile number
                </Text>
            </View>
            <View style={{height: 15}}></View>

            <Card style={{elevation: 5, borderRadius: 25, width:Dimensions.get('window').width- 450}}>
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

            <View style={{ flexDirection: 'row',alignItems:'center'}}>
             {/* I agree to the Terms & Conditions and Privacy Policy */}
             <Checkbox
                value={isSelected}
                onValueChange={setSelection}
                style={{alignSelf: 'center',}}
                />
             <Text style={{fontSize:12, bottom:3}}>I agree to the <Pressable onPress={() => props.navigation.navigate(TermsPage)}><Text style={{fontSize:12, color: 'teal', top: 3}}>Terms & Conditions and Privacy Policy</Text></Pressable></Text>
            </View>
            <View style={{height: 15}}></View>
            <View >
                <Text style={{fontSize: 15, color: 'teal'}}>Or sign in with Socials</Text>
                <View style={{flexDirection:'row'}}>
                    {/* Add Social icons here */}
                    <Image 
style={{height: 30, padding:0, width: 30, margin:5}}
  resizeMode = 'contain'
source={require('../../assets/images/Facebook.png')} />
                    <Image 
style={{ height: 30, width: 30, margin:5}}
  resizeMode = 'contain'
source={require('../../assets/images/Google.png')} />
                    
                </View>
            </View>
{/* 
            <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5, width: 250,left: 30 }}>
                        <Pressable style={styles.button} onPress={() => props.navigation.navigate(Verification)}>
                            <Text style={{color: 'teal', fontSize: 20}}>Continue</Text>
                        </Pressable>
                    </View> */}


            {/* <Button text='Continue' navPage='Verification' navigation={props.navigation}></Button> */}
                    
            <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5, }}>
                            <Pressable style={styles.button} onPress={() => signInWithPhoneNumber('+27'+mobile.toString())}>
                                <Text style={{color: 'teal', fontSize: 20, top:'1%'}}>Continue</Text>
                            </Pressable>
                        </View>
           
            {/* <Button title='Continue' type='outline' buttonStyle={{borderRadius: 25, }} onPress={() => signInWithPhoneNumber('+27'+mobile.toString())}></Button> */}
        </View>
     
     ); }


     return ( 
        <View style={{flex:1, padding: 20}}>
            <Text style={styles.text}>Enter Verification Code</Text>
            <View style={{height: 15}}></View>
            <Text style={{color: 'teal'}}>An SMS code was sent to</Text>

            <Text style={{fontWeight: 'bold', paddingVertical:10}}>{'+27 '+mobile.toString()}</Text>

            <Text style={{color:'teal'}}>Edit Mobile Numbers</Text>

            <View style={{height: 15}}></View>
            <View style={{flexDirection: 'row', right: '3%'}}>
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

                    <Button title='Continue' titleStyle={{color:'teal'}} type='outline' buttonStyle={{borderRadius: 25,borderColor:'teal', backgroundColor:'white', width: Dimensions.get('screen').width - 140 }} onPress={() => confirmCode()}></Button>

                    {/* <Button title='Sign Up' titleStyle={{color:'teal'}} type='outline' buttonStyle={{borderRadius: 25,borderColor:'teal', backgroundColor:'white', width: Dimensions.get('screen').width - 140 }} onPress={createUser}></Button>  */}
        </View>
     
     
     );


}
 
export default LoginPage;