import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions, Pressable, Image } from 'react-native';
import {Card, Snackbar}from 'react-native-paper';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import PickUpLocationDetails from '../../screens/DestinationPage/PickUpDetails/PickUpDetails';
import ConnectDriverPage from '../../screens/SummaryPage/CardDetails/ConfirmPickUpPage/ConnectDriverPage/ConnectDriverPage';
import Modal from "react-native-modal";
import styles from './styles';
import SummaryPage from '../../screens/SummaryPage/SummaryPage';
import { validate } from 'compare-versions';

const RequestCard = props => {


    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);
  
    const onDismissSnackBar = () => setVisible(false);

    const [errorMessage, setErrorMsg] = React.useState('Please pick parcel type');

    const deliText = 'For a successful delivery, please make sure your package is under 50kgs, securely sealed and not a prohibited item.';
    const deliSmallText = 'For a successful delivery, please make sure your package is under 30kgs, securely sealed and not a prohibited item.';
    const [isModalVisible, setModalVisible] = React.useState(false);
    const [isModalVisibleSmall, setModalVisibleSmall] = React.useState(false);
    const [parcel, setParcel] = React.useState('none')
    const [bkg, setBkg] = React.useState('white');
    const [bkgSmall, setBkgSmall] = React.useState('white');

    const toggleModal = () => {
        setModalVisible(!isModalVisible);

        console.log(parcel)
        // (bkg != 'gray') ? setBkg('gray') : setBkg('white');
        // (bkg == 'gray') ? setBkg('white') : setBkg('gray');


      };
    const toggleSmallModal = () => {
        setModalVisibleSmall(!isModalVisibleSmall);

        console.log(parcel)
      };
    const toggleParcel = () => {
        setBkg('gray')
      };

      const validator = () => {
        
            if(parcel != 'none'){
                props.navigation.navigate("SummaryPage")
            }else {
              // setErrorMsg('street name and num not given');
              setVisible(!visible)
            }


    }

      const smallBaseFare = 60;
      const mediumBaseFare = 90;

    return ( 
        <View style={styles.container}>
           
            <View style={{height: 5}}></View>

            <View style={{justifyContent:'center', flexDirection: 'row', alignItems:'center'}}>
                    {/* dot icon here */}
                    {/* <View style={styles.circle} /> */}
                    <Image 
style={{width:45, height:45}}
  resizeMode = 'contain'
source={require('../../assets/images/CNDbike.png')} />
                
                    
                <Card style={{elevation: 5, borderRadius: 25, padding:2, width: '85%', margin: 5, backgroundColor: bkgSmall}} onPress={toggleSmallModal}>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>

                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Text style={{color:'teal', fontSize: 17, fontWeight: 'bold', paddingLeft: 10}}>Small Parcels</Text>
                            <Text style={{color:'gray', fontSize: 12, paddingLeft: 10}}> |  5 min </Text>
                        </View>
                            
                        <View>
                            <Text style={{color:'teal', fontSize: 17, fontWeight: 'bold', padding: 10}}>R{smallBaseFare}</Text>
                        </View>
                            
                        </View>
                </Card>

                <Snackbar
            duration={400}
            visible={visible}
            onDismiss={onDismissSnackBar}
            style={{backgroundColor:'red', color:'white', borderRadius: 25, alignItems:'center', justifyContent:'center'}}
            >
            {errorMessage}
          </Snackbar>
                    
                </View>

            <View style={{justifyContent:'center', flexDirection: 'row', alignItems:'center'}}>
                    {/* dot icon here */}
                    {/* <View style={styles.circle} /> */}

                   
                    <Image 
style={{width:45, height:45}}
  resizeMode = 'contain'
source={require('../../assets/images/CNDMOTOR.png')} />
         
                    
                <Card style={{elevation: 5, borderRadius: 25, padding:2, width: '85%', margin: 5, backgroundColor: bkg}} onPress={toggleModal}>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>

                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Text style={{color:'teal', fontSize: 17, fontWeight: 'bold', paddingLeft: 10}}>Medium Parcels</Text>
                            <Text style={{color:'gray', fontSize: 12, paddingLeft: 10}}> |  5 min </Text>
                        </View>
                            
                        <View>
                            <Text style={{color:'teal', fontSize: 17, fontWeight: 'bold', padding: 10}}>R{mediumBaseFare}</Text>
                        </View>
                            
                        </View>
                </Card>
                    
                </View>

                <View style={{height: 20}}></View>

                

                    <TouchableOpacity onPress={validator} style={styles.button}>
                    
                            <Text style={{color: 'teal', fontSize: 22, bottom:2}}>Request</Text>
                        
                    </TouchableOpacity>


                    <Modal isVisible={isModalVisible}
                            hasBackdrop={false}
                        >
                            <View style={{
                                height: Dimensions.get('window').height - 500,
                                width: Dimensions.get('window').width - 500,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: '#ccc',
                                borderWidth: 1,
                                borderStyle: 'solid',
                                backgroundColor: 'white',
                                elevation: 20,
                                padding: 15,
                                borderRadius: 25,
                            }}>
                                <View style={{padding: 10}}>
                                    <Text style={{fontSize: 18, fontWeight:'bold', paddingVertical: 10}}>Is your Package Ready?</Text>
                                    <Text style={{paddingVertical:10}}>{deliText}</Text>
                                    <Text style={{fontWeight:'bold', }}>Examples of Packages allowed:</Text>
                                        <Text style={{fontSize:12}}>Luggage bag, appliances, home printer etc.</Text>
                                    <View style={{flexDirection:'row', paddingTop:10}}>
                                        <Text>Package Delivery </Text> 
                                        <Pressable style={{ justifyContent: 'center'}} ><Text style={{color:'teal',}}>Terms & Conditions</Text></Pressable>

                                    </View>
                                
                                
                                </View>

                                <View style={{flexDirection:'column', alignItems:'center'}}>

                                <TouchableOpacity onPress={()=>{
                                    // (bkg != '#BDC3C7') ? setBkg('#BDC3C7') : setBkg('white');
                                    // (bkg == '#BDC3C7') ? setBkg('white') : setBkg('#BDC3C7');
                                    setBkg('#BDC3C7'), setBkgSmall('white')
                                    setParcel('Medium Parcel'); toggleModal()}} style={[styles.button, {width:'85%', padding:10}]}>
                    
                                    <Text style={{color: 'teal', fontSize: 15}}>Agree to Terms & Conditions</Text>
                                
                                </TouchableOpacity>

                                </View>
                            </View>


                    
                    </Modal>

                    <Modal isVisible={isModalVisibleSmall}
                            hasBackdrop={false}
                        >
                            <View style={{
                                height: Dimensions.get('window').height - 500,
                                width: Dimensions.get('window').width - 500,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: '#ccc',
                                borderWidth: 1,
                                borderStyle: 'solid',
                                backgroundColor: 'white',
                                elevation: 20,
                                padding: 15,
                                borderRadius: 25,
                            }}>
                                <View style={{padding: 10}}>
                                    <Text style={{fontSize: 18, fontWeight:'bold', paddingVertical: 10}}>Is your Package Ready?</Text>
                                    <Text style={{paddingVertical:10}}>{deliSmallText}</Text>
                                    <Text style={{fontWeight:'bold', }}>Examples of Packages allowed:</Text>
                                    <Text style={{fontSize:12}}>Documents, shoe box, laptop etc</Text>
                                    <View style={{flexDirection:'row', paddingTop:10}}>
                                        <Text>Package Delivery </Text> 
                                        
                                        <Pressable style={{ justifyContent: 'center'}}>
                                            <Text style={{color:'teal',}}>Terms & Conditions</Text>
                                        </Pressable>

                                    </View>
                                
                                
                                </View>

                                <TouchableOpacity onPress={()=> {setBkg('white'), setBkgSmall('#BDC3C7')
                                            setParcel('Small Parcel'); toggleSmallModal()}} style={[styles.button, {width:'85%'}]}>
                    
                                    <Text style={{color: 'teal', fontSize: 15}}>Agree to Terms & Conditions</Text>
                                
                                </TouchableOpacity>
                            </View>


                    
                    </Modal>


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
 
export default RequestCard;