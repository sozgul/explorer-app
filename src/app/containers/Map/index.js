import React from 'react';
//import PropTypes from 'prop-types';
import MapComponent from '../../components/Map';
import {connect} from 'react-redux';

class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(location => {
      this.setState({
        userLocation: location.coords
      });
    });
  }

  render() {
    const {userLocation} = this.state;

    return (
      <MapComponent 
        userLocation={userLocation} 
      />
    );
  }
}

MapScreen.propTypes = {};

const mapStateToProps = state => (state);
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);