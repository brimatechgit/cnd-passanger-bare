import React from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import DestinationSearch from '../../screens/DestinationPage/DestinationPage';
import Button from '../Button/Button';
import styles from './styles';


const BottomHomeNav = ({navigation}) => {
    return ( 
        <View style={styles.container}>
            <View style={{alignItems:'center'}}>
                {/* get username here */}
                <Text style={{fontSize: 22, color: 'teal', fontWeight: 'bold'}}>Hi J,</Text>
                <View style={{height: 10}}></View> 
                <View style={{width: '75%'}}>

                    <Text style={{textAlign: 'center', color: 'teal', fontWeight: 'bold', fontSize: 15}}>Where would you like us to pick up & drop off your parcel?</Text>
                </View>
            </View>
            

                    {/* <TouchableOpacity onPress={() => navigation.navigate(DestinationSearch)} style={styles.button}>
                     {/* navigation.navigate(DestinationSearch)  
                            <Text style={{color: 'teal', fontSize: 15}}>Where Are You?</Text>
                        
                    </TouchableOpacity> */}

                    <Button text='Where Are You?' navPage='DestinationSearch' navigation={navigation}></Button>
            
        </View>
     );
}
 
export default BottomHomeNav;