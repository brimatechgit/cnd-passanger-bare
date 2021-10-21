import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView, Text,  TouchableOpacity} from 'react-native';
import  {GooglePlacesAutocomplete}  from 'react-native-google-places-autocomplete';
import  {useNavigation}  from '@react-navigation/native';
import IconIonic from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';
import PlaceRow from "./PlaceRow";
import PickUpLocationDetails from './PickUpDetails/PickUpDetails.js';
import ConfirmPage from './ConfirmPage/ConfirmPage.js';
import { Card } from 'react-native-paper';

const homePlace =  {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};

const SetAddress = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  const checkNavigation = () => {
    // if (originPlace && destinationPlace) {
      
      
      // navigation.navigate('PickUpLocationDetails', {
      //   originPlace,
      //   destinationPlace,
      // })
    // }
  }

  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);

  const [cardName, onChangeCardName] = React.useState("");

  return (
    <SafeAreaView>

    



      <View style={{padding: 10}}>
        <Text style={{color: 'teal', fontSize: 22, fontWeight: 'bold'}}>Set Work Location</Text>

        <View style={{flexDirection:'row',  alignItems:'center'}}>
            <View style={{width: 8,
            height: 8,
            borderRadius: 50,
            marginHorizontal: 5,
            backgroundColor: 'teal',}} />
            <Card style={{borderRadius: 50, width:'90%'}}>
                <TextInput
                                    style={styles.inputBottom}
                                    onChangeText={onChangeCardName}
                                    value={cardName}
                                    placeholder='Current/Pick up'
                                    keyboardType='default'
                                    color='teal'  
                                />
            </Card>
        </View>

      </View>
      <View style={{padding: 10}}>
        <Text style={{color: 'teal', fontSize: 22, fontWeight: 'bold'}}>Set Home Location</Text>

        <View style={{flexDirection:'row',  alignItems:'center'}}>
            <View style={{width: 8,
            height: 8,
            borderRadius: 50,
            marginHorizontal: 5,
            backgroundColor: 'teal',}} />
            <Card style={{borderRadius: 50, width:'90%'}}>
                <TextInput
                                    style={styles.inputBottom}
                                    onChangeText={onChangeCardName}
                                    value={cardName}
                                    placeholder='Current/Pick up'
                                    keyboardType='default'
                                    color='teal'  
                                />
            </Card>
        </View>

      </View>

        <View style={{alignItems: 'center', top: '60%'}}>
<TouchableOpacity onPress={() => navigation.pop()} style={styles.button}>
                        
                        <Text style={{color: 'teal', fontSize: 15}}>Continue</Text>
                    
                </TouchableOpacity>

          </View>
    </SafeAreaView>
  );
};

export default SetAddress;