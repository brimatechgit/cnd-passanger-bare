import React from 'react';
import { View, Text, TextInput, Pressable, Image, Dimensions } from 'react-native';
import {Button, Card, Snackbar}from 'react-native-paper';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import  IconIon  from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { useLinkProps } from '@react-navigation/native';
import HomePage from '../../HomePage/HomePage';
import BottomHomeNav from '../../../compnents/BottomHomeNav/BottomHomeNav';
import ConfirmCard from '../../../compnents/ConfirmCard/CornfirmCard';
import ConfirmPickUp from '../../../compnents/ConfirmPickUp/ConfirmPickUp';
import ConfirmPickUpPage from './ConfirmPickUpPage/ConfirmPickUpPage';
// import Button from '../../../compnents/Button/Button';



const CardDetailsPage = props => {

    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);
  
    const onDismissSnackBar = () => setVisible(false);

    const [errorMessage, setErrorMsg] = React.useState('Cant submit empty field');

    const [cardName, onChangeCardName] = React.useState("");
    const [cardNum, onChangeCardNum] = React.useState("");
    const [expDate, onChangeExpDate] = React.useState("");
    const [cvv, onChangeCvv] = React.useState("");

    const validator = () => {
        
        if(cvv != '' && expDate != '' && cardNum != '' && cardName != ''){
            // props.navigation.navigate("ConfirmPickUpPage")
            props.navigation.navigate("PaymentPage")
            //integrate paygate  payments here

        }else {
          // setErrorMsg('street name and num not given');
          setVisible(!visible)
        }


}

    return ( 
        <View style={{flex:1, padding: 15}}>
            <Text style={{fontSize: 22, fontWeight: 'bold', color: 'teal', paddingVertical:10}}>Add Card Details</Text>

            <Card style={{borderRadius: 25, elevation: 10, height: 300, padding: 15}}>
            <Text style={{fontWeight:'100', padding: 5}}>Card Holder Name</Text>
                <Card style={{elevation: 10, borderRadius: 25, padding:1}}>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                        <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeCardName}
                                value={cardName}
                                placeholder='Bri Ma'
                                keyboardType='default'
                                color='teal'  
                            />
                            
                            <Card style={{borderRadius: 50, elevation: 10, width: 30, height: 30, alignItems: 'center', right: 5}}>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>

                                    <Icon name='close' size={20} style={{top: 4, }}></Icon>
                                </View>
                                
                                </Card>
                            
                        </View>
                </Card>
                <Text style={{fontWeight:'100', padding: 5}}>Card Number</Text>
                <Card style={{elevation: 10, borderRadius: 25, padding:1}}>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                        <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeCardNum}
                                value={cardNum}
                                placeholder='0000 0000 0000 0000'
                                keyboardType='number-pad'  
                            />
                            
                            <Card style={{borderRadius: 50, elevation: 10, width: 30, height: 30, alignItems: 'center', right: 5}}>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>

                                    <Icon name='close' size={20} style={{top: 4, }}></Icon>
                                </View>
                                
                                </Card>
                            
                        </View>
                </Card>


                <View style={{height: 10}}></View>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <View style={{alignItems:'center'}}>
                        <Text style={{right:'2%'}}>Expiry Date</Text>
                        <Card style={{width: 90, borderRadius: 50, elevation: 5,}}>
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
                    <View style={{alignItems:'center'}}>
                        <Text>Security Code</Text>
                        <Card style={{width: 90, borderRadius: 50, elevation: 5}}>
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
                    <Pressable onPress={() => props.navigation.navigate("CardTnC")} style={{ padding: 5, alignItems:'center', justifyContent:'center'}}><Text style={{color: 'teal', fontSize: 15,alignItems: 'center'}}>Terms and conditions</Text></Pressable>

                </View>
            </Card>

            <View style={{height: 35}}></View>
                    {/* <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5,}}>
                        <Pressable style={styles.button} onPress={() => props.navigation.navigate(ConfirmPickUpPage)}>
                        {/* props.navigation.navigate(ConfirmPickUpPage) 
                            <Text style={{color: 'teal', fontSize: 20}}>Proceed to Pay</Text>
                        </Pressable>
                    </View> */}

                    

                        <Button onPress={validator} style={{backgroundColor:'white', borderRadius:25, borderColor:'teal', borderWidth:1, color:'teal', marginLeft:25, marginRight:25}}> <Text style={{color: 'teal', fontSize: 20, alignItems:'center'}}>Proceed to Pay</Text></Button>


                        {/* <Pressable style={[styles.button]} onPress={validator}>
                       
                            <Text style={{color: 'teal', fontSize: 20, alignItems:'center'}}>Proceed to Pay</Text>
                        </Pressable> */}

                    {/* <Button text='Proceed to Pay' navPage='ConfirmPickUpPage' navigation={props.navigation}/> */}

                    <View style={{height: 15}}></View>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View>
                        
                            <Icon name='security' size={22} color='green'></Icon>
                        </View>
                        
                            
                        <Text style={{color: 'teal', fontSize: 12,alignItems: 'center',}}>Secured with SSL encryption technology</Text>
                    </View>

                    <View style={{flexDirection:'row', padding:15, alignItems:'center'}}>
                                            <Image 
                        style={{flex: 1, width:20, height: 18,}}
                        resizeMode = 'contain'
                        source={require('../../../assets/images/payment/Visa.png')} />
                                            <Image 
                        style={{flex: 1, width:20, height: 18}}
                        resizeMode = 'contain'
                        source={require('../../../assets/images/payment/Express.png')} />
                                            <Image 
                        style={{flex: 1, width:20, height: 18}}
                        resizeMode = 'contain'
                        source={require('../../../assets/images/payment/Mastercard.png')} />
                                            <Image 
                        style={{flex: 1, width:20, height: 30}}
                        resizeMode = 'contain'
                        source={require('../../../assets/images/payment/MasterCardSecure.png')} />
                                            <Image 
                        style={{flex: 1, width:20, height: 30}}
                        resizeMode = 'contain'
                        source={require('../../../assets/images/payment/VerifiedVisa.png')} />
                    </View>
                    
                   


                    {/* <Snackbar
            duration={400}
            visible={visible}
            onDismiss={onDismissSnackBar}
            style={{backgroundColor:'red', color:'white', borderRadius: 25, alignItems:'center', justifyContent:'center'}}
            >
            {errorMessage}
          </Snackbar> */}
        </View>
     );
}
 
export default CardDetailsPage;