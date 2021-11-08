import React, {useState, useEffect} from 'react';
import { View, Text, Pressable } from 'react-native';
import ConfirmPickUp from '../../../../compnents/ConfirmPickUp/ConfirmPickUp';
import ConnectDriver from '../../../../compnents/ConnectDriver/ConnectDriver';
import DriverLoad from '../../../../compnents/ConnectDriver/DriverLoad';
import MapComponent from '../../../../compnents/MapComponent/MapComponent';
import ConnectDriverPage from './ConnectDriverPage/ConnectDriverPage';
import firestore from '@react-native-firebase/firestore';


const ConfirmPickUpPage = ({ navigation,route}) => {

    const {reqDoc} = route.params;
   

     useEffect(() => {
        setTimeout(() => {
            navigation.navigate("ConnectDriverPage", {reqDoc: reqDoc})
        }, 21000);
      }, []);


      //a listner

      function onResult(QuerySnapshot) {
        console.log('Got Users collection result.');
      }
      
      function onError(error) {
        console.error(error);
      }

      firestore().collection('requests').doc(reqDoc).onSnapshot(onResult, onError);

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