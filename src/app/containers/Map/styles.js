import {StyleSheet } from 'react-native';
import {PURPLE, LIGHT_GREY_2, MEDIUM_GREY} from '../../common/colors';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: MEDIUM_GREY
  },
  purple_text: {
    color: PURPLE,
    fontSize: 20,
  },
  plus: {
    color: PURPLE,
    paddingLeft: 135,
    paddingTop: 10
  },
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  memberWrapper: {
    padding: 10,
    borderColor: LIGHT_GREY_2,
    borderBottomWidth: 1
  },
  text: {
    fontSize: 20
  }
});

export default styles;
