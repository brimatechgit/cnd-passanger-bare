import React from 'react';
import { View, Text, Pressable } from 'react-native';
import ConnectDriver from '../../../../../compnents/ConnectDriver/ConnectDriver';
import DriverLoad from '../../../../../compnents/ConnectDriver/DriverLoad';
import MapComponent from '../../../../../compnents/MapComponent/MapComponent';


const ConnectDriverPage = ({navigation}) => {
    return ( 
        <View>
            <MapComponent navigation={navigation}></MapComponent>
            <ConnectDriver navigation={navigation} name='Tshepang'></ConnectDriver>
            {/* <DriverLoad></DriverLoad> */}
        </View>
     );
}
 
export default ConnectDriverPage;