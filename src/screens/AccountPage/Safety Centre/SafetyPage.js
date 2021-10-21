import React from 'react';
import { View,Text, Pressable, Image} from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from './styles';

const SafetyPage = (props) => {
    return ( 
        <View style={{flex:1, padding: 15, alignItems:'center'}}>
            <View style={{alignItems:'center', flexDirection:'row', justifyContent:'center'}}>
            <Image 
                          style={{height: 45, width: 45}}
                        resizeMode = 'contain'
                        source={require('../../../assets/images/SafetyCentreSmall.png')} />
                <Text style={{fontSize: 22, fontWeight: '800', color: 'teal'}}>Safety Centre</Text>
            </View>

            <View style={{paddingTop: 45}}>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize: 14, color:'teal', fontWeight:'bold'}}>Contact the local authorities</Text>
                    <Text style={{fontSize: 16, color:'teal', textAlign:'center'}}>Share your trip Information with the authority</Text>
                </View>


                <View style={{paddingVertical: 15, }}>
                    

                    <View style={{flexDirection:'row',  marginVertical: 10}}>
                        <Card style={{elevation: 10,borderRadius: 60, marginHorizontal: 10, width: 45, height: 45, alignItems: 'center', justifyContent: 'center',}}><Octicons name='primitive-dot' size={25} style={{top:10}} color='teal'></Octicons></Card>
                        
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', width: '85%', paddingHorizontal:15}}>
                                <View>
                                    <Text style={{color:'teal'}}>Current Location</Text>
                                    <Text style={{fontWeight:'bold'}}>Jetline West</Text>
                                </View>
                                <Icon name='chevron-forward-outline' size={25} color='black'></Icon>
                            </View>
                        
                    </View>
                </View>
            </View>


            <View style={{justifyContent:'center', alignItems:'center', width: '80%'}}>
            <View style={{justifyContent: 'center',alignItems:'center',}}>
                    <Card style={[styles.button, {width: 200,}]} onPress={() => props.navigation.pop()}>
                        <View style={{flexDirection:'row', justifyContent: 'center',alignItems:'center', justifyContent:'space-between'}}>
                            <Text style={{color: 'white', fontSize: 20,}}>Dial 10111</Text>
                            <Icon name='chevron-forward-outline' size={18} color='white'></Icon>
                        </View>
                    </Card>
                </View>



                <View style={{justifyContent: 'center',alignItems:'center',}}>
                    <Card style={[styles.button, {backgroundColor: 'teal', width: 200}]} onPress={() => props.navigation.pop()}>
                        <View style={{flexDirection:'row', justifyContent: 'center',alignItems:'center', justifyContent:'space-between'}}>
                            <Text style={{color: 'white', fontSize: 20}}>Dial 001 553 5556</Text>
                            <Icon name='chevron-forward-outline' size={18} color='white'></Icon>
                        </View>
                    </Card>
                </View>
            </View>
        </View>
     );
}
 
export default SafetyPage;