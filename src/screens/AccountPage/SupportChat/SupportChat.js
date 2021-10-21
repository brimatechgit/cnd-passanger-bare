import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';


const SupportChat = () => {
    return ( 
        <View style={{flex:1, padding: 15, alignItems:'center'}}>
            <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
            <Image 
                          style={{height: 45, width: 45}}
                        resizeMode = 'contain'
                        source={require('../../../assets/images/SupportSettings.png')} />
                <Text style={{fontSize: 22, fontWeight: '800', color: 'teal'}}>Support</Text>
            </View>

            <View>
                <View style={{flexDirection:'row'}}>
                    <Icon name='chatbubble-ellipses' size={25}/>
                    <Text style={{fontWeight: 'bold'}}>ChatBot</Text>
                </View>
                
                <View style={{padding:10, alignItems:'center'}}>
                    <Text style={{color:'teal', fontSize: 15 }}>Welcome to ClicknDeliver, my name is J.</Text>
                    
                    <Text style={{color:'teal', fontSize: 15 }}>How can I help you?</Text>
                </View>
            </View>
    </View>
 
     );
}
 
export default SupportChat;