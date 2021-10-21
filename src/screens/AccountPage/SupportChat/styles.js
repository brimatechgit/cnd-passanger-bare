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
   trailIcon: {
        right: '25%'
   },   
   leadIconHeader: {
      left: '20%', backgroundColor: 'white', borderRadius: 50, width: 60, height: 60, justifyContent: 'center', alignItems: 'center'
   },
   textContainer: {
       alignItems: 'center', flexDirection: 'row', left: '10%'
   },

   text: {
      fontSize: 18,

       textAlign: 'left',
       justifyContent:'flex-start'
   },

   viewContainer: {
    padding: 5, flexDirection: 'row', elevation: 10, alignItems: 'center'
   }, 
   textHeader: {
    fontSize: 22, padding: 20
   }

});

export default styles;