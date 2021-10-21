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
      elevation: 5,
      left: '20%', backgroundColor: 'white', borderRadius: 50, width: 45, height: 45, justifyContent: 'center', alignItems: 'center'
   },
   trailIcon: {
        right: '25%'
   },   
   leadIconHeader: {
      left: '20%', backgroundColor: 'white', borderRadius: 50, width: 60, height: 60, justifyContent: 'center', alignItems: 'center'
   },
   textContainer: {
      justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', left: '10%'
   },

   text: {
      fontSize: 18,
      right: '129%', textAlign: 'center'
   },

   viewContainer: {
    padding: 5, flexDirection: 'row', elevation: 10, justifyContent: 'space-between', alignItems: 'center'
   }, 
   textHeader: {
    fontSize: 22, padding: 20
   }

});

export default styles;