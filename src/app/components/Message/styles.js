import {StyleSheet} from 'react-native';
import {BLUE,LIGHT_GREY_2,LIGHT_GREY} from '../../common/colors';

const styles = StyleSheet.create({
  contentContainer:{
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width:160,
    paddingRight:5
  },
  bubbles:{
    paddingTop:1,
    borderRadius: 20,
    backgroundColor: LIGHT_GREY_2,
  },
  text:{
    padding:1,
    textAlign:'center',
  },
  textRight:{
    textAlign:'right',
    paddingRight: 8,
  },
  buttonContainer: {
    borderRadius: 10,
    padding: 8,
    shadowColor: LIGHT_GREY,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.8,
    marginTop:10
  },
  height:{
    height:700,
  },
  dot: {
    alignSelf: 'flex-end',
    width: 7.5,
    height: 7.5,
    borderRadius: 5,
    backgroundColor:BLUE
  },
});






export default styles;
