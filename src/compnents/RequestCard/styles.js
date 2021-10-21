import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        position: 'absolute',
        top: '70%',
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10
    },

    status: {
        fontSize: 25,
        left: 25,
        top: 5,
        
    },

    goContainer: {
        height: 45,
        width: 45,
        right: 15,
        top: 5,
        textAlign: 'center',
        borderRadius: 50,
        backgroundColor: 'blue',
        opacity: 0.8
    },

    circle: {
        width: 8,
        height: 8,
        backgroundColor: 'teal',
        borderRadius: 5,
      },


    button: {
        elevation: 3,
        backgroundColor: 'white',
        borderRadius: 50,
        height: 40,
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'teal',
        borderWidth: 1,
        zIndex: 0.5,
    },
})
 
export default styles;