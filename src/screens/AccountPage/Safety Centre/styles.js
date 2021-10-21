import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden', paddingBottom: 5,
        padding: 10,
    },

    main: {
        position: 'absolute',
        alignItems: 'center',
        left: 25,
        top: 10,
        width: '90%'
    },
    subMain: {

    },
    list: {
        padding: 10
    },
    textCard: {
        elevation: 25,
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: 'white',
        width: '100%',
        paddingLeft: 5,
        height: 65,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    detailsTextCard: {
        
        bottom: 20,
        elevation: 12,
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: 'white',
        height: 65,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    numCircle: {
        elevation: 25,
        position: 'absolute',
        left: -15,
        height: 40,
        width: 40,
        borderRadius: 50,
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    iconCircle: {
        height: 45,
        width: 45,
        borderRadius: 50,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderColor: 'white',
        elevation: 4
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        width: 150,
        padding: 10,
        margin: 5,
        justifyContent: 'flex-start'
    },

    inputDetails: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        width: 150,
        padding: 5
    },
    bankingText: {
        fontSize: 20, justifyContent: 'center',
        padding: 5
    },
    inputView: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 50,
        height: 45,
        width: '42%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        elevation:10,
        margin: 10
        
    },
    rowView: {
        padding: 5
    },

    radioText: {
        fontWeight: 'bold',
        color: 'teal',
        alignItems: 'center',
        fontSize: 15,
        paddingVertical: 5
    },

})

export default styles