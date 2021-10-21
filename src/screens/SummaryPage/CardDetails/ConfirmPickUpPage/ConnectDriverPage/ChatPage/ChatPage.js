import React from 'react';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { View,Text,  } from 'react-native';



const ChatPage = () => {
    return ( 
        <View style={{flex:1}}>
            <Text style={{color:'teal'}}>Message Driver</Text>

            <View>
                <Icon name='md-chatbubbles' size={25}></Icon>
            </View>
        </View>
     );
}
 
export default ChatPage;