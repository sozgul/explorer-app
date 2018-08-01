import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, TouchableHighlight } from 'react-native';
import {connect} from 'react-redux';
import {navigateToCreateGroup, navigateToMap} from '../../actions/navigation';
import { bindActionCreators } from 'redux';
import FontAwesome, {Icons} from 'react-native-fontawesome';
import styles from './styles';
import commonStyles from '../../common/styles';
import {listStyles,listItemStyles} from '../../common/styles';


class MapListScreen extends React.Component {
  static navigationOptions = () => {
    return {
      headerTitle: 'select a contact to start a map'
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
    const {navigateToCreateGroup} = this.props;
    navigateToCreateGroup();
  }
  _openMapPressed(map) {
    const {navigateToMap} = this.props;
    navigateToMap({mapID: map.id, map});
  }

  render() {
    return (
      <View style = {listStyles.wrapper}>
        <View style={[commonStyles.wrapper_button,styles.memberWrapper]}>
          <Text style={[commonStyles.purple_text]} onPress={() => this._continuePressed()}>create new group
          </Text>
          <FontAwesome style={[commonStyles.plus]}>
            {Icons.plus}
          </FontAwesome>
        </View>
        <FlatList
          style={listStyles.list}
          data = {this.state.maps.mapList}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
            <TouchableHighlight
              style={listItemStyles.listItem}
              onPress = {() => this._openMapPressed(item)}
              underlayColor="#fff"
            >
              <View style = {listItemStyles.listItemContent}>
                <Text style = {[commonStyles.text, listItemStyles.itemText]}>{`${item.subject}`}</Text>
              </View>
            </TouchableHighlight>
          }
        />
      </View>
    );
  }
}

MapListScreen.propTypes = {
  navigateToCreateGroup: PropTypes.func.isRequired,
  mapList: PropTypes.object.isRequired,
  navigateToMap: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  mapList: state.mapsData
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({navigateToCreateGroup, navigateToMap}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MapListScreen);
