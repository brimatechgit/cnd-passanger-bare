import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';



const AccountSettings = () => {
    return ( 
        <View>


        <View styles={styles.accHeader}></View>
        <View>
            <Text style={styles.textHeader}>Account Settings</Text>
            <View>

                <Card style={{elevation: 10, paddingVertical: 10}}>

                    <View style={{flexDirection: 'row'}}>

                <View style={styles.leadIcon}><Icon name="mail" size={30}></Icon></View>
                    <View style={styles.textContainer}>

                    <Text style={{fontSize: 22}}>Verify your Email</Text>
                    </View>
                    </View>
                </Card>
                <View style={styles.viewContainer}>
                    <View style={styles.leadIcon}><Icon name="person" size={30}></Icon></View>
                    

                    <Text style={styles.text}>Personal Details</Text>
                    <View style={styles.trailIcon}><Icon name="chevron-forward" size={20}></Icon></View>
                    
                </View>


                <View style={styles.viewContainer}>
                    <View style={styles.leadIcon}><Icon name="document-text" size={30}></Icon></View>
                    

                    <Text style={styles.text}>Manage Document</Text>
                    <View style={styles.trailIcon}><Icon name="chevron-forward" size={20}></Icon></View>
                    
                </View>
                <View style={styles.viewContainer}>
                    <View style={styles.leadIcon}><Icon name="key" size={30}></Icon></View>
                    

                    <Text style={styles.text}>Change Password</Text>
                    <View style={styles.trailIcon}><Icon name="chevron-forward" size={20}></Icon></View>
                    
                </View>
                <Text style={styles.textHeader}>Payment</Text>
                <View style={styles.viewContainer}>
                    <View style={styles.leadIcon}><FIcon name="bank" size={30}></FIcon></View>
                    

                    <Text style={styles.text}>Bank Details</Text>
                    <View style={styles.trailIcon}><Icon name="chevron-forward" size={20}></Icon></View>
                    
                </View>
                <Text style={styles.textHeader}>Support</Text>
                <View style={styles.viewContainer}>
                    <View style={styles.leadIcon}><MIcon name="privacy-tip" size={30}></MIcon></View>
                    

                    <Text style={styles.text}>Privacy Policy</Text>
                    <View style={styles.trailIcon} ><Icon name="chevron-forward" size={20}></Icon></View>
                    
                </View>
            </View>
        </View>

        {/* <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => console.log('Pressed')}>
</FAB> */}
    </View>
 
 
     );
}
 
export default AccountSettings;