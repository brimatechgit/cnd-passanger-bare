import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
    marginLeft: 20,
  },

  separator: {
    backgroundColor: '#efefef',
    height: 1,
  },
  listView: {
    position: 'absolute',
      top: 105,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconContainer: {
    backgroundColor: '#a2a2a2',
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  locationText: {

  },

  circle: {
    width: 8,
    height: 8,
    backgroundColor: 'teal',
    position: 'absolute',
    top: 20,
    left: 15,
    borderRadius: 5,
  },
  inputBottom: {
    padding: 5,
    margin: 5,
    justifyContent: 'flex-start'
},
  line: {
    width: 1,
    height: 50,
    backgroundColor: '#c4c4c4',
    position: 'absolute',
    top: 28,
    left: 18,
  },
  square: {
    width: 8,
    height: 8,
    backgroundColor: 'teal',
    position: 'absolute',
    top: 80,
    left: 15,
    borderRadius: 5
  },

  button: {
    position: 'absolute',
    top: '50%',
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 50,
    height: 45,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'teal',
    borderWidth: 1,
    zIndex: 0.5,
},
});

export default styles;