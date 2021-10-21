import React from 'react'
import { View, Text, Pressable, TouchableOpacity, Image } from 'react-native';
import {Card}from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../../compnents/Button/Button';
import HistorySummary from './HistorySummary';

import styles from './styles';


const HistoryPage = (props) => {

    

    return ( 
        <View style={{flex:1, padding: 10}}>
            <View style={{alignItems:'center', padding: 15, flexDirection:'row', justifyContent:'center'}}>
            <Image 
                          style={{height: 45, width: 45, paddingHorizontal:10}}
                        resizeMode = 'contain'
                        source={require('../../../assets/images/History.png')} />
                <Text style={{fontSize: 22, fontWeight: '600', color: 'teal'}}>History</Text>
            </View>

            <View>
                <Card style={styles.promoCard}>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={{color: 'teal',fontWeight:'bold'}}>Last 7 Days</Text>
                            <Text >Last 30 Days</Text>
                            <Text>Last 90 Days</Text>
                        </View>
                </Card>

                <View style={styles.textView}>
                    <Pressable >
                        <Text>2021/09/18</Text>
                        
                        <Text style={styles.parcelText}>Parcel Delivery</Text>
                        <Text>Friday - 12:41</Text>
                    </Pressable >

                    <Pressable onPress={() => props.navigation.navigate(HistorySummary)} style={{ justifyContent:'center'}}><Icon name="chevron-forward" style={styles.icon} size={22}></Icon></Pressable>
                </View>
                <View style={styles.textView}>
                    <View>
                        <Text>2021/09/18</Text>
                        <Text style={styles.parcelText}>Parcel Delivery</Text>
                        <Text>Friday - 12:41</Text>
                    </View>

                    <Pressable onPress={() => props.navigation.navigate(HistorySummary)} style={{ justifyContent:'center'}} ><Icon name="chevron-forward" style={styles.icon} size={22}></Icon></Pressable>
                </View>
                <View style={styles.textView}>
                    <View>
                    
                        <Text>2021/09/18</Text>
                        <Text style={styles.parcelText}>Parcel Delivery</Text>
                    
                        <Text>Friday - 12:41</Text>
                    </View>

                    <Pressable onPress={() => props.navigation.navigate(HistorySummary)} style={{ justifyContent:'center'}}><Icon name="chevron-forward" style={styles.icon} size={22}></Icon></Pressable>
                </View>
                <View style={styles.textView}>
                    <View>
                        <Text>2021/09/18</Text>
                        <Text style={styles.parcelText}>Parcel Delivery</Text>
                        <Text>Friday - 12:41</Text>
                    </View>

                    <Pressable onPress={() => console.log('hi')} style={{ justifyContent:'center'}}><Icon name="chevron-forward" style={styles.icon} size={22}></Icon></Pressable>
                </View>
            </View>


            <View style={{alignItems:'center'}}>
                


                <Button text='Show More' navPage='' navigation={props.navigation}></Button>
            </View>



            

        </View>
     );
}
 
export default HistoryPage;