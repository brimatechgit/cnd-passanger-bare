import React from 'react'
import { View,Text,Pressable, Image } from 'react-native';
import {Card}from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import styles from './styles';


const HistorySummary = () => {


    const [isModalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

    return ( 
        <View style={{flex:1, padding:10}}>
            <View>
            <Card style={{padding:25, height: '75%',borderRadius:25, elevation: 5}}>

                <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop: 65}}>
                    <Text style={styles.titleText}>Delivered by Dirvers Name</Text>
                    <Pressable onPress={toggleModal}><Icon name='person' color='teal' size={22}></Icon></Pressable>
                </View>
                
                <Text style={styles.innerText}>Date: 2021/09/16</Text>
                
                    <Text style={styles.innerText}>Time: 13:55</Text>
                    <Text style={styles.innerText}>Distance: 5km</Text>
              


                <View style={{paddingVertical: 15}}>
                    <Text style={styles.titleText}>Small Parcel</Text>
                    <View style={{paddingVertical: 10}}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                        <View style={styles.circle}></View>
                            <Text style={styles.innerText}>Pick up address</Text>
                        </View>
                        <Text style={styles.subTitle}>234 Brima Rd. Villy estate 1459</Text>
                    </View>
                    <View>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <View style={styles.circle}></View>
                            <Text style={styles.innerText}>Drop off address</Text>
                        </View>
                        <Text style={styles.subTitle}>5 Marlin Rd. Jet park boksburg 1459</Text>
                    </View>
                </View>


                <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop: 45}}>
                    <Text style={{color:'teal'}}>Amount paid</Text>
                    <Text style={{fontWeight:'bold', color:'teal'}}>R60</Text>
                </View>
            </Card>
            </View>


            


            <View style={{position:'absolute', width: '100%', top: '1%'}}>

          
                <Card style={{elevation: 10,  left: '2%',alignItems:'center', borderRadius: 25, padding: 10, }}>
                <View style={{flexDirection:'row',  width:'65%'}}>
                <View style={{position:'absolute', right:'75%', bottom: -18}}>
                <Image 
                                style={{height: 65, width: 50}}
                                resizeMode = 'contain'
                                source={require('../../../assets/images/History.png')} />
            </View>
                    
                        <Text style={styles.title}>History</Text>

                </View>
                </Card>
            </View>

            


            <Modal isVisible={isModalVisible}
                            hasBackdrop={false}
                        >
                            <View style={{
                                left: 10,
                                height: 300,
                                width: 300,
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
                                <Pressable onPress={toggleModal} style={{position:'absolute', top: '2%', right: '8%'}}>
                                        <Icon name='close' color='teal' size={42}></Icon>
                                </Pressable>
                                <View style={{padding: 10, alignItems:'center'}}>
                                    {/* <Pressable onPress={toggleModal} style={{position:'absolute',}}>
                                        <Icon name='close' color='teal' size={42}></Icon>
                                    </Pressable> */}
                                <Icon name='person' color='teal' size={85}></Icon>

                                    <Text style={{textAlign:'center', fontWeight:'bold', fontSize: 22}}>
                                        Name and Surname
                                    </Text>
                                    <Text style={{textAlign:'center', fontWeight:'bold', color:'teal', fontSize: 17}}>
                                        SNH 55GP
                                    </Text>
                                
                                
                                </View>

                            </View>


                    
                    </Modal>
            
        </View>
     );
}
 
export default HistorySummary;