import React from 'react';
import { View, Text, Pressable } from 'react-native';
import ConnectDriver from '../../../../../compnents/ConnectDriver/ConnectDriver';
import DriverLoad from '../../../../../compnents/ConnectDriver/DriverLoad';
import MapComponent from '../../../../../compnents/MapComponent/MapComponent';


const ConnectDriverPage = ({route}) => {

    const {reqDoc, navigation} = route.params;


    return ( 
        <View>
            <MapComponent navigation={navigation}></MapComponent>
            <ConnectDriver navigation={navigation} name='Brima Driver'></ConnectDriver>
            {/* <DriverLoad></DriverLoad> */}
        </View>
     );
}
 
export default ConnectDriverPage;