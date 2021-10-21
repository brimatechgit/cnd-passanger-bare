import React, {useState} from 'react'
import { View, Text, TextInput, Pressable, TouchableOpacity, Image } from 'react-native';
import styles from './styles';



const PromoPage = ({navigation, route}) => {

    const [code, onChangeCode] = React.useState("");

    return ( 
        <View style={{flex:1, padding: 10, alignItems:'center'}}>
            <View style={{alignItems:'center', padding: 15, flexDirection:'row'}}>
            <Image 
                          style={{height: 25, width: 25}}
                        resizeMode = 'contain'
                        source={require('../../../assets/images/Promotion2.png')} />
                <Text style={{fontSize: 22, fontWeight: '600', color: 'teal'}}>{route.params.title}</Text>
            </View>

            <Image 
                          style={{height: '35%', width: '55%'}}
                        resizeMode = 'contain'
                        source={require('../../../assets/images/50.png')} />

            <View style={{alignItems:'center'}}>
                <Text style={styles.subTitle}>Enter Promo code to redeem</Text>
                <Text style={styles.subTitle}>the 50% off your delivery</Text>
            </View>

            <Text style={[styles.subTitle, {fontWeight:'bold'}]}>4 Days Left!</Text>

            <View>
            <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeCode}
                                value={code}
                                placeholder='Promo Code'
                                placeholderTextColor='teal'
                                fontSize={22}
                                keyboardType='number-pad'  
                            />
            </View>


            <View style={{paddingVertical: 35}}>
            <TouchableOpacity onPress={() => navigation.pop()} style={styles.button}>
                    {/* navigation.navigate(DestinationSearch) */}
                            <Text style={{color: 'teal', fontSize: 15}}>Send</Text>
                        
                    </TouchableOpacity>
            </View>
        </View>
     );
}
 
export default PromoPage;