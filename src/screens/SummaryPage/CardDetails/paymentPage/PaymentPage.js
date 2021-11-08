import React, {useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import WebView from 'react-native-webview'
import ConfirmPickUpPage from '../ConfirmPickUpPage/ConfirmPickUpPage';

const PaymentPage = (props) => {

    // useEffect(() => {
    //     setTimeout(() => {
    //         props.navigation.navigate("ConfirmPickUpPage")
    //     }, 4000);
    //   }, []);

    const [isFill, setIsFill] = React.useState(false);
  const [_payReqId, setPayReqId] = React.useState(null);
  const [_checksum, setChecksum] = React.useState(null);
  const [_transStatus, setTransStatus] = React.useState(null);

  const RunRequrest = () => {
    var config = {
      method: 'get',
      url: 'https://paygaterafaywork.000webhostapp.com/Api/test.php?orderamount=80000',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        const data = JSON.stringify(response.data);
        const payReqId = data.split('&')[1].split('PAY_REQUEST_ID=')[1];
        const checksum = data.split('&')[3].split('CHECKSUM=')[1].replace('"',
          "");

        setPayReqId(payReqId);
        setChecksum(checksum);
        setIsFill(true);
        console.log(payReqId, checksum);
      })
      .catch(function (error) {
        console.log(error);
      });



  }

    const handleWebViewNavigationStateChange = newNavState => {
        const { url } = newNavState;
        if (!url) return;
        if (url.includes('?status=1')) {
          //when sucecessful change req status to complete
            props.navigation.navigate("ConfirmPickUpPage")
          setTransStatus("Your transaction is successfull");
          setIsFill(false);
        }
    
        if (url.includes('?status=2')) {
          setTransStatus("Your transaction is failed");
          setIsFill(false)
        }
    
      };

    return (
        <React.Fragment>
        {isFill ? <WebView
          style={styles.container}
          source={{ uri: `https://paygaterafaywork.000webhostapp.com/Api/testnew.php?PAY_REQUEST_ID=${_payReqId}&CHECKSUM=${_checksum}` }}
          onNavigationStateChange={handleWebViewNavigationStateChange}
          /> :
        <View style={styles.container}>
          <Text>
  
            {_transStatus && _transStatus}
          </Text>
          <Button onPress={RunRequrest} title="Pay Now" />
        </View>
        }
      </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default PaymentPage



