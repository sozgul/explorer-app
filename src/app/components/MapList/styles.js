import { StyleSheet } from 'react-native';
import { MEDIUM_GREY } from '../../common/colors';

const styles = StyleSheet.create({
  mainWrapper: {
    borderWidth: 1,
    borderBottomColor: MEDIUM_GREY,
    padding: 5,
    display: 'flex',
    flexDirection: 'row'

  },
  valueWrapper: {
    fontSize: 20
  }
});

export default styles;
