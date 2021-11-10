import React from 'react';
import { View, Text, Pressable } from 'react-native';
import ConnectDriver from '../../../../../compnents/ConnectDriver/ConnectDriver';
import DriverLoad from '../../../../../compnents/ConnectDriver/DriverLoad';
import MapComponent from '../../../../../compnents/MapComponent/MapComponent';


const ConnectDriverPage = ({route, navigation}) => {

    const {reqDoc, driverID, driverName} = route.params;


    return ( 
        <View>
            <MapComponent navigation={navigation}></MapComponent>
            <ConnectDriver navigation={navigation} driverID={driverID} reqDoc={reqDoc} driverName={driverName}></ConnectDriver>
            {/* <DriverLoad></DriverLoad> */}
        </View>
     );
}
 
export default ConnectDriverPage;