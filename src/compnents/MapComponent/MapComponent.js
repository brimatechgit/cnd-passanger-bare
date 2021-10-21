import React, {Component} from 'react';
// import styles from './styles';
import { View, Text, Pressable, TouchableOpacity, StyleSheet,Dimensions, Image, SafeAreaView } from 'react-native';
import MapView,  {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import AccountPage from '../../screens/AccountPage/AccountPage';
const GOOGLE_MAPS_APIKEY = "AIzaSyCoKIwMwV8DlLQI4Rgdm7qzGVI7ZkuTU9c";




const { width, height } = Dimensions.get('window');
const latitudeDelta = 0.025
const longitudeDelta = 0.025

export class MapComponent extends Component {

  

  state = {
    // location: {},
    // errorMessage: '',


    region: {
      latitudeDelta,
      longitudeDelta,
      latitude: -26.16299249170051,
      longitude: 28.225375324978117
    }
  }



  onRegionChange = region => {
    this.setState({
      region
    })
  }

  render() {
    const { region } = this.state

    return (
      <View style={styles.map}>
        <MapView
          style={styles.map}
          initialRegion={region}
          provider={PROVIDER_GOOGLE}
          // apikey={'AIzaSyCoKIwMwV8DlLQI4Rgdm7qzGVI7ZkuTU9c'}
          onRegionChangeComplete={this.onRegionChange}
          // apikey={'AIzaSyCSH6EQada1HpeyGTMQMaEI8rKdgd6QhMc'} // insert your API Key here
        />
        <View style={styles.markerFixed}>
        <Image 
            style={styles.marker}
            resizeMode = 'contain'
            source={require('../../../src/assets/images/pin.png')} />
        </View>
        {/* <SafeAreaView style={styles.footer}>
          <Text style={styles.region}>{JSON.stringify(region, null, 2)}</Text>
        </SafeAreaView> */}
      </View>
    )
  }
}

// DisplayLatLng.propTypes = {
//   provider: ProviderPropType,
// };

const styles = StyleSheet.create({
  map: {
    width:'100%',
    height:'100%'
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%'
  },
  marker: {
    height: 70,
    width: 70
  },
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    position: 'absolute',
    width: '100%'
  },
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20
  }
})


export default MapComponent;
