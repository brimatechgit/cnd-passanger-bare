import React from 'react';
import styles from './styles';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import MapView,  {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import AccountPage from '../../screens/AccountPage/AccountPage';


const ParcelMapComponent = props => {
    return ( 
        <View style={styles.container}>
            
            <MapView style={styles.map} 
            
            style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{ 
        latitude: -26.16299249170051,
        longitude: 28.225375324978117,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}
            >

        <Marker
          coordinate={{
            latitude: -26.16299249170051,
            longitude: 28.225375324978117,}}
        ></Marker>

        
        
            </MapView>
            {/* <TouchableOpacity style={styles.overlay} onPress={() => props.navigation.navigate(AccountPage)}>
              <Icon name='menu' size={35} color='white'></Icon>
            </TouchableOpacity> */}

        </View>
     );
}
 
export default ParcelMapComponent;