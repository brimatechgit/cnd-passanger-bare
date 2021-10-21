import React, {useState} from 'react';
import { View, Text, TextInput, Pressable, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from "react-native-modal";
import styles from './styles';
import HomePage from '../../screens/HomePage/HomePage';
import ChatPage from './ChatPage/ChatPage';
import { IconButton } from 'react-native-paper';

const ConnectDriver = (props) => {

    const carType = 'CnD-Motor'
    const carRegistration = '55 SNH'

    const [isModalVisible, setModalVisible] = React.useState(false);
    const [isChatVisible, setChatVisible] = React.useState(false);
    const [chatState, setChatState] = React.useState(false);
    
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    const toggleChat = () => {
       setChatVisible(!isChatVisible)
    }

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = React.useState([
        {label: 'Driver is lost', value: 'Driver is lost'},
        {label: 'Driver took too long', value: 'Driver took too long'},
        {label: 'Other', value: 'Other'}
      ]);

      const chatPage = () => {
          <View style={styles.container}>
              <Text>Text hereeeee</Text>
          </View>
      }


    return ( 
        <View style={styles.container}>

            {/* {
                chatState ? chatPage : <View></View>
            } */}
            
            <View></View>
            <View style={{flexDirection:'row', paddingTop: 25}}>
                <Text style={{color:'teal', fontSize: 22, fontWeight: 'bold'}}>{carType} | {carRegistration}</Text>

                
            </View>
            <View style={{height: 5}}></View>
            <View style={{justifyContent:'center', flexDirection: 'row', alignItems:'center'}}>
                    {/* dot icon here */}
                    <View style={{flexDirection:'column'}}>
                        <View style={styles.leadIcon}><Icon name="person" size={30}></Icon></View>
                        <Text>{props.name}</Text>      
                    </View>
                    <Pressable onPress={toggleModal} style={{flexDirection:'column', paddingHorizontal: 25}}>
                        <View style={styles.leadIcon}><Icon name="close" color='red' size={30}></Icon></View>
                        <Text>Cancel Pick Up</Text>      
                    </Pressable>


                    <Pressable onPress={toggleChat} style={{flexDirection:'column', alignItems:'center'}}>
                        <View style={[styles.leadIcon, {left: 0}]}><Icon name="md-chatbubbles" color='teal' size={30}></Icon></View>
                        <Text>Chat</Text>      
                    </Pressable>
            </View>




            {/* modal popup reject driver */}
            {/* cancel order, navigate to driver connected page when driver is < .5km away */}
            <Modal isVisible={isModalVisible}
                            hasBackdrop={false}
                        >
                            <View style={{
                                 height: Dimensions.get('window').height - 500,
                                 width: Dimensions.get('window').width - 500,
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
                                <View style={{padding: 10, alignItems:'center'}}>
                                    <Text style={{fontSize: 18, fontWeight:'bold', paddingVertical: 10, color:'red'}}>Cancel Your Pick up</Text>

                                    <Text style={{textAlign:'center'}}>
                                        Are you sure you want to Cancel Your Pick up with {props.name}?
                                    </Text>
                                    
                                    <View style={{ paddingTop:10}}>
                                        
                                    <DropDownPicker
                                dropDownDirection={"TOP" }
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                placeholder='Reason for cancelling'
                                style={styles.dropdown}
                                />
                                    </View>
                                
                                
                                </View>

                                <View style={{flexDirection:'row'}}>

                                    <TouchableOpacity onPress={toggleModal} style={[styles.button, {margin:5}]}>
                        
                                        <Text style={{color: 'teal', fontSize: 15}}>No</Text>
                                    
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {props.navigation.navigate(HomePage),  setModalVisible(false)}} style={[styles.button, {margin:5}]}>
                        
                                        <Text style={{color: 'teal', fontSize: 15}}>Yes, Cancel</Text>
                                    
                                    </TouchableOpacity>
                                </View>

                            </View>


                    
                    </Modal>
            
            <Modal isVisible={isChatVisible}
                            hasBackdrop={false}
                            style
                        >
                            <ScrollView style={{
                                top:Dimensions.get('window').height - 300,
                                height: 300,
                                width: Dimensions.get('window').width - 45,
                                
                                position: 'absolute',
                                backgroundColor: 'white',
                                elevation: 20,
                                padding: 15,
                                borderRadius: 25,
                            }}>

                                
                                <IconButton onPress={toggleChat} icon='close' size={20} style={{justifyContent:'flex-end', alignItems:'flex-end', left: Dimensions.get('window').width - 120}}></IconButton>

                                <View>
                                    {/* DRIVER user chats go here */}

                                    <Text>Test chat here</Text>

                                </View>

                                    

                            </ScrollView>


                    
                    </Modal>
            
        </View>
     );
}
 
export default ConnectDriver;