import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MapsList from '../../containers/Map/map_list';
import MapsWelcome from '../../containers/MapsWelcome';

function DisplayMaps(props) {
  const {maps, profile} = props;
  return (maps.mapList.length > 0 ? (
    <MapsList mapList={maps} />
  ) : (
    <MapsWelcome profile={profile} />
  ));
}
DisplayMaps.propTypes = {
  maps: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  maps: state.mapsData,
  profile: state.userProfileData
});
  
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMaps);

 