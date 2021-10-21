import React from 'react';
import { View, Text, TextInput, Pressable, Image } from 'react-native';
import { Card,RadioButton } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker'
import styles from './styles';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import CardDetailsPage from './CardDetails/CardDetails';

const SummaryPage = props => {

    const [instruction, onChangeInstruction] = React.useState('');
    const [checked, setChecked] = React.useState('No');


    return ( 
        <View style={{ padding: 10}}>
            <View>
                <Text style={styles.title}>Summary</Text>
            </View>

            <View>

            <Card style={{height: 300,padding:15, elevation: 5, marginTop: 15, borderRadius: 25,  justifyContent: 'center', zIndex: 0}}>
                

                <View style={{height: 20}}></View> 
                <View style={styles.rowView}>
                    <Text style={{color: 'teal', fontSize: 17, fontWeight:'bold'}}>Total</Text>
                    <Text style={styles.subTitle}>R60</Text>
                </View>

                <View>
                    <View style={{height: 15}}></View>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <View style={{backgroundColor: 'teal', borderRadius: 100, marginRight:5, width: 5, height: 5}}></View>
                        <Text style={{color:'gray', fontSize:12}}>Pick up Address</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'teal', fontSize: 14}}>234 Brima Road, Villy estate 219</Text>
                    </View>
                </View>


                <View>
                    <View style={{height: 15}}></View>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <View style={{backgroundColor: 'teal', borderRadius: 100, marginRight:5, width: 5, height: 5}}></View>
                        <Text style={{color:'gray', fontSize:12}}>Drop Off Address</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'teal', fontSize: 14,}}>5 Marlin Rd, Jet Park, Boksburg, 145</Text>
                    </View>
                </View>


                <View style={{height: 25}}></View>


                <View style={styles.rowView}>
                    <Text style={styles.radioText}>Is the package Fragile?</Text>
                    <View style={styles.rowView}>
      <Text style={styles.radioText}>Yes</Text>
      <RadioButton
        value="Yes"
        status={ checked === 'Yes' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('Yes')}
      />
      <Text style={styles.radioText}>No</Text>
      <RadioButton
        value="No"
        status={ checked === 'No' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('No')}
      />
    </View>
                </View>


                <View style={{height: 20}}></View>

                
            </Card>


            <View style={{...styles.rowView, padding: 10, paddingVertical: 25}}>
                
                        <View style={{justifyContent: 'center', alignItems: 'center', bottom:2}}>

                        <Image 
style={{width:50, height:50}}
  resizeMode = 'contain'
source={require('../../assets/images/AddPayment.png')} />
                        </View>
                    
                   
                    <View style={{right: 30}}>
                        <Text style={{color: 'teal', fontWeight:'bold', fontSize: 14}}>Add Payment Method</Text>
                        <Text style={{color: 'grey', fontWeight:'600', fontSize: 12}}>Credit / Debit Card</Text>
                    </View>
                    <Card style={{...styles.circularIcon, width: 25, height: 25}}>
                        <Pressable onPress={() => props.navigation.navigate("CardDetailsPage")} style={{justifyContent: 'center', alignItems: 'center', top: 6}}>

                            <Icon name='plus' size={15}></Icon>
                        </Pressable>
                    
                    </Card>
                </View>


                {/* <View style={{height: 35}}></View>
                    <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5,}}>
                        <Pressable style={styles.button} onPress={() => props.navigation.navigate(CardDetailsPage)}>
                            <Text style={{color: 'teal', fontSize: 20}}>Continue</Text>
                        </Pressable>
                    </View> */}
            </View>
        </View>
     );
}
 
export default SummaryPage;