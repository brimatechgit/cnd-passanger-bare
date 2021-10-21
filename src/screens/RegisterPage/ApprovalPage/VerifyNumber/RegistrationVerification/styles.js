import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden', paddingBottom: 5,
        padding: 10,
    },

    main: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 25,
        top: 10
       
    },
    subMain: {

    },
    form: {
        
    },
    textCard: {
        elevation: 25,
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: 'white',
        width: 310,
        paddingLeft: 5,
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
        position: 'absolute',
        right: 12,
        top: 10,
        height: 25,
        width: 25,
        borderRadius: 50,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        elevation: 2
    },
    input: {
        borderBottomColor: 'teal',
        borderBottomWidth: 1,
        width: 150,
        paddingBottom: 5,
        margin: 10,
        justifyContent: 'flex-start'
    },
    inputLong: {
        borderBottomColor: 'teal',
        borderBottomWidth: 1,
        width: 305,
        paddingBottom: 5,
        margin: 10,
        justifyContent: 'flex-start'
    },

    inputDetails: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        width: 150,
        padding: 5
    },
    text: {
        fontSize: 22, justifyContent: 'center', fontWeight:'bold', color:'teal'
        
    },
    inputView: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    button: {
     
        elevation: 10, width: '45%',  borderRadius: 25,  borderWidth: 1, borderColor: 'teal',  padding:7,
        alignItems: 'center',
        justifyContent: 'center',
       
        
        
    },
    buttonBig: {
        elevation: 3,
        backgroundColor: 'white',
        borderRadius: 50,
        padding:10,
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'teal',
        borderWidth: 1,
        
    },

    inputBottom: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 180,
        padding: 5,
        margin: 5,
        justifyContent: 'flex-start'
    },


    inputCard: {
        borderBottomColor: 'teal',
                                        borderWidth: 0,
                                        width: 60,
                                        paddingBottom: 5,
                                        margin: 10,
    }

    

})

export default styles