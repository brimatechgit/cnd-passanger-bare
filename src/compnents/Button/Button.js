import React from 'react';
import { View,Text,Pressable } from 'react-native';
import styles from './styles';



const Button = props => {
    if(props.navPage != ''){

        return ( 
            <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5,  }}>
                    <Pressable style={styles.button} onPress={() => props.navigation.navigate(props.navPage)}>
                        <Text style={{color: 'teal', fontSize: 22, bottom:2}}>{props.text}</Text>
                    </Pressable>
                </View>
         );
    } else{
        return ( 
            <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5,  }}>
                    <Pressable style={styles.button} onPress={() => props.navigation.pop()}>
                        <Text style={{color: 'teal', fontSize: 22, bottom:2}}>{props.text}</Text>
                    </Pressable>
                </View>
         );
    }
}
 
export default Button;