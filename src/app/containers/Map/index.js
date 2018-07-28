import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import MapComponent from '../../components/Map';
import {connect} from 'react-redux';
import {getCurrentPositionAsync} from '../../utilities/location';

class MapScreen extends Component {
  static navigationOptions = () => {
    // TODO: Customize the header title for map based on contact/group.
    return {
      headerTitle: 'map'
    };
  }
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const location = await getCurrentPositionAsync();
    this.setState({
      userLocation: location.coords
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
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
