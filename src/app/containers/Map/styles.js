import {PURPLE, LIGHT_GREY_2, MEDIUM_GREY,DARK_PURPLE} from '../../common/colors';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: MEDIUM_GREY
  },
  rocketIcon: {
    fontSize: 30,
    color: DARK_PURPLE
  },
  innerCircleStyle:{
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderColor: 'white'
  },
  outerCircleStyle:{
  },
  purple_text: {
    color: DARK_PURPLE,
    fontSize: 18,
  },
  activeText: {
    color: DARK_PURPLE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  plus: {
    color: PURPLE,
    paddingTop: 10
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  memberWrapper: {
    paddingBottom: 15,
    borderColor: LIGHT_GREY_2,
    borderBottomWidth: 1
  },
  inActiveText: {
    color: DARK_PURPLE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: DARK_PURPLE,
    fontSize: 18,
  },
  containerRelative:{
    position: 'relative',
  }
};

export default styles;
