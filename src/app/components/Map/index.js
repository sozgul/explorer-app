import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const styles = StyleSheet.create({
  mapView: {
    width: '100%',
    height: '100%'
  }
});

class MapComponent extends React.Component {

  render() {
    const {userLocation} = this.props;
    const region = {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1
    };
    if (userLocation) {
      region.latitude = userLocation.latitude;
      region.longitude = userLocation.longitude;
    }

    return (
      <MapView 
        style={styles.mapView}
        region={region}
      >
        {userLocation && 
          <Marker 
            coordinate={userLocation}
          />
        }
      </MapView>
    );
  }
}

MapComponent.propTypes = {
  userLocation: PropTypes.object
};

export default MapComponent;