import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import {Button, Card}from 'react-native-paper';
import  {useNavigation}  from '@react-navigation/native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import PickUpLocationDetails from '../../screens/DestinationPage/PickUpDetails/PickUpDetails';
import ConnectDriverPage from '../../screens/SummaryPage/CardDetails/ConfirmPickUpPage/ConnectDriverPage/ConnectDriverPage';
import styles from './styles';

const ConfirmCard = ({origin, destination, or, props}) => {

    const navigation = useNavigation();

    return ( 
        <View style={styles.container}>
            <View style={{alignItems:'center'}}>
                {/* get username here */}
                <Text style={{fontSize: 22, color: 'teal'}}>Confirm Pick Up</Text>
                <View style={{height: 10}}></View> 
            </View>
            <View style={{height: 5}}></View>

            



            <View style={{justifyContent:'center', flexDirection: 'row', alignItems:'center'}}>
                    {/* dot icon here */}
                    <View style={styles.circle} />
                    
                <Card style={{elevation: 5, borderRadius: 25, padding:2, width: '85%', margin: 5}}>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>

                        <Text style={{color:'teal', fontSize: 15, paddingLeft: 10}}>{origin.details.vicinity}</Text>
                            
                            <Card style={{borderRadius: 50, elevation: 4, width: 35, height: 35, alignItems: 'center', right: 5}}>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>

                                    <Icon name='close' size={20} style={{top: 8, }}></Icon>
                                </View>
                                
                                </Card>
                            
                        </View>
                </Card>
                
                </View>
                
                {/* <Button style={{}} onPress={()=> navigation.navigate("PickUpLocationDetails")}>test mee</Button> */}

                <View style={{height: 5}}></View>




                {/* <TouchableOpacity onPress={() => {navigation.navigate(PickUpLocationDetails)}} style={[styles.button, {margin:5}]}>
                        
                                        <Text style={{color: 'teal', fontSize: 15}}>Yes, Cancel</Text>
                                    
                                    </TouchableOpacity> */}

                {/* props.navigation.navigate(PickUpLocationDetails) */}

                    <Pressable onPress={() => navigation.navigate("PickUpLocationDetails")} style={styles.button}>
                    
                            <Text style={{color: 'teal', fontSize: 15}}>Confirm</Text>
                        
                    </Pressable>

                    {/* <Button text='Continue' navPage='' ></Button> */}
                    
            
        </View>
     );
}
 
export default ConfirmCard;