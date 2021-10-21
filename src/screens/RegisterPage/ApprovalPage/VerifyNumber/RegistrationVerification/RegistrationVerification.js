import React from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import  {Card}  from 'react-native-paper';
import HomePage from '../../../../HomePage/HomePage';
import styles from './styles';
import Button from '../../../../../compnents/Button/Button';







const RegistrationVerification = props => {

    const [OTP, onChangeOTP] = React.useState();
    const [OTP2, onChangeOTP2] = React.useState();
    const [OTP3, onChangeOTP3] = React.useState();
    const [OTP4, onChangeOTP4] = React.useState();

    return ( 
        <View style={{flex:1, padding: 20}}>
            <Text style={styles.text}>Enter Verification Code</Text>
            <View style={{height: 15}}></View>
            <Text style={{color:'teal'}}>An SMS code was sent to</Text>

            <Text style={{fontWeight: 'bold', paddingVertical:5}}>+27 45 935 9064</Text>

            <Text style={{color:'teal'}}>Edit Mobile Numbers</Text>

            <View style={{height: 15}}></View>
            <View style={{flexDirection: 'row', right: '3%'}}>
                <Card style={{elevation: 5, borderTopLeftRadius: 25, borderBottomLeftRadius: 25, margin: 10}}>
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
                </Card>
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

                    <Button text='Continue' navPage='HomePage' navigation={props.navigation}></Button>
        </View>
     );
}
 
export default RegistrationVerification;