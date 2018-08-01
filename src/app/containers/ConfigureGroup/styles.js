import {StyleSheet } from 'react-native';
import {LIGHT_GREY_2, LIGHTER_GREY, BLACK, MEDIUM_GREY, LIGHT_YELLOW ,WHITE} from '../../common/colors';

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    borderColor: LIGHT_GREY_2,
    borderBottomWidth: 1,
    backgroundColor: LIGHTER_GREY
  },
  itemText: {
    fontSize: 24,
    color: BLACK
  },
  text: {
    fontSize: 16
  },
  memberWrapper: {
    flex:1,
    flexDirection: 'row',
    padding: 10
  },
  subjectContainer: {
    fontSize: 30,
    padding: 20,
    margin: 20
  },
  participantWrapper: {
    backgroundColor: LIGHT_YELLOW,
    paddingLeft: 10
  },
  title: {
    fontSize: 25,
    color: MEDIUM_GREY
  },
  buttonWrapper: {
    flex: 1,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor:WHITE
  },
  containerCenter: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:WHITE
  },
  button: {
    paddingBottom: 30
  },
});
export default styles;
