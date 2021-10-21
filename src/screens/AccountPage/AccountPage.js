import React from 'react';
import { View, Text, TouchableOpacity, Pressable, Image } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import AboutPage from './AboutPage/AboutPage';
import AccountCardDetailsPage from './AccountCardDetails/AccountCardDetails';
import ChangePassword from './ChangePassword/ChangePassword';
import HistoryPage from './HistoryPage/HistoryPage';
import PromotionPage from './Promotions/PromotionPage';
import SafetyPage from './Safety Centre/SafetyPage';
import SupportChat from './SupportChat/SupportChat';
import Modal from "react-native-modal";
import styles from './styles';
import InviteFriendsPage from './inviteFriends/inviteFriends';
import HomePage from '../HomePage/HomePage';
import LandingPage from '../LandingPage/LandingPage';

const AccountPage = props => {

    const [isModalVisible, setModalVisible] = React.useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

    return ( 
        <View>

            <View style={{height: "35%", backgroundColor: 'teal', }}>
                <View style={{top: "18%", flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Image 
                        style={{width:100, height:75}}
                        resizeMode = 'contain'
                        source={require('../../assets/images/UsersIcon.png')} />
                    <View style={{justifyContent: 'center', padding: 20}}>
                        <Text style={{color: 'white', fontSize: 22, fontWeight: '600'}}>Name and Surname</Text>
                        <Text style={{color: 'white', fontSize: 15}}>name@gmail.com | Mobile</Text>
                    </View>
                </View>
            </View>
            <View>

                <View style={{paddingTop:5}}>

                    <Pressable onPress={() => props.navigation.navigate(AccountCardDetailsPage)} style={{padding: 5, flexDirection: 'row', elevation: 10, justifyContent: 'space-between'}}>
                    <Image 
                        style={styles.img}
                        resizeMode = 'contain'
                        source={require('../../assets/images/AddPayment.png')} />
                        
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>Payment Method</Text>
                        <View  style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></View>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => props.navigation.navigate(PromotionPage)} style={{padding: 5, flexDirection: 'row', elevation: 10, justifyContent: 'space-between'}}>
                    <Image 
                          style={styles.img}
                        resizeMode = 'contain'
                        source={require('../../assets/images/Promotion.png')} />
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>Promotion</Text>
                        <View  style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></View>
                        </View>
                    </Pressable>
                    
                    
                    <Pressable onPress={() => props.navigation.navigate(HistoryPage)} style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                    <Image 
                    style={styles.img}
                        resizeMode = 'contain'
                        source={require('../../assets/images/History.png')} />
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>History</Text>
                        <Pressable  style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></Pressable>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => props.navigation.navigate(AboutPage)} style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                    <Image 
                          style={styles.img}
                        resizeMode = 'contain'
                        source={require('../../assets/images/About.png')} />
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>About</Text>
                        <Pressable  style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></Pressable>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => props.navigation.navigate(ChangePassword)} style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                    <Image 
                       style={styles.img}
                        resizeMode = 'contain'
                        source={require('../../assets/images/changePass.png')} />
                        <View style={styles.textContainer}>

                      

                        <Text style={styles.text}>Change Password</Text>
                        <Pressable style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></Pressable>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => props.navigation.navigate(InviteFriendsPage)} style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                    <Image 
                         style={styles.img}
                        resizeMode = 'contain'
                        source={require('../../assets/images/InviteFriends.png')} />
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>Invite Friends</Text>
                        <Pressable  style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></Pressable>
                        </View>
                    </Pressable>
                    
                    <Pressable onPress={() => props.navigation.navigate(SupportChat)} style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                        <Image 
                            style={styles.img}
                            resizeMode = 'contain'
                            source={require('../../assets/images/SupportSettings.png')} />
                        <View style={styles.textContainer}> 
                      

                        <Text style={styles.text}>Support</Text>
                        <Pressable style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></Pressable>
                        </View>
                    </Pressable>
                    
                    <Pressable onPress={() => props.navigation.navigate(SafetyPage)} style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                    <Image 
                          style={styles.img}
                        resizeMode = 'contain'
                        source={require('../../assets/images/SafetyCentreSmall.png')} />
                        <View style={styles.textContainer}>

                       

                        <Text style={styles.text}>Safety Centre</Text>
                        <Pressable  style={{right: '80%'}}><Icon name="chevron-forward" style={styles.icon}></Icon></Pressable>
                        </View>
                    </Pressable>
                    <Pressable onPress={toggleModal} style={{padding: 5, flexDirection: 'row', elevation: 10}}>
                    <Image 
                          style={styles.img}
                        resizeMode = 'contain'
                        source={require('../../assets/images/Logout.png')} />
                        <View style={styles.textContainer}>

                        <Text style={styles.text}>Log out</Text>
                        </View>
                    </Pressable>
                </View>
            </View>


            <Modal isVisible={isModalVisible}
                            hasBackdrop={false}
                        >
                            <View style={{
                                left: 10,
                                height: 160,
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
                                <View style={{padding: 5, alignItems:'center'}}>

                                    <View style={{width:'80%'}}>

                                        <Text style={{fontSize: 18, fontWeight:'500', paddingVertical: 10, color:'red', textAlign:'center'}}>Are you sure you want to Log out?</Text>
                                    </View>

                                
                                
                                </View>

                                <View style={{flexDirection:'row'}}>

                                    <TouchableOpacity onPress={toggleModal} style={[styles.button, {margin:5}]}>
                        
                                        <Text style={{color: 'teal', fontSize: 15}}>No</Text>
                                    
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {props.navigation.navigate(LandingPage),  setModalVisible(false)}} style={[styles.button, {margin:5, borderColor:'red'}]}>
                        
                                        <Text style={{color: 'red', fontSize: 15}}>Yes, Log out</Text>
                                    
                                    </TouchableOpacity>
                                </View>

                            </View>


                    
                    </Modal>

            
        </View>
     
     
     
     );
}
 
export default AccountPage;