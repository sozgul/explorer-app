import React from 'react';
//import {View, Text} from 'react-native';
//import styles from './styles';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MapsList from '../../containers/Map/map_list';
import CreateMap from '../../containers/Map/create_map';

/*class CreateMapComponent extends Component {
  render() {
    const {text, value } = this.props;


    return (
      <View style={styles.mainWrapper}>
        <Text>{text}</Text>
        <Text style = {styles.valueWrapper}>{value}</Text>
      </View>
    );
  }
}*/
function MapList(props) {
  const {maps = [], profile} = props;

  return (maps.length > 0 ? (
    <MapsList maps={maps} />
  ) : (
    <CreateMap profile={profile} />
  ));
}
MapList.propTypes = {
  maps: PropTypes.array.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => (state);
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MapList);
