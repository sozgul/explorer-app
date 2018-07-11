import React from 'react';
import PropTypes from 'prop-types';
import MapComponent from '../../components/Map';
import {connect} from 'react-redux';

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

const mapStateToProps = state => (state);
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);