import React, {useState} from 'react';
import { View, Text, TextInput, Pressable,Image, Dimensions } from 'react-native';
import {Card, Snackbar} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker'
import styles from './styles';
import Icon  from 'react-native-vector-icons/Ionicons';
import DropOffInstruction from './DropOffInstructions/DropOffInstructions';
import SummaryPage from '../../SummaryPage/SummaryPage';
import ParcelPage from '../ParcelPage/ParcelPage';

const DropOffDetails = props => {


    
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);
  
    const onDismissSnackBar = () => setVisible(false);

    const [errorMessage, setErrorMsg] = React.useState('Cant submit empty field');

    const [streetName, onChangeStreetName] = React.useState('');
    const [contact, onChangeContact] = React.useState('');
    const [complex, onChangeComplex] = React.useState('');
    const [buildingName, onChangeBuildingName] = React.useState('');
    const [streetNumber, onChangeStreetNumber] = React.useState('');

    const [placeVal, setPlaceVals] = useState('Apartment Name & unit No');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = React.useState([
        {label: 'Complex / Estate', value: 'Complex'},
        {label: 'Apartment', value: 'Apartment'},
        {label: 'House', value: 'House'},
        {label: 'Office', value: 'Office'},
        {label: 'Hotel/B&B', value: 'Hotel/B&B'}
      ]);


      const changeVals = () => {
        if(value == 'Complex'){
            setPlaceVals('Complex Name & unit No');
        } else if( value == 'Apartment') {
            setPlaceVals('Apartment Name & unit No');
        } else if(value == 'Office') {
            setPlaceVals('Company name');
        } else if(value == 'Hotel/B&B') {
            setPlaceVals('Hotel name & room no');
        }
      }

      const validator = () => {
        if(value == 'House'){
            if(streetName != ''){
                props.navigation.navigate("ParcelPage")
            }else {
              // setErrorMsg('street name and num not given');
              setVisible(!visible)
            }
        } else {
            if(streetName != '' && complex != ''){
                props.navigation.navigate("ParcelPage")
            } else {  
              // setErrorMsg('Cant submit empty field');
              setVisible(!visible)
            }
        }


    }

    return ( 
        <View style={{flex: 1, padding: 15}}>
            <View>

            <View style={{flexDirection:'row'}}>
            <Image 
                            style={{width:35, height:35 }}
                            resizeMode = 'contain'
                            source={require('../../../assets/images/dropOffPin.png')} />
                <Text style={styles.title}>
                    <Text style={{fontWeight:'bold', elevation:5}}>Drop Off</Text> Location Details</Text>

            </View>
                <Text style={styles.subTitle}>We need full location details so we 
                    can pick up and drop off at accurate location
                </Text>
            </View>

            <View>
            <Card style={{height: 440,padding:15, elevation: 5, marginTop: 15, borderRadius: 25,  justifyContent: 'center', zIndex: 0}}>

            <View style={{alignItems:'center'}}>
                    <Image 
                            style={{width:105, height:105 }}
                            resizeMode = 'contain'
                            source={require('../../../assets/images/dropOff.png')} />
                   </View>

                    <View style={styles.form}>
                        <View>
                            <Text style={{fontSize: 15, padding: 10}}>Building Type</Text>
                            

                            <DropDownPicker
                            dropDownDirection={'BOTTOM'}
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                placeholder='Apartment'
                                style={styles.dropdown}
                                onChangeValue={changeVals}
                                />

                        </View>
                        <View>

                        <View >
                            {

                                (value != 'House') ? <TextInput
                                    style={styles.inputBottom}
                                    onChangeText={onChangeComplex}
                                    value={complex}
                                    placeholder={placeVal}
                                /> : null
                                
                            }

                        </View>

                        <View>
                            {/* <Text>Street Name</Text> */}
                            <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeStreetName}
                                value={streetName}
                                placeholder='Street Name & Street no'  
                            />

                        </View>

                        {/* <View >
                            {/* //should navigate to google search page 
                            {/* <Text>Address</Text> 
                            <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeStreetNumber}
                                value={streetNumber}
                                placeholder='Street No'  
                            />
                        </View> */}
                    


             

                        <View>
                            {/* <Text>Street Name</Text> */}
                            <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeContact}
                                value={contact}
                                placeholder='Recipient Contact Details'
                                keyboardType='number-pad'  
                            />

                        </View>
                    


                        </View>


                        
                    </View>

                    {/* <View style={{flexDirection: 'row',alignItems: 'center', padding: 10, }}>
                        <Card style={{borderRadius: 50, elevation: 10, padding: 5, }}><Icon name='md-document-text' size={40} color='teal'></Icon></Card>
                        <Text style={{alignItems: 'center', justifyContent: 'center', paddingRight: 20, left: 10, color: 'teal'}}>Add Pick Up Instructions</Text>
                        <Card style={{borderRadius: 50, elevation: 10, width: 25, height: 25, left: 25}}>
                        <Pressable onPress={() => props.navigation.navigate(DropOffInstruction)} >
                            <Icon name='add' size={15} color='teal' style={{top:5, left:5,justifyContent: 'center', alignItems: 'center'}}></Icon>
                            </Pressable>
                            </Card>
                    </View> */}


                    <View style={{flexDirection: 'row',alignItems: 'center', padding: 10,justifyContent:'center' }}>
                        <Image 
                            style={{width:45, height:45 }}
                            resizeMode = 'contain'
                            source={require('../../../assets/images/document.png')} />
                            
                            <View style={{paddingHorizontal: 10}}>
                                <Text style={{alignItems: 'center', justifyContent: 'center', paddingRight: 20, left: 10, color: 'teal'}}>Add Drop Up Instructions</Text>
                            </View>
                           
                            <Pressable onPress={() => props.navigation.navigate("DropOffInstruction")} >
                            <Image 
                            style={{width:35, height:35 }}
                            resizeMode = 'contain'
                            source={require('../../../assets/images/addSign.png')} />
                                </Pressable>
                           
                        </View>
                </Card>


                <View style={{height: 35}}></View>
                    <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5,}}>
                        <Pressable style={styles.button} onPress={validator}>
                            <Text style={{color: 'teal', fontSize: 20}}>Continue</Text>
                        </Pressable>
                    </View>
            </View>

            <Snackbar
            
        visible={visible}
        onDismiss={onDismissSnackBar}
        style={{backgroundColor:'red', color:'white', borderRadius: 25, alignItems:'center', justifyContent:'center'}}
        >
        {errorMessage}
      </Snackbar>
        </View>
     );
}
 
export default DropOffDetails;