import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
   accHeader: {

   },
   fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
   },
   card: {
      flexDirection: 'row',
      padding: 10,
   },
   leadIcon: {
      flex: 0,
      elevation: 5,
      left: '20%', backgroundColor: 'white', borderRadius: 50, width: 45, height: 45, justifyContent: 'center', alignItems: 'center'
   },
   leadIconHeader: {
      left: '20%', backgroundColor: 'white', borderRadius: 50, width: 60, height: 60, justifyContent: 'center', alignItems: 'center'
   },
   textContainer: {
      flex: 3,
      justifyContent: 'space-between',
      alignItems: 'center', flexDirection: 'row', left: '10%'
   },

   text: {
      fontSize: 18,
      color: 'teal'
   },

   icon: {
      fontSize: 32,
      color: 'teal',
   },

   button: {
      elevation: 3,
      backgroundColor: 'white',
      borderRadius: 50,
      height: 45,
      width: '45%',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'teal',
      borderWidth: 1,
     
  },
  img: {
   width:45, height:45
  }

});

export default styles;