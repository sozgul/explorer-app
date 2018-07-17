
import { StyleSheet, Dimensions } from 'react-native';
import {WHITE, MEDIUM_GREY, LIGHT_GREY} from '../../common/colors';

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
    backgroundColor: WHITE,
    height: pickerHeight
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  textInput: {
    minWidth: 200,
    maxWidth: 280,
    borderColor: MEDIUM_GREY,
    borderBottomWidth: 1,
  },
  pickerHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingLeft: padding,
    paddingRight: padding,
    backgroundColor: LIGHT_GREY,
    paddingTop: 5,
    paddingBottom: 5,
    height: pickerHeaderHeight
  },
  dropdown: {
    fontSize: 24,
    textAlign: 'center'
  },
  dropdownIcon: {
    borderColor: MEDIUM_GREY,
    borderBottomWidth: 1,
    fontSize: 30
  }
});
