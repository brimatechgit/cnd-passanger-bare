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

    const MINUTE_MS = 9000;
   

    useEffect(() => {
      const interval = setInterval(() => {
        firestore().collection('requests').doc(reqDoc).get().then( res => {
              console.log(res.data())
              if(res.data()['reqstatus'] == 'Accepted') {
                navigation.navigate("ConnectDriverPage", {
                  reqDoc: reqDoc,
                  driverID: res.data()['driverID']['id'],
                  driverName: res.data()['driverID']['name']
                })
              }
          });
      }, MINUTE_MS);
    
      return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [])


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