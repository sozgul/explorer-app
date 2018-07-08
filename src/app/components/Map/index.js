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

    return (
      <MapView style={styles.mapView}>
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