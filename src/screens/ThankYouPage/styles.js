import React from 'react';
import { View, Text, TextInput } from 'react-native';



const ThankYouPage = () => {
    return ( 
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'teal', fontSize: 20}}>Thank You</Text>
            <View style={{width: 200, justifyContent: 'center'}}>
                <Text style={{color: 'teal', fontSize: 20, textAlign: 'center'}}>Your Parcel has been delivered</Text>
            </View>
            <Text style={{color: 'teal', fontSize: 15}}>Please rate the app/service</Text>
        </View>
     );
}
 
export default ThankYouPage;