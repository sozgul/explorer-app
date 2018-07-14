import {StyleSheet} from 'react-native';
import {MEDIUM_GREY} from '../../common/colors';

const styles = StyleSheet.create({
  container: {
    paddingTop: 100
  },
  phoneWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15
  },
  title: {
    fontSize: 32,
    marginTop: 100
  },
  subTitle: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center'
  },
  codeWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  countryCodePrefix: {
    fontSize: 24,
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: MEDIUM_GREY,
    marginBottom: 15
  },
  countryCodeInput: {
    marginRight: 5,
    maxWidth: 80,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  phoneInput: {
    width: 180,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center'
  },
  verify: {
    marginTop: 100
  },
  codeInput: {
    marginRight: 10,
    width: 30,
    textAlign: 'center'
  }
});

export default styles;