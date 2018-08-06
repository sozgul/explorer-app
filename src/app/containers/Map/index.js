import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import MapComponent from '../../components/Map';
import MessageList from '../../components/Message';
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
        },
        title: '1'
      },
      {
        coordinate:{
          latitude: 37.3856,
          longitude: -122.082
        },
        title: '2'
      },
      {
        coordinate:{
          latitude: 37.7648,
          longitude: -122.463
        },
        title: '3'
      }]
    };
  }

  render() {
    const fakeMessages = [
      {id: '1', senderID: '1', content: 'Hello Meenu!'},
      {id: '2', senderID: '2', content: 'Well hello, Sri.'},
      {id: '3', senderID: '4', content: 'Hi there, Meenu and Sri. Its me, Serhan.'},
      {id: '4', senderID: '3', content: 'Hey, Meenu, Sri, and Serhan! What\'s going on?'}
    ];
    const fakeColors = [
      {senderID: '1', color: 'cornflowerblue'},
      {senderID: '2', color: 'hotpink'},
      {senderID: '3', color: 'limegreen'},
      {senderID: '4', color: 'violet'}
    ];
    return (
      <View style={mapStyles.container}>
        <MapComponent
          markerLocations={this.state.markers}
          senderColors = {fakeColors}
        />
        <MessageList
          messages={fakeMessages}
          colors={fakeColors} />

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
