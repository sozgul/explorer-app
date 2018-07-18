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
    color: 'white'
  },
  welcomeText: {
    fontSize: 28,
    marginTop: 5,
    color: 'white'
  },
  explorerText: {
    fontSize: 58,
    fontWeight: 'bold',
    marginTop: 1,
    color: 'white'
  },
  descriptionText: {
    fontSize: 22,
    marginTop: 10,
    color: 'white'
  },
  continueText: {
    fontSize: 14,
    marginTop: 95,
    color: 'white'
  },
  termsText: {
    textDecorationLine: 'underline',
    fontSize: 14,
    marginTop: 5,
    color: 'white'
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
    color: 'white'
  }
});

export default styles;
