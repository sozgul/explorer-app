import {WHITE, DARK_PURPLE, PURPLE, MEDIUM_GREY, LIGHTER_GREY} from '../common/colors';
import {REGULAR_FONT} from '../common/fonts';

export const commonStackNavigationOptions = {
  headerStyle: {
    backgroundColor: DARK_PURPLE,
    height: 30,
  },
  headerTitleStyle: {
    marginTop:-20,
  },
  headerBackTitleStyle: {
    // marginTop:-20,
  },
  headerTintColor: WHITE
};

export const commonTabBarOptions = {
  style: {
    backgroundColor: LIGHTER_GREY,
    height: 60
  },
  labelStyle: {
    fontFamily: REGULAR_FONT,
    fontSize: 12,
    fontWeight: '600',
    //marginBottom: -12
  },
  inactiveTintColor: MEDIUM_GREY,
  activeTintColor: PURPLE
};
