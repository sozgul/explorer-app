import {StyleSheet } from 'react-native';
import {MEDIUM_GREY,DARK_PURPLE} from '../../common/colors';


export const mapListStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  createGroupButton: {
    borderBottomWidth: 1,
    borderColor: MEDIUM_GREY,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  createGroupButtonText: {
    color: DARK_PURPLE,
    fontSize: 18,
  },
  createGroupButtonIcon: {
    paddingTop: 0
  }
});

export const mapStyles = StyleSheet.create({
  container: {
    position: 'relative'
  }
});

const colorPalette = [
  'cornflowerblue',
  'goldenrod',
  'hotpink',
  'limegreen',
  'mistyrose',
  'orangered',
  'salmon',
  'turquoise',
  'tomato',
  'violet',
];
export function getNColors(n) {
  const colors = [...colorPalette];
  return colors.slice(0,n);
}