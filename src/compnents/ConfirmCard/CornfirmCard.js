import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator,TextInput, TouchableOpacity, Pressable } from 'react-native';
import {Button, Card}from 'react-native-paper';
import  {useNavigation}  from '@react-navigation/native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import PickUpLocationDetails from '../../screens/DestinationPage/PickUpDetails/PickUpDetails';
import ConnectDriverPage from '../../screens/SummaryPage/CardDetails/ConfirmPickUpPage/ConnectDriverPage/ConnectDriverPage';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';

const ConfirmCard = ({origin, destination, or, props, userDoc}) => {

    const navigation = useNavigation();

    const [reqDoc, setReqDoc] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    console.log(origin.details.geometry.location)


    const navFunction = () => {
        setIsLoading(true)
        firestore()
            .collection('requests')
            .add({
                pickup: origin.details.geometry.location,
                dropoff: destination.details.geometry.location,
                userID: userDoc,
                reqstatus: 'Pending',
            })
            .then((res) => {
                console.log('req created' + res.id);
                setReqDoc(res.id)

                navigation.navigate("PickUpLocationDetails", {
                    reqDoc: res.id,
                })
            });

            // navigation.navigate("PickUpLocationDetails", {
            //     reqDoc,
            // })
    }
    // useEffect(() => {
        
    // },[])

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

                <View style={{height: 5}}></View>

                    {isLoading ? 
                    
                    <ActivityIndicator color="teal" size="large" /> :
                    
                    <Pressable onPress={navFunction} style={styles.button}>
                    
                            <Text style={{color: 'teal', fontSize: 15}}>Confirm</Text>
                        
                    </Pressable>}
        </View>
     );
}
 
export default ConfirmCard;