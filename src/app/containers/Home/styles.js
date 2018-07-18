import {StyleSheet} from 'react-native';
import {WHITE} from '../../common/colors';

const styles = StyleSheet.create({
  rocketWrapper: {
    marginTop: 100,
    borderColor: WHITE,
    borderRadius: 100,
    borderWidth: 3,
    padding: 20
  },
  rocketIcon: {
    fontSize: 48,
    color: WHITE
  },
  welcomeText: {
    fontSize: 28,
    marginTop: 5,
    color: WHITE
  },
  explorerText: {
    fontSize: 58,
    fontWeight: 'bold',
    marginTop: 1,
    color: WHITE
  },
  descriptionText: {
    fontSize: 22,
    marginTop: 10,
    color: WHITE
  },
  continueText: {
    fontSize: 14,
    marginTop: 95,
    color: WHITE
  },
  termsText: {
    textDecorationLine: 'underline',
    fontSize: 14,
    marginTop: 5,
    color: WHITE
  },
  continueButton: {
    borderWidth: 1,
    borderColor: WHITE,
    borderRadius: 4,
    padding: 18,
    marginTop: 30
  },
  continueButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: WHITE
  }
});
export default styles;
