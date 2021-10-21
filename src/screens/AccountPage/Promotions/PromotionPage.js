import React from 'react';
import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native';
import {Card}from 'react-native-paper';
import PromoPage from './PromoPage';
import styles from './styles';

const PromotionPage = props => {
    return ( 
        <View style={{flex:1, padding: 10}}>
            <View style={{alignItems:'center', padding: 15, flexDirection:'row', justifyContent:'center'}}>
            <Image 
                          style={{height: 45, width: 45}}
                        resizeMode = 'contain'
                        source={require('../../../assets/images/Promotion.png')} />
                <Text style={{fontSize: 22, fontWeight: '600', color: 'teal'}}>Promotions</Text>
            </View>

            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style={{...styles.text, }}>New Promotions</Text>
                </View>
                <Card style={styles.promoCard} onPress={() => props.navigation.navigate("PromoPage", {title: 'Meet me halfway'})}>
                        
                            <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={{color:'teal'}}>Meet me halfway</Text>
                            </View>
                        
                    </Card>
                    {/* props.navigation.navigate() */}
                    <Card style={styles.promoCard}>
                        <TouchableOpacity onPress={() => props.navigation.navigate("PromoPage" , {title: 'Invite friends'})}>
                            <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={{color:'teal'}}>Invite friends</Text>
                            </View>
                        </TouchableOpacity>
                    </Card>
            </View>


            <View>
                <View style={{alignItems: 'center'}}>

                    <Text style={{...styles.text, }}>Promotions Expiring in 3 Days</Text>
                </View>

                <Card style={styles.promoCard}>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{color:'teal'}}>Old Promo</Text>
                        </View>
                </Card>
                <Card style={styles.promoCard}>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{color:'teal'}}>Old Promo</Text>
                        </View>
                </Card>
                <Card style={styles.promoCard}>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={{color:'teal'}}>Old Promo</Text>
                        </View>
                </Card>
                {/* props.navigation.navigate() */}
                
                
            </View>
        </View>
     );
}
 
export default PromotionPage;


