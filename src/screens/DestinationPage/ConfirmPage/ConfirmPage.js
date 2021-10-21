import React from 'react'
import { View, Text,  } from 'react-native';
import ConfirmCard from '../../../compnents/ConfirmCard/CornfirmCard';
import MapComponent from '../../../compnents/MapComponent/MapComponent';
import { useRoute, useNavigation } from '@react-navigation/native';
import ConfirmMap from '../../../compnents/ConfirmMap/ConfirmMap';


const ConfirmPage = ({navigation, props}) => {

    const route = useRoute();

    const {originPlace, destinationPlace,} = route.params

    return ( 
        <View>
            <ConfirmMap navigation={navigation} origin={originPlace} destination={destinationPlace}></ConfirmMap>
            {/* <MapComponent navigation={navigation} origin={originPlace} destination={destinationPlace}></MapComponent> */}
            <ConfirmCard navigation={navigation} origin={originPlace} destination={destinationPlace} ></ConfirmCard>
        </View>
     );
}
 
export default ConfirmPage;