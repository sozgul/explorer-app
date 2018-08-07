import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  map:{
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
  },
  radius:{
    height:12,
    width:12,
    backgroundColor:'#81BD26',
    overflow:'hidden',
    borderRadius:50/2,
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center'
  },
  markerStyle:{
    height:14,
    width:14,
    backgroundColor:'#81BD26',
    alignItems:'center',
    justifyContent:'center'
  },
  mapView: {
    width: '100%',
    height: '100%'
  }
});

export default styles;