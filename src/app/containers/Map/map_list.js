import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {navigateToMapParticipants, navigateToMap} from '../../actions/navigation';
import { bindActionCreators } from 'redux';
import FontAwesome, {Icons} from 'react-native-fontawesome';
import {mapListStyles} from './styles';
import commonStyles from '../../common/styles';
import {listStyles,listItemStyles} from '../../common/styles';

class MapListScreen extends React.Component {
  static navigationOptions = () => {
    return {
      headerTitle: 'select a map'
    };
  }

  constructor(props) {
    super(props);
    const { mapList } = this.props;
    this.state = {
      maps: mapList
    };
  }

  _continuePressed() {
    const {navigateToMapParticipants} = this.props;
    navigateToMapParticipants();
  }
  _openMapPressed(map) {
    const {navigateToMap} = this.props;
    navigateToMap({mapID: map.id, map});
  }

  render() {
    return (
      <View style={mapListStyles.container}>
        
        <TouchableOpacity
          style={mapListStyles.createGroupButton}
          onPress={() => this._continuePressed()}
        >
          <Text style={[commonStyles.text, mapListStyles.createGroupButtonText]}>create new map</Text>
          <FontAwesome style={[commonStyles.plus, mapListStyles.createGroupButtonIcon]}>{Icons.plus}</FontAwesome>
        </TouchableOpacity>

        <FlatList
          style={listStyles.list}
          data={this.state.maps.mapList}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
            <TouchableHighlight
              style={listItemStyles.listItem}
              onPress = {() => this._openMapPressed(item)}
              underlayColor="#fff"
            >
              <View style={listItemStyles.listItemContent}>
                <Text style={[commonStyles.text, listItemStyles.itemText]}>{`${item.subject}`}</Text>
              </View>
            </TouchableHighlight>
          }
        />
      </View>
    );
  }
}

MapListScreen.propTypes = {
  navigateToMapParticipants: PropTypes.func.isRequired,
  mapList: PropTypes.object.isRequired,
  navigateToMap: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  mapList: state.mapsData
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({navigateToMapParticipants, navigateToMap}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MapListScreen);
