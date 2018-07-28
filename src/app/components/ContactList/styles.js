import { StyleSheet } from 'react-native';
import {LIGHT_GREY_2, PURPLE, LIGHTER_GREY, BLACK} from '../../common/colors';

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