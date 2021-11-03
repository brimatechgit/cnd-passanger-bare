import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
// import Button from '../../compnents/Button/Button';
import { Button } from 'react-native-elements';
import TermsAndCo from '../../compnents/TermsAndC/TermsAndC';
import LoginPage from '../LoginPage/LoginPage';
import TermsPage from '../TermsPage/TermsPage';
import ApprovalPage from './ApprovalPage/ApprovalPage';
import styles from './styles';
import firestore from '@react-native-firebase/firestore';

import auth from '@react-native-firebase/auth';


const RegisterPage = ({navigation,props}) => {

    const userid = '';
    const [number, onChangeNumber] = React.useState();
    const [sname, onChangeSname] = React.useState("");
    const [fname, onChangeFname] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = React.useState([
        {label: '+27', value: '+27'},
        {label: '+36', value: '+36'},
        {label: '+28', value: '+28'}
      ]);

      function getUserName(documentSnapshot) {
        return documentSnapshot.get('email');
      }


      async function createUser () {
        if (sname != '' && number != '' && fname != '' && email != '' && password != '') {

            //should check db if the phone number is already in there
            //if it is, error, and tell user cant register
            //else proceed to register user

            //creates users with passw and email
           
                auth()
                .createUserWithEmailAndPassword(email.toString(), password.toString())
                .then(() => {
                console.log('User account created & signed in!');
                //add user to user collection
                        firestore()
                        .collection('users')
                        .add({
                        name: fname.toString(),
                        surname: sname.toString(),
                        email: email.toString(),
                        phone: number,
                        }).then((res) =>{
                            firestore().collection('users').doc(res.id).update({
                                id: res.id,
                            })
                            userid = res.id;

                            // console.log(res.get())
                        })

                        firestore()
                        .collection('users')
                        .where('phone', '==', number)
                        .get()
                        .then(querySnapshot => {
                            querySnapshot.forEach(documentSnapshot => {
                            //displays user id and document field data
                            console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());

                            
                            //fetch user email
                            console.log(documentSnapshot.get("email"))

                                navigation.navigate('ApprovalPage', {
                                    userDoc: documentSnapshot,
                                    navigation: navigation
                                })
                            });
                        });
                        // console.log(userDocument.get())
                        // props.navigation.navigate('ApprovalPage', {
                        //     userDoc: userDocument,
                        // })
                    })
                .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
                });

            }

    }


    return ( 
        <View style={{flex: 1, padding: 15,}}>
            <Text style={{color: 'teal', fontSize:22}}>Personal Details</Text>
            <View style={{height: 50}}></View>
            <View>
            <View style={{flexDirection: 'row'}}>
                                <TextInput
                                    style={[styles.input, {width:Dimensions.get('window').width - 250}]}
                                    onChangeText={onChangeFname}
                                    value={fname}
                                    placeholder='Name'
                                    placeholderTextColor='teal'  
                                />
                                <TextInput
                                    style={[styles.input, {width:Dimensions.get('window').width - 250}]}
                                    onChangeText={onChangeSname}
                                    value={sname}
                                    placeholder='Surname' 
                                    placeholderTextColor='teal' 
                                />
                </View>
                <View style={{height: 50}}></View>

                <View style={{paddingBottom: 25}}>
                <TextInput
                                    style={[styles.inputLong, {width:Dimensions.get('window').width - 550}]}
                                    onChangeText={onChangeEmail}
                                    value={email}
                                    placeholder='Email'
                                    placeholderTextColor='teal'  
                                />
                                <View style={{height: 50}}></View>
                                <TextInput
                                    style={[styles.inputLong, {width:Dimensions.get('window').width - 550}]}
                                    onChangeText={onChangePassword}
                                    value={password}
                                    secureTextEntry
                                    placeholder='Password' 
                                    placeholderTextColor='teal' 
                                />

                </View>
                <View style={{height: 20}}></View>
        <View style={{flexDirection: 'row', }}>                            
                            <DropDownPicker
                            style={{width: 100}}
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
                                    borderBottomWidth: 1,
                                    width:Dimensions.get('window').width - 250,
                                    right: Dimensions.get('window').width - 150,
                                    paddingBottom: 5,
                                    margin: 10,
                                    justifyContent: 'flex-start'}}
                                    onChangeText={onChangeNumber}
                                    value={number}
                                    placeholder='Mobile' 
                                    placeholderTextColor='teal'
                                    keyboardType='number-pad' 
                                />
                        </View>
                        <View style={{height: 50}}></View>

                <View style={{ justifyContent:'center', alignItems: 'center',}}>
                    <Text style={{textAlign: 'center'}}>By clicking sign up you agree to our <Pressable onPress={() => props.navigation.navigate(TermsPage)}><Text style={{color: 'teal', textAlign: 'center',}}>Terms and Conditions</Text></Pressable></Text>
                </View>

                <View style={{height: 15}}></View>

                {/* <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5, width: 250,left: 30 }}>
                        <Pressable style={styles.button} onPress={() => props.navigation.navigate(ApprovalPage)}>
                            <Text style={{color: 'teal', fontSize: 20}}>Register</Text>
                        </Pressable>
                    </View> */}

                    <View style={{alignItems:'center'}}>
                        {/* <Button text='Sign Up' navPage='ApprovalPage' navigation={props.navigation} ></Button> */}

                        <Button title='Sign Up' type='outline' buttonStyle={{borderRadius: 25, }} onPress={createUser}></Button>
                        {/* <Button title='Sign Up' type='outline' buttonStyle={{borderRadius: 25, }} onPress={()=> console.log(parseInt( number))}></Button> */}
                    </View>

                    <View style={{height: 15}}></View>
                    <View style={{ justifyContent:'center', alignItems: 'center',}}>
                    <Text style={{textAlign: 'center', fontWeight:'bold'}}>Already have an account? 
                        <Pressable onPress={() => props.navigation.navigate(LoginPage)}><Text style={{color: 'teal', top: 4 }}> Sign In</Text></Pressable></Text>
                </View>


            </View>
        </View>
     );
}
 
export default RegisterPage;