import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView, Text, Pressable, TouchableOpacity, Image, Dimensions} from 'react-native';
import  {GooglePlacesAutocomplete}  from 'react-native-google-places-autocomplete';
import  {useNavigation}  from '@react-navigation/native';
import IconIonic from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';
import PlaceRow from "./PlaceRow";
import PickUpLocationDetails from './PickUpDetails/PickUpDetails.js';
import ConfirmPage from './ConfirmPage/ConfirmPage.js';
import { Card, Snackbar } from 'react-native-paper';
import SetAddress from './SetAddress.js';
import Geolocation from 'react-native-geolocation-service';


const homePlace =  {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const DestinationSearch = (props) => {

  const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);
  
    const onDismissSnackBar = () => setVisible(false);

    const [errorMessage, setErrorMsg] = React.useState('Cant submit empty field');

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace != null && destinationPlace != null) {
      // console.log(originPlace.data.description);
      
      navigation.navigate('ConfirmPage', {
        originPlace,
        destinationPlace,
        
      })
    } else {
      setVisible(!visible)
    }
  }

  // useEffect(() => {
  //   checkNavigation();
  // }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View>

        
    <View style={{position:'absolute', top: 325, padding: 10, width:'100%'}}>
      <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal: 65}}>
        <Pressable onPress={() => props.navigation.navigate(SetAddress)} style={{flexDirection:'row', alignItems:'center', paddingHorizontal: 5}}>
          <Card style={{borderRadius: 50, padding: 5, elevation:10, margin: 5}}>
            <IconIonic name='home' color='teal' size={22}></IconIonic>
          </Card>
            <Text style={{color:'teal'}}>Home</Text>
        </Pressable>
        <Pressable onPress={() => props.navigation.navigate(SetAddress)} style={{flexDirection:'row', alignItems:'center', paddingHorizontal: 5}}>
          <Card style={{borderRadius: 50, padding: 5, elevation:10, margin: 5}}>
            <IconIonic name='briefcase' color='red' size={22}></IconIonic>
          </Card>
            <Text style={{color:'teal'}}> Work</Text>
        </Pressable>
      </View>
      
      <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal: 5, justifyContent:'center'}}>
          <Image 
    style={{height: 35, width: 35, paddingHorizontal: 5 }}
      resizeMode = 'contain'
    source={require('../../assets/images/chooseMap.png')} />
            <Text style={{color:'teal'}}>Choose on the map</Text>
        </View>

      </View>

      


<View style={{alignItems: 'center', top: Dimensions.get('window').height - 350}}>

            <Snackbar 
              duration={300} 
              visible={visible}
              onDismiss={onDismissSnackBar}
              style={{backgroundColor:'red', color:'white', borderRadius: 25, alignItems:'center', justifyContent:'center', position: 'absolute', top:Dimensions.get('window').height - 650}}
              >
            {errorMessage}
          </Snackbar>
                <TouchableOpacity onPress={checkNavigation} style={styles.button}>
                        
                        <Text style={{color: 'teal', fontSize: 15}}>Continue</Text>
                    
                </TouchableOpacity>
                
          </View>

          
      <View style={{padding: 10}}>
        <Text style={{color: 'teal', fontSize: 22, fontWeight: 'bold'}}>Set Pick Up</Text>

      </View>
        
      
      <View style={styles.container}>
      <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          
          enablePoweredByContainer={false}
          // suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel='Current location'
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            components:'country:za',
            key: 'AIzaSyCSH6EQada1HpeyGTMQMaEI8rKdgd6QhMc',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
        
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          enablePoweredByContainer={false}
          // suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            components:'country:za',
            key: 'AIzaSyCSH6EQada1HpeyGTMQMaEI8rKdgd6QhMc',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />

        {/* Circle near Origin input */}
        <View style={styles.circle} />

        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destination input */}
        <View style={styles.square} />

      </View>
      
      

      </View>
                    {/* <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5,}}>
                        <Pressable style={styles.buttonBig} onPress={() => props.navigation.navigate(PickUpLocationDetails)}>
                            <Text style={{color: 'teal', fontSize: 20}}>Continue</Text>
                        </Pressable>
                    </View> */}

                    
    </SafeAreaView>
  );
};

export default DestinationSearch;