import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'


const ChatPage = () => {

    const [messages, setMessages] = useState([
        {
          _id: 0,
          text: 'thread created',
          createdAt: new Date().getTime(),
          system: true
        },
        {
          _id: 1,
          text: 'hello!',
          createdAt: new Date().getTime(),
          user: {
            _id: 2,
            name: 'Demo'
          }
        }
      ])

      function handleSend(newMessage = []) {
        setMessages(GiftedChat.append(messages, newMessage))
      }

      return (
        <GiftedChat
          messages={messages}
          onSend={newMessage => handleSend(newMessage)}
          user={{
            _id: 1
          }}
        />
      )
}

export default ChatPage
