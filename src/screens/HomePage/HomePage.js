import React from 'react';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import MapView,  {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import BottomHomeNav from '../../compnents/BottomHomeNav/BottomHomeNav';
import Icon from 'react-native-vector-icons/Ionicons';
import CardDetailsPage from '../SummaryPage/CardDetails/CardDetails';
import styles from './styles';
import AccountPage from '../AccountPage/AccountPage';
import MapComponent from '../../compnents/MapComponent/MapComponent';

const HomePage = ({navigation, route}) => {

    const { userDoc } = route.params;

    return ( 
        <View >
            <MapComponent navigation={navigation}></MapComponent>
           
            <BottomHomeNav navigation={navigation} userDoc={userDoc}></BottomHomeNav>

        </View>
     );
}
 
export default HomePage;