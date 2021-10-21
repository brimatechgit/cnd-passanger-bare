import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import {Card} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker'
import styles from './styles';
import { Icon } from 'react-native-vector-icons/Ionicons';

const PickUpInstructions = (props) => {

    const [instruction, onChangeInstruction] = React.useState('');

    return ( 
        <View style={{padding: 10}}>
            <View>
                <Text style={styles.title}>Pick Up Instructions</Text>
            </View>
            <View style={{height: 15}}></View>

            <View style={{padding: 5}}>
            <Card style={{height: 230,padding:15, elevation: 5, marginTop: 15, borderRadius: 25,  justifyContent: 'center', zIndex: 0}}>

                        <TextInput
                                style={styles.inputBottom}
                                onChangeText={onChangeInstruction}
                                value={instruction}
                                multiline
                                numberOfLines={4}
                                maxLength={300}
                                placeholder='Add your Instructions'  
                            /> 

            </Card>


                <View style={{height: 35}}></View>
                    <View style={{justifyContent: 'center', alignItems: 'center', elevation: 5,}}>
                        <Pressable style={styles.button} onPress={() => props.navigation.pop()}>
                            <Text style={{color: 'teal', fontSize: 20}}>Save</Text>
                        </Pressable>
                    </View>
            </View>
        </View>
     );
}
 
export default PickUpInstructions;