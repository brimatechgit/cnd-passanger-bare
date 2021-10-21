import React, { useState } from 'react';
import { View, Text,TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';



const AboutPage = () => {

    const [cardName, onChangeCardName] = useState('')

    const cndAbout = 'ClicknDeliver is an application that has been developed to provide simplicity, accuracy, speed, and convenience at the click of a fingertip to ensure that small to medium seized packages are delivered with less worries. ';

    const cndAbout2 = 'The App allows the customer to instantaneously place an order for a courier service to pick up and deliver the parcel to any off the selected locations where the App is currently available';

    return ( 
        <View style={{flex:1, padding: 20}}>
            <View style={{alignItems:'center', padding: 15, flexDirection:'row', justifyContent:'center'}}>
            <Image 
                          style={{height: 45, width: 45}}
                        resizeMode = 'contain'
                        source={require('../../../assets/images/About.png')} />
                <Text style={{fontSize: 22, fontWeight: '600', color: 'teal'}}>About</Text>
            </View>

            <View>
                <Text style={{fontSize:15, color:'teal', paddingVertical: 10}}>{cndAbout}</Text>
                <Text style={{fontSize:15, color:'teal', paddingVertical: 10}}>{cndAbout2}</Text>

                <TouchableOpacity onPress={() => console.log('jel')} style={styles.button}>
                    
                            <Text style={{color: 'teal', fontSize: 15}}>Read More</Text>
                        
                    </TouchableOpacity>
            </View>

            <View style={{padding: 15, alignItems:'center'}}>
                <Text>Please rate the app/service</Text>

                <View style={{flexDirection: 'row', alignItems: 'center', padding: 15}}>
                    {/* star icons here */}
                    <Icon name='star' size={25} color='#f9a422'></Icon>
                    <Icon name='star' size={25} color='#f9a422'></Icon>
                    <Icon name='star' size={25} color='#f9a422'></Icon>
                    <Icon name='star' size={25} color='#f9a422'></Icon>
                    <Icon name='star' size={25} color='#f9a422'></Icon>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', padding: 15}}>
                    <Icon name='md-chatbubble' size={25} color='#3e7fc1'></Icon>
                    <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeCardName}
                                value={cardName}
                                placeholder='Comment'
                                keyboardType='default'
                                color='teal'  
                            />
                </View>
            </View>

        </View>
     );
}
 
export default AboutPage;