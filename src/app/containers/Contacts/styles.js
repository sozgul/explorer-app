import {StyleSheet} from 'react-native';
import {PURPLE} from '../../common/colors';
import {LIGHT_GREY} from '../../common/colors';
import {MEDIUM_GREY} from '../../common/colors';
import {BLACK} from '../../common/colors';

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: LIGHT_GREY,
    paddingBottom: 10
  },
  phoneContainer: {
    padding: 15
  },
  titleWrapper: {
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 10
  },
  containerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: MEDIUM_GREY,
    padding:3
  },
  containerValue: {
    padding: 5,
    fontSize: 16,
    color: BLACK
  },
  textWrapper: {
    color: PURPLE,
    fontSize: 20,
    paddingStart: 10,
  },
  iconWrapper: {
    marginTop: 10,
    fontSize: 20,
    paddingStart: 20,
  },
  lastcontactWrapper: {
    padding: 15,
    borderWidth: 1,
    borderColor: LIGHT_GREY
  },
  navIconWrapper: {
    fontSize: 25,
    paddingStart: 20,
    marginTop: 10
  }
});

export default styles;
