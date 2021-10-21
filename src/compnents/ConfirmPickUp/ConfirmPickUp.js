import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import ConnectDriverPage from '../../screens/SummaryPage/CardDetails/ConfirmPickUpPage/ConnectDriverPage/ConnectDriverPage';
import styles from './styles';

const ConfirmPickUp = props => {
    return ( 
        <View style={styles.container}>
            <View style={{alignItems:'center'}}>
                {/* get username here */}
                <Text style={{fontSize: 22, color: 'teal'}}>Confirm Pick Up</Text>
                <View style={{height: 10}}></View> 
            </View>
            
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'teal', fontSize: 17, fontWeight: 'bold'}}>Pick Up in 5min | R60 | Clickie </Text>

                
            </View>
            <View style={{height: 5}}></View>
            <View style={{justifyContent:'center', flexDirection: 'row', alignItems:'center'}}>
                    {/* dot icon here */}
                    <View style={styles.circle} />

                    <Text style={{color:'teal', fontSize: 17, fontWeight: 'bold', paddingLeft: 10}}>453 Unicon Villy</Text>
                </View>

                <View style={{height: 5}}></View>

                    <TouchableOpacity onPress={() => props.navigation.navigate(ConnectDriverPage)} style={styles.button}>
                    
                            <Text style={{color: 'teal', fontSize: 15}}>Confirm Request</Text>
                        
                    </TouchableOpacity>
            
        </View>
     );
}
 
export default ConfirmPickUp;