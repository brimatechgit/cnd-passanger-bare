import React, {useState, useEffect} from 'react';
import { View, Text, Pressable } from 'react-native';
import ConfirmPickUp from '../../../../compnents/ConfirmPickUp/ConfirmPickUp';
import ConnectDriver from '../../../../compnents/ConnectDriver/ConnectDriver';
import DriverLoad from '../../../../compnents/ConnectDriver/DriverLoad';
import MapComponent from '../../../../compnents/MapComponent/MapComponent';
import ConnectDriverPage from './ConnectDriverPage/ConnectDriverPage';


const ConfirmPickUpPage = ({navigation}) => {



   


     useEffect(() => {
        setTimeout(() => {
            navigation.navigate("ConnectDriverPage")
        }, 5000);
      }, []);


    return ( 
        <View>
            <MapComponent navigation={navigation}></MapComponent>
            {/* <ConfirmPickUp navigation={navigation}></ConfirmPickUp> */}
            {/* <ConnectDriver navigation={navigation}></ConnectDriver> */}
            
            <DriverLoad></DriverLoad>
        </View>
     );
}
 
export default ConfirmPickUpPage;