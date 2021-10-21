import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import RequestCard from '../../../compnents/RequestCard/RequestCard';
import AccountPage from '../../AccountPage/AccountPage';
import MapView,  {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import ParcelMapComponent from '../../../compnents/ParcelMap/ParcelMapComponent';


const ParcelPage = ({navigation}) => {
    return ( 
        <View>

            <ParcelMapComponent navigation={navigation}></ParcelMapComponent>
            
            <RequestCard navigation={navigation}></RequestCard>

            {/* <BottomHomeNav></BottomHomeNav> */}
        </View>
     );
}
 
export default ParcelPage;