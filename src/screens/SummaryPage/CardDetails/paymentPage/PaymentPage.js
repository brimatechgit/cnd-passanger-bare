import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import WebView from 'react-native-webview'
import ConfirmPickUpPage from '../ConfirmPickUpPage/ConfirmPickUpPage';

const PaymentPage = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate("ConfirmPickUpPage")
        }, 4000);
      }, []);

    return (
        <WebView
        source={{ uri: 'https://secure.paygate.co.za/payweb3/', method:'POST',  }}  
        >

        </WebView>
    )
}

export default PaymentPage
