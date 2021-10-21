import React from 'react';
import { View, Text, TextInput, Pressable,Image } from 'react-native';
import {Card}from 'react-native-paper';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import  IconIon  from 'react-native-vector-icons/Ionicons';
import styles from './styles';



const AccountCardDetailsPage = props => {

    const [cardName, onChangeCardName] = React.useState("");
    const [cardNum, onChangeCardNum] = React.useState("");
    const [expDate, onChangeExpDate] = React.useState("");
    const [cvv, onChangeCvv] = React.useState("");

    return ( 
        <View style={{flex:1, padding: 10}}>
            <View style={{alignItems:'center', padding: 15, flexDirection:'row', justifyContent:'center'}}>
            <Image 
                          style={{height: 45, width: 45}}
                        resizeMode = 'contain'
                        source={require('../../../assets/images/AddPayment.png')} />
                <Text style={{fontSize: 22, fontWeight: '600', color: 'teal'}}>Card Details</Text>
            </View>

            <Card style={{borderRadius: 25, elevation: 10, height: 350, padding: 15}}>
                <Text style={{fontWeight:'100', padding: 5}}>Card Holder Name</Text>
                <Card style={{elevation: 10, borderRadius: 25, padding:2}}>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                        <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeCardName}
                                value={cardName}
                                placeholder='Bri Ma'
                                keyboardType='default'
                                color='teal'  
                            />
                            
                            <Card style={{borderRadius: 50, elevation: 10, width: 35, height: 35, alignItems: 'center', right: 5}}>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>

                                    <Icon name='close' size={20} style={{top: 8, }}></Icon>
                                </View>
                                
                                </Card>
                            
                        </View>
                </Card>
                <Text style={{fontWeight:'100', padding: 5}}>Card Number</Text>
                <Card style={{elevation: 10, borderRadius: 25, padding:2}}>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                        <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeCardNum}
                                value={cardNum}
                                placeholder='0000 0000 0000 0000'
                                keyboardType='number-pad'  
                            />
                            
                            <Card style={{borderRadius: 50, elevation: 10, width: 35, height: 35, alignItems: 'center', right: 5}}>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>

                                    <Icon name='close' size={20} style={{top: 8, }}></Icon>
                                </View>
                                
                                </Card>
                            
                        </View>
                </Card>


                <View style={{height: 10}}></View>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <View>
                        <Text>Expiry Date</Text>
                        <Card style={{width: 100, borderRadius: 50, elevation: 5}}>
                        <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeExpDate}
                                value={expDate}
                                placeholder='MM/YY'
                                keyboardType='number-pad' 
                                maxLength={4} 
                            />
                        </Card>
                    </View>
                    <View>
                        <Text>Security Code</Text>
                        <Card style={{width: 100, borderRadius: 50, elevation: 5}}>
                        <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeCvv}
                                value={cvv}
                                placeholder='CVV'
                                keyboardType='number-pad' 
                                maxLength={3} 
                            />
                        </Card>
                    </View>
                </View>


                <View style={{height: 15}}></View>

                <View style={{alignItems: 'center'}}>
                    <Text style={{color: 'teal', fontSize: 10,alignItems: 'center'}}>We need to verify your card on your banking App</Text>

                </View>
            </Card>

            <View style={{height: 35}}></View>
                    <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5,}}>
                        <Pressable style={styles.button} onPress={() => props.navigation.pop()}>
                        {/* props.navigation.navigate(ConfirmPickUpPage) */}
                            <Text style={{color: 'teal', fontSize: 20}}>Update</Text>
                        </Pressable>
                    </View>

                    <View style={{height: 15}}></View>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View>
                        
                            <Icon name='security' size={22} color='green'></Icon>
                        </View>
                        
                            
                        <Text style={{color: 'teal', fontSize: 12,alignItems: 'center'}}>Secured with SSL encryption technology</Text>
                    </View>
        </View>
     );
}
 
export default AccountCardDetailsPage;