import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';


const SupportPage = () => {
    return ( 
        <View>


        <View styles={styles.accHeader}></View>
        <View>
            <Text style={styles.textHeader}>Support</Text>
            <View>

                <Card style={{elevation: 10, paddingVertical: 10}}>

                    <View style={{flexDirection: 'row'}}>

                <View style={styles.leadIcon}><MIcon name="privacy-tip" size={30}></MIcon></View>
                    <View style={styles.textContainer}>

                    <Text style={{fontSize: 22}}>Privacy Policy</Text>
                    </View>
                    </View>
                </Card>
                <View style={styles.viewContainer}>
                    <View style={styles.leadIcon}><Icon name="md-document-attach" size={30}></Icon></View>
                    
                    <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', padding: 20}}>
                    <Text style={styles.text}>Terms and Conditions</Text>
                    <View style={styles.trailIcon}><Icon name="chevron-forward" size={20}></Icon></View>
                    </View>
                </View>


                <View style={styles.viewContainer}>
                    <View style={styles.leadIcon}><Icon name="help" size={30}></Icon></View>
                    
                    <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', padding: 20}}>

                    <Text style={styles.text}>FAQ</Text>
                    <View style={styles.trailIcon}><Icon name="chevron-forward" size={20}></Icon></View>
                        
                    </View>
                    
                </View>
                <View style={styles.viewContainer}>
                    <View style={styles.leadIcon}><Icon name="md-chatbubbles" size={30}></Icon></View>
                    
                    <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', padding: 20}}>
                        <Text style={styles.text}>Live Chat</Text>
                        <View style={styles.trailIcon}><Icon name="chevron-forward" size={20}></Icon></View>
                    </View>
                </View>
                <View style={styles.viewContainer}>
                    <View style={styles.leadIcon}><MIcon name="contact-phone" size={30}></MIcon></View>
                    
<View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', padding: 20}}>
                    <Text style={styles.text}>Contact Us</Text>
                    <View style={styles.trailIcon}><Icon name="chevron-forward" size={20}></Icon></View>
                    </View>
                </View>
                <Text style={styles.textHeader}>Other</Text>
                <View style={styles.viewContainer}>
                    <View style={styles.leadIcon}><MIcon name="logout" size={30} color='red'></MIcon></View>
                    
                    <View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', padding: 20}}>
                        <Text style={styles.text}>Logout</Text>
                        <View style={styles.trailIcon} ><Icon name="chevron-forward" size={20}></Icon></View>
                    </View>
                </View>
            </View>
        </View>
    </View>
 
     );
}
 
export default SupportPage;