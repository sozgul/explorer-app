
import { StyleSheet, Dimensions } from 'react-native';

const padding = 15;
const fullWidth = Dimensions.get('window').width;
const pickerHeight = 240;
const pickerHeaderHeight = 50;

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    width: fullWidth,
    zIndex: 1,
    marginTop: 15
  },
  pickerWrapper: {
    position: 'absolute',
    top: 150,
    alignSelf: 'stretch',
    width: fullWidth
  },
  picker: {
    width: fullWidth,
    paddingLeft: padding,
    paddingRight: padding,
    backgroundColor: '#fff',
    height: pickerHeight
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  textInput: {
    width: 200,
    borderColor: '#999',
    borderBottomWidth: 1,
  },
  pickerHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingLeft: padding,
    paddingRight: padding,
    backgroundColor: '#d2d5da',
    paddingTop: 5,
    paddingBottom: 5,
    height: pickerHeaderHeight
  },
  dropdown: {
    fontSize: 24,
    textAlign: 'center'
  },
  dropdownIcon: {
    borderColor: '#999',
    borderBottomWidth: 1,
    fontSize: 18,
  }
});