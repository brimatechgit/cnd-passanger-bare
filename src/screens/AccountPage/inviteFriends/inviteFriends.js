import React from 'react';
import { View, Text, Pressable,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Button from '../../../compnents/Button/Button';
import InviteTermsPage from './inviteTerms';


const InviteFriendsPage = (props) => {
    return ( 
        <View style={{flex:1, padding: 15, alignItems:'center'}}>
            <View style={{alignItems:'center', padding: 15, flexDirection:'row'}}>
            <Image 
                          style={{height: 45, width: 45}}
                        resizeMode = 'contain'
                        source={require('../../../assets/images/InviteFriends.png')} />
                <Text style={{fontSize: 22, fontWeight: '600', color: 'teal'}}>Invite Friends</Text>
            </View>

            <Image 
                          style={{height: 75, width: 75}}
                        resizeMode = 'contain'
                        source={require('../../../assets/images/InviteIcon.png')} />

            <View style={{alignItems:'center', paddingVertical:15}}>
                <Text style={{fontWeight:'bold', fontSize:18, color:'teal', paddingVertical:5}}>Get free delivery!</Text>

                <Text style={{color:'teal', paddingVertical:5}}>Invite 10 friends and get 100% off your next delivery! </Text>    
                <Pressable onPress={() => props.navigation.navigate(InviteTermsPage)}><Text style={{color:'teal', paddingVertical:5}}>Terms and Conditions Apply </Text></Pressable>    
            </View>


            <Text style={{color:'gray', paddingVertical:5, letterSpacing:0.9}}>Expiration Date: 2021/09/18</Text>

            <Button text='Invite' navPage='' navigation={props.navigation}></Button>   
        </View>
     );
}
 
export default InviteFriendsPage;