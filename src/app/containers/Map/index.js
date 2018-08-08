import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import MapComponent from '../../components/Map';
import MessageList from '../../components/Message';
import {connect} from 'react-redux';
import {mapStyles, getNColors} from './styles';
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
  }

  render() {
    const {map, maps, users} = this.props;
    const userIDs = map.contactIDs.map(contactId => {
      const user = users.registeredUsers.find(u => u.contactId === contactId) || {};
      return user.userId;
    });
    const participants = [map.ownerUserID, ...userIDs];
    const markers = [];

    participants.forEach(userId => {
      if (maps.locationData[userId] && maps.locationData[userId].location) {
        const {location = []} = maps.locationData[userId];
        if (location.length) {
          const coord = location[location.length - 1];
          const {longitude, latitude} = coord;
          markers.push({
            userId,
            coordinate: {
              longitude,
              latitude
            }
          });
        }
      }
    });
    const colorPalette = getNColors(participants.length);
    const colors = participants.map((contactID, index) => {
      const userID = this.props.users.registeredUsers.find(u => u.contactId === contactID);
      return {senderID: userID, color: colorPalette[index]};
    });
    
    return (
      <View style={mapStyles.container}>
        <MapComponent
          markerLocations={markers}
          senderColors={colors}
        />
        <MessageList
          messages={map.messages}
          colors={colors} />

      </View>
    );
  }
}

MapScreen.propTypes = {
  map: PropTypes.object,
  maps: PropTypes.object,
  users: PropTypes.object
};

const mapStateToProps = (state, props) => ({
  users: state.usersData,
  maps: state.mapsData,
  map: state.mapsData.mapList.find(m => m.id === props.navigation.state.params.mapID)
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
