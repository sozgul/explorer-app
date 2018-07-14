import {StyleSheet} from 'react-native';
import {MEDIUM_GREY} from '../../common/colors';

const styles = StyleSheet.create({
  rocketWrapper: {
    marginTop: 100,
    borderColor: MEDIUM_GREY,
    borderRadius: 100,
    borderWidth: 3,
    padding: 20
  },
  rocketIcon: {
    fontSize: 48
  },
  welcomeText: {
    fontSize: 28,
    marginTop: 15
  },
  explorerText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 15
  },
  descriptionText: {
    fontSize: 22,
    marginTop: 15
  },
  continueButton: {
    borderWidth: 1,
    borderColor: MEDIUM_GREY,
    borderRadius: 4,
    padding: 18,
    marginTop: 30
  },
  continueButtonText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default styles;