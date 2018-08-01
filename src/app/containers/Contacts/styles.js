import {StyleSheet} from 'react-native';
import {LIGHT_GREY, MEDIUM_GREY, PURPLE, BLACK} from '../../common/colors';

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    marginBottom: 30,
    paddingBottom: 10
  },
  phoneContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: LIGHT_GREY
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
  iconButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    paddingLeft: 15,
    paddingTop: 12,
    paddingBottom: 6
  },
  icon: {
    color: PURPLE,
    fontSize: 36
  },
  textWrapper: {
    color: PURPLE,
    fontSize: 20,
    marginLeft: 10,
    paddingTop: 4
  },
  blockText: {
    color: MEDIUM_GREY
  }
});

export default styles;
