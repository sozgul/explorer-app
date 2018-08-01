
import {StyleSheet} from 'react-native';
import {REGULAR_FONT} from './fonts';
import {MEDIUM_GREY,PURPLE,LIGHT_GREY_2,LIGHTER_GREY,BLACK} from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  container_home: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontFamily: REGULAR_FONT,
  },
  purple_text: {
    paddingLeft: 15,
    paddingTop: 15,
    paddingRight: 15,
    color: PURPLE,
    fontSize: 24,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: MEDIUM_GREY,
    padding: 8,
    fontFamily: REGULAR_FONT,
    fontSize: 24
  },
  plus: {
    paddingTop: 25,
    color: PURPLE,
    fontSize: 18
  },
  wrapper_button:{
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  continueButton: {
    borderWidth: 0,
    borderColor: PURPLE,
    borderRadius: 0,
    padding: 18,
    marginTop: 30
  },
  continueText: {
    fontSize: 14,
    marginTop: 95,
    color: PURPLE
  },

});
export const listStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignSelf: 'stretch',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: LIGHTER_GREY
  },
  list: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: LIGHTER_GREY
  }
});

export const listItemStyles = StyleSheet.create({
  listItem: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: LIGHT_GREY_2,
    borderBottomWidth: 1,
    backgroundColor: LIGHTER_GREY
  },
  listItemContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  selected: {
    color: PURPLE
  },
  itemText: {
    fontSize: 24,
    color: BLACK
  }
});

export default styles;
