import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 100
  },
  phoneWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15
  },
  countryCodePrefix: {
    fontSize: 24,
    paddingTop: 6
  },
  countryCode: {
    marginRight: 15
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
  codeInput: {
    marginRight: 10,
    width: 40
  },
  phoneInput: {
    width: 200,
    marginTop: 15,
    marginBottom: 15
  },
  verify: {
    marginTop: 100
  }
});

export default styles;