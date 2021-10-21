import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../../compnents/Button/Button';
import TermsAndCo from '../../compnents/TermsAndC/TermsAndC';
import LoginPage from '../LoginPage/LoginPage';
import TermsPage from '../TermsPage/TermsPage';
import ApprovalPage from './ApprovalPage/ApprovalPage';
import styles from './styles';

const RegisterPage = props => {

    const [number, onChangeNumber] = React.useState('');
    const [sname, onChangeSname] = React.useState('');
    const [fname, onChangeFname] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState('');

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = React.useState([
        {label: '+27', value: '+27'},
        {label: '+36', value: '+36'},
        {label: '+28', value: '+28'}
      ]);

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
                                    onChange={onChangeSname}
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
                                    onChange={onChangePassword}
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
                                    onChange={onChangeNumber}
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
                        <Button text='Sign Up' navPage='ApprovalPage' navigation={props.navigation} ></Button>
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