import React from 'react'
import { View, Text,TextInput, TouchableOpacity, Image } from 'react-native';
import {Card}from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const ChangePassword = () => {

    const [cardNum, onChangeCardNum] = React.useState("");
    const [expDate, onChangeExpDate] = React.useState("");
    const [cvv, onChangeCvv] = React.useState("");


    return ( 
        <View style={{padding: 10}}>
            <View style={{alignItems:'center', padding: 15, flexDirection:'row', justifyContent:'center'}}>
            <Image 
                          style={{height: 45, width: 45}}
                        resizeMode = 'contain'
                        source={require('../../../assets/images/changePass.png')} />
                <Text style={{fontSize: 22, fontWeight: '600', color: 'teal'}}>Change Password</Text>
            </View>

            <View>
                <Text style={{fontWeight:'100', padding: 5}}>Confirm your current password</Text>
                    <Card style={{elevation: 10, borderRadius: 25, padding:2}}>
                            <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                            <TextInput
                                    style={styles.inputBottom}
                                    onChangeText={onChangeCardNum}
                                    value={cardNum}
                                    placeholder='Current Password'
                                    keyboardType='visible-password'  
                                />
                                
                                <Card style={{borderRadius: 50, elevation: 10, width: 35, height: 35, alignItems: 'center', right: 5}}>
                                    <View style={{justifyContent: 'center', alignItems: 'center'}}>

                                        <Icon name='close' size={20} style={{top: 8, }}></Icon>
                                    </View>
                                    
                                    </Card>
                                
                            </View>
                    </Card>

            </View>
            <View>
                <Text style={{fontWeight:'100', padding: 5}}>Enter your new password</Text>
                    <Card style={{elevation: 10, borderRadius: 25, padding:2, marginVertical: 10}}>
                            <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                            <TextInput
                                    style={styles.inputBottom}
                                    onChangeText={onChangeCardNum}
                                    value={cardNum}
                                    placeholder='Enter your new password'
                                    keyboardType='visible-password'  
                                />
                                
                                <Card style={{borderRadius: 50, elevation: 10, width: 35, height: 35, alignItems: 'center', right: 5}}>
                                    <View style={{justifyContent: 'center', alignItems: 'center'}}>

                                        <Icon name='close' size={20} style={{top: 8, }}></Icon>
                                    </View>
                                    
                                    </Card>
                                
                            </View>
                    </Card>
                    <Card style={{elevation: 10, borderRadius: 25, padding:2, marginVertical: 10}}>
                            <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                            <TextInput
                                    style={styles.inputBottom}
                                    onChangeText={onChangeCardNum}
                                    value={cardNum}
                                    placeholder='Retype new password'
                                    keyboardType='visible-password'  
                                />
                                
                                <Card style={{borderRadius: 50, elevation: 10, width: 35, height: 35, alignItems: 'center', right: 5}}>
                                    <View style={{justifyContent: 'center', alignItems: 'center'}}>

                                        <Icon name='close' size={20} style={{top: 8, }}></Icon>
                                    </View>
                                    
                                    </Card>
                                
                            </View>
                    </Card>

            </View>
            
 
 


            <View>
                <Text style={styles.title}>Your password needs to:</Text>
                <View style={{padding: 15}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <View style={styles.circle}></View>
                        <Text style={styles.subTitle}>include at least one number or symbol. </Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <View style={styles.circle}></View>
                        <Text style={styles.subTitle}>include both lower and upper case characters </Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <View style={styles.circle}></View>
                        <Text style={styles.subTitle}>be at least 8 characters long. </Text>
                    </View>
                </View>
            </View>


            <TouchableOpacity onPress={() => console.log('navi')} style={styles.button}>
                    {/* navigation.navigate(DestinationSearch) */}
                            <Text style={{color: 'teal', fontSize: 15}}>Change Password</Text>
                        
                    </TouchableOpacity>
        </View>
     );
}
 
export default ChangePassword;