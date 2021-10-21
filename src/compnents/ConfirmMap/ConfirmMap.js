import React, {useState} from 'react';
import styles from './styles';
import { View, Text, Pressable, TouchableOpacity,Image } from 'react-native';
import MapView,  {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/Ionicons';
import AccountPage from '../../screens/AccountPage/AccountPage';


const ConfirmMap = props => {

    const [coordinates] = useState([
        {
          latitude: props.origin.details.geometry.location.lat,
          longitude: props.origin.details.geometry.location.lng,
        },
        {
          latitude: props.destination.details.geometry.location.lat,
          longitude: props.destination.details.geometry.location.lng,
        },
      ]);

    return ( 
        <View style={styles.container}>
            
            <MapView style={styles.map} 
            
            style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      apikey={'AIzaSyCSH6EQada1HpeyGTMQMaEI8rKdgd6QhMc'} // insert your API Key here
      initialRegion={{ 
        latitude: coordinates[0].latitude,
        longitude: coordinates[0].longitude,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}
            >
                <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={'AIzaSyCSH6EQada1HpeyGTMQMaEI8rKdgd6QhMc'} // insert your API Key here
          strokeWidth={4}
          strokeColor="#111111"
        />

        <Marker
          coordinate={coordinates[0]}
        >
            <Image 
            style={styles.marker}
            resizeMode = 'contain'
            source={require('../../../src/assets/images/pin.png')} />
        </Marker>
        <Marker
          coordinate={coordinates[1]}
        >
            <Image 
            style={styles.marker}
            resizeMode = 'contain'
            source={require('../../../src/assets/images/pin.png')} />
        </Marker>

        
        
            </MapView>
            <TouchableOpacity style={styles.overlay} onPress={() => props.navigation.navigate("AccountPage")}>
              <Icon name='menu' size={35} color='white'></Icon>
            </TouchableOpacity>

        </View>
     );
}
 
export default ConfirmMap;