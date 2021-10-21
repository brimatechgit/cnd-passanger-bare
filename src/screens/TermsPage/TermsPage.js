import React from 'react';
import { View, Text, Pressable } from 'react-native';
import {Card} from 'react-native-paper';
import IconIonic from 'react-native-vector-icons/Ionicons';
import TermsAndCo from '../../compnents/TermsAndC/TermsAndC';
import styles from './styles';


const TermsPage = props => {
    return ( 
        <View style={{flex:1, padding: 15}}>
            <Text style={{fontSize: 22, fontWeight: '600', color:'teal'}}>Legal</Text>
            <View style={{height: 20}}></View>
            <Pressable onPress={() => props.navigation.navigate('TermsAndCo', {pageTitle: 'Legal', title: 'Sender Agreement'})}>

                <Card style={{margin: 10,  borderRadius: 25, elevation: 5}}>
                    <View style={styles.cardView}>
                        <View/>
                        <Text style={styles.text}>Sender Agreement</Text>
                        <IconIonic name='chevron-forward' color='teal' size={20}></IconIonic>
                    </View>
                </Card>
            </Pressable>
            
            <Pressable onPress={() => props.navigation.navigate('TermsAndCo', {pageTitle: 'Legal', title: 'Reciever Agreement'})}>

                <Card style={{margin: 10,borderRadius: 25, elevation: 5}}>
                    <View style={styles.cardView}>
                    <View/>
                        <Text style={styles.text}>Reciever Agreement</Text>
                        <IconIonic name='chevron-forward' color='teal' size={20}></IconIonic>

                    </View>
                </Card>
            </Pressable>
            
            <Pressable onPress={() => props.navigation.navigate('TermsAndCo', {pageTitle: 'Legal', title: 'Personal Information'})}>

                <Card style={{margin: 10,  borderRadius: 25, elevation: 5}}>
                    <View style={styles.cardView}>
                    <View/>
                        <Text style={styles.text}>Personal Information</Text>
                        <IconIonic name='chevron-forward' color='teal' size={20}></IconIonic>
                    </View>
                </Card>
            </Pressable>
            
            <Pressable onPress={() => props.navigation.navigate('TermsAndCo', {pageTitle: 'Legal', title: 'Anti-Fraud Policy'})}>

                <Card style={{margin: 10,  borderRadius: 25, elevation: 5}}>
                    
                <View style={styles.cardView}>
                    <View/>
                    <Text style={styles.text}>Anti-Fraud Policy</Text>
                    <IconIonic name='chevron-forward' color='teal' size={20}></IconIonic>
                </View>
                </Card>
            </Pressable>
            
            <Pressable onPress={() => props.navigation.navigate('TermsAndCo', {pageTitle: 'Legal', title: 'Compliant Handling Policy'})}>
                
                <Card style={{margin: 10, borderRadius: 25, elevation: 5}}>
                <View style={styles.cardView}>
                    <View/>
                    <Text style={styles.text}>Compliant Handling Policy</Text>
                    <IconIonic name='chevron-forward' color='teal' size={20}></IconIonic>
                </View>
                </Card>
            </Pressable>
            
        </View>
     );
}
 
export default TermsPage;