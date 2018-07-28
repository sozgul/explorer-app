import {StyleSheet} from 'react-native';
import {WHITE} from '../../common/colors';

const styles = StyleSheet.create({
  mapWrapper: {
    marginTop: 15,
    borderColor: WHITE,
    padding: 20
  },
  mapIcon: {
    fontSize: 78,
    color: WHITE
  },
  welcomeText: {
    fontSize: 38,
    marginTop: 35,
  },
  usernameText: {
    fontSize: 35,
    marginTop: 10,
  },
  explorerText: {
    fontSize: 22,
    marginTop: 1,
    padding: 38,
    paddingBottom: 0,
    paddingTop: 28,
    textAlign: 'center',

  },
  descriptionText: {
    fontSize: 22,
    marginTop: 10,
    padding: 38,
    paddingTop:10,
    textAlign: 'center',
  },
  continueText: {
    fontSize: 14,
    marginTop: 75,
    color: WHITE
  },
  continueButtonText: {
    fontSize: 20,
    color: WHITE
  }
});
export default styles;
