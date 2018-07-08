import React from 'react';
import PropTypes from 'prop-types';
import MapComponent from '../../components/Map';

class MapScreen extends React.Component {
  render() {
    const {userLocation} = this.props;

    return (
      <MapComponent 
        userLocation={userLocation} 
      />
    );
  }
}

MapScreen.propTypes = {
  userLocation: PropTypes.object
};

export default MapScreen;