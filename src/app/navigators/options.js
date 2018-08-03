import {WHITE, DARK_PURPLE, PURPLE, MEDIUM_GREY, LIGHTER_GREY} from '../common/colors';
import {REGULAR_FONT} from '../common/fonts';

export const commonStackNavigationOptions = {
  headerStyle: {
    backgroundColor: DARK_PURPLE,
    marginTop: -35,
    paddingBottom: 15
  },
  headerTintColor: WHITE
};

export const commonTabBarOptions = {
  style: {
    backgroundColor: LIGHTER_GREY
  },
  labelStyle: {
    fontFamily: REGULAR_FONT,
    fontSize: 12,
    fontWeight: '600'
  },
  inactiveTintColor: MEDIUM_GREY,
  activeTintColor: PURPLE
};
