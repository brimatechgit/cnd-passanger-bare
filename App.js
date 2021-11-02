import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomNavigationBar from './CustomNavBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, CardStyleInterpolatoror, } from '@react-navigation/native-stack';
import LandingPage from './src/screens/LandingPage/LandingPage';
import RegisterPage from './src/screens/RegisterPage/RegisterPage';
import LoginPage from './src/screens/LoginPage/LoginPage';
import Verification from './src/screens/LoginPage/Verification/Verification';
import HomePage from './src/screens/HomePage/HomePage';
import TermsPage from './src/screens/TermsPage/TermsPage';
import TermsAndCo from './src/compnents/TermsAndC/TermsAndC';
import DestinationSearch from './src/screens/DestinationPage/DestinationPage';
import CardDetailsPage from './src/screens/SummaryPage/CardDetails/CardDetails';
import PickUpLocationDetails from './src/screens/DestinationPage/PickUpDetails/PickUpDetails';
import SummaryPage from './src/screens/SummaryPage/SummaryPage';
import DropOffDetails from './src/screens/DestinationPage/DropOffDetails/DropOfDetails';
import PickUpInstructions from './src/screens/DestinationPage/PickUpDetails/PickUpInstructions/PickUpInstructionsPage';
import ApprovalPage from './src/screens/RegisterPage/ApprovalPage/ApprovalPage';
import DropOffInstructions from './src/screens/DestinationPage/DropOffDetails/DropOffInstructions/DropOffInstructions';
import AccountPage from './src/screens/AccountPage/AccountPage';
import AccountSettings from './src/screens/AccountPage/AccountSettings/AccountSettings';
import SupportPage from './src/screens/AccountPage/SupportPage/SupportPage';
import ConfirmPickUpPage from './src/screens/SummaryPage/CardDetails/ConfirmPickUpPage/ConfirmPickUpPage';
import ConnectDriverPage from './src/screens/SummaryPage/CardDetails/ConfirmPickUpPage/ConnectDriverPage/ConnectDriverPage';
import AccountCardDetailsPage from './src/screens/AccountPage/AccountCardDetails/AccountCardDetails';
import PromotionPage from './src/screens/AccountPage/Promotions/PromotionPage';
import AboutPage from './src/screens/AccountPage/AboutPage/AboutPage';
import ChangePassword from './src/screens/AccountPage/ChangePassword/ChangePassword';
import ConfirmPage from './src/screens/DestinationPage/ConfirmPage/ConfirmPage';
import ParcelPage from './src/screens/DestinationPage/ParcelPage/ParcelPage';
import HistoryPage from './src/screens/AccountPage/HistoryPage/HistoryPage';
import PromoPage from './src/screens/AccountPage/Promotions/PromoPage';
import SafetyPage from './src/screens/AccountPage/Safety Centre/SafetyPage';
import HistorySummary from './src/screens/AccountPage/HistoryPage/HistorySummary';
import RegistrationVerification from './src/screens/RegisterPage/ApprovalPage/VerifyNumber/RegistrationVerification/RegistrationVerification';
import VerifyNumber from './src/screens/RegisterPage/ApprovalPage/VerifyNumber/VerifyNumber';
import SupportChat from './src/screens/AccountPage/SupportChat/SupportChat';
import InviteFriendsPage from './src/screens/AccountPage/inviteFriends/inviteFriends';
import SplashPage from './src/screens/LandingPage/splashScreen/splashPage';
import { TransitionPresets } from '@react-navigation/stack';
import SetAddress from './src/screens/DestinationPage/SetAddress';
import InviteTermsPage from './src/screens/AccountPage/inviteFriends/inviteTerms';

import CardTnC from './src/screens/SummaryPage/CardDetails/CardTnC';
import PaymentPage from './src/screens/SummaryPage/CardDetails/paymentPage/PaymentPage';


const Stack = createNativeStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const verticalAnimation = {
  gestureDirection: 'vertical',
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
    };
  },
};

const horizontalAnimation = {
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const screenOptionStyle = {
  // headerShown: false,  
  ...TransitionPresets.SlideFromRightIOS,
}; 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="LoginPage"
       screenOptions={{
        header: CustomNavigationBar,
      }}
      >
        <Stack.Screen options={{headerShown: false}} name="LandingPage"  component={LandingPage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="LoginPage" options={horizontalAnimation} component={LoginPage} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="ApprovalPage" component={ApprovalPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="TermsPage" component={TermsPage} />
        <Stack.Screen name="TermsAndCo" component={TermsAndCo} />
        <Stack.Screen name="SafetyPage" component={SafetyPage} />
        <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
        <Stack.Screen name="CardDetailsPage" component={CardDetailsPage} />
        <Stack.Screen name="SummaryPage" component={SummaryPage} />
        <Stack.Screen name="PickUpLocationDetails" component={PickUpLocationDetails} />
        <Stack.Screen name="DropOffDetails" component={DropOffDetails} />
        <Stack.Screen name="PickUpInstructions" component={PickUpInstructions} />
        <Stack.Screen name="DropOffInstructions" component={DropOffInstructions} />
        <Stack.Screen name="ConfirmPickUpPage" component={ConfirmPickUpPage} />
        <Stack.Screen name="ConfirmPage" component={ConfirmPage} />
        <Stack.Screen name="ParcelPage" component={ParcelPage} />
        <Stack.Screen name="ConnectDriverPage" component={ConnectDriverPage} />
        <Stack.Screen name="SupportPage" component={SupportPage} />
        <Stack.Screen name="SupportChat" component={SupportChat} />
        <Stack.Screen name="HistoryPage" component={HistoryPage} />
        <Stack.Screen name="HistorySummary" component={HistorySummary} />
        <Stack.Screen name="RegistrationVerification" component={RegistrationVerification} />
        <Stack.Screen name="VerifyNumber" component={VerifyNumber} />
        <Stack.Screen name="AccountCardDetailsPage" component={AccountCardDetailsPage} />
        <Stack.Screen name="PromotionPage" component={PromotionPage} />
        <Stack.Screen name="CardTnC" component={CardTnC} />
        <Stack.Screen name="InviteFriendsPage" component={InviteFriendsPage} />
        <Stack.Screen name="InviteTermsPage" component={InviteTermsPage} />
        <Stack.Screen options={{headerShown: false}} name="SplashPage"  component={SplashPage} />
        <Stack.Screen name="AboutPage" component={AboutPage} />
        <Stack.Screen name="PromoPage" component={PromoPage} />
        <Stack.Screen name="SetAddress" component={SetAddress} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="PaymentPage" component={PaymentPage} />
        <Stack.Screen options={{headerShown: false}}  name="AccountPage" component={AccountPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
