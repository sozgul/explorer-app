import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, FlatList, TouchableWithoutFeedback } from 'react-native';
import {connect} from 'react-redux';
import {navigateToCreateGroup} from '../../actions/navigation';
import { bindActionCreators } from 'redux';
import FontAwesome, {Icons} from 'react-native-fontawesome';
import styles from './styles';
import commonStyles from '../../common/styles';

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
    // to do display map.
    console.log(map);
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style={styles.wrapper}>
          <Text style={[commonStyles.text, styles.purple_text]} onPress={() => this._continuePressed()}>create new group
          </Text>
          <FontAwesome style={[styles.plus]}>
            {Icons.plus}
          </FontAwesome>
        </View>
        <FlatList 
          data = {this.state.maps.mapList}
          keyExtractor={item => item.id}
          renderItem={({item}) => 
            <TouchableWithoutFeedback onPress = {(event) => this._openMapPressed(item)}>
              <View style = {styles.memberWrapper}>
                <Text style = {[commonStyles.text, styles.text]}>{`${item.subject}`}</Text>
              </View>
            </TouchableWithoutFeedback>
          }
        />
      </View>
    );
  }
}

MapListScreen.propTypes = {
  navigateToCreateGroup: PropTypes.func.isRequired,
  mapList: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  mapList: state.mapsData
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({navigateToCreateGroup }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MapListScreen);
