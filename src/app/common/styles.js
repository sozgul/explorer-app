const FONT_FAMILY_REGULAR = 'Helvetica Neue';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontFamily: FONT_FAMILY_REGULAR,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: '#999',
    padding: 8,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 24
  }
});

export default styles;