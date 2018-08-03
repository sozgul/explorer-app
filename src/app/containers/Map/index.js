import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import MapComponent from '../../components/Map';
import MessageComponent from '../../components/Message';
import {connect} from 'react-redux';
import {mapStyles} from './styles';
import {commonStackNavigationOptions} from '../../navigators/options';
import {HeaderBackButton} from 'react-navigation';
import * as ScreenNames from '../../navigators/screen_names';
import GPSSwitch from '../../components/GPSSwitch';

class MapScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;
    let mapID = params ? params.mapID : null;
    // TODO: Customize the header title for map based on contact/group.
    return {
      headerLeft: (
        <HeaderBackButton
          onPress={() => navigation.navigate(ScreenNames.MAPS_TAB)}
          title = {params.subject}
          tintColor= '#FFF'
        />
      ),
      headerTitle: (<GPSSwitch mapID={mapID} />),
      headerStyle: {
        ...commonStackNavigationOptions.headerStyle,
        height :70 }
    };
  }

  constructor(props) {
    super(props);
    this.state={
      markers:[{
        coordinate:{
          latitude: 37.0065,
          longitude: -121.5632
        }
      },
      {
        coordinate:{
          latitude: 37.3856,
          longitude: -122.082
        }
      },
      {
        coordinate:{
          latitude: 37.7648,
          longitude: -122.463
        }
      }]
    };
  }

  render() {
    return (
      <View style={mapStyles.container}>
        <MapComponent
          markerLocations={this.state.markers}
        />
        <MessageComponent
        />

      </View>
    );
  }
}

MapScreen.propTypes = {
  map: PropTypes.object,
  maps: PropTypes.object
};

const mapStateToProps = state => ({
  maps: state.mapsData
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
