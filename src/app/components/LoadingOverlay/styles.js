import {StyleSheet} from 'react-native';
import {DARK_MEDIUM_GREY, MEDIUM_GREY} from '../../common/colors';

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50
  },
  loader: {
    color: DARK_MEDIUM_GREY,
    fontSize: 48
  },
  message: {
    color: MEDIUM_GREY,
    fontSize: 32
  }
});

export default styles;
