import {StyleSheet} from 'react-native';
import {BLUE} from '../../common/colors';

const styles = StyleSheet.create({
  contentContainer:{
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width:160,
    paddingRight:8
  },
  bubbles:{
    paddingTop:1,
    borderRadius: 20,
    backgroundColor : 'transparent',

  },
  bubbles1:{
    marginTop:5,
    paddingBottom:2,
    borderRadius: 10,
    backgroundColor: BLUE,

  },
  text:{
    padding:1,
    textAlign:'center'
  },
  textRight:{
    textAlign:'right',
    paddingRight: 2
  }

});






export default styles;
