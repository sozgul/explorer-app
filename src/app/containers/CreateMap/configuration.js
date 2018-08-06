import React from 'react';
import { Text, View, TextInput, FlatList } from 'react-native';
import {connect} from 'react-redux';
import * as ScreenNames from '../../navigators/screen_names';
import {HeaderBackButton} from 'react-navigation';
import commonstyles from '../../common/styles';
import PropTypes from 'prop-types';
import {navigateToMap} from '../../actions/navigation';
import {bindActionCreators} from 'redux';
import commonStyles from '../../common/styles';
import styles from './styles';
import CustomButton from '../../components/Button';
import {createMap} from '../Map/actions';
import uuidV4 from 'uuid/v4';

class MapConfigurationScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'add subject',
      headerLeft: (
        <HeaderBackButton
          onPress={() => navigation.navigate(ScreenNames.MAP_PARTICIPANTS)}
          title ='participants'
          tintColor= '#FFF'
        />
      )
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      groupName: ''
    };
  }


  _createMapPressed() {
    const {navigateToMap, account, createMap} = this.props;
    const {params: contactsSelected} = this.props.navigation.state;
    const contactIDs = contactsSelected.map(item => item.id);
    const subject = this.state.groupName;
    const ownerUserID = account.userId;
    const mapID = uuidV4();
    createMap({id: mapID, ownerUserID, contactIDs, subject});
    navigateToMap({mapID, subject});
  }

  render() {
    const {params: contactsSelected} = this.props.navigation.state;
    return (
      <View style = {styles.container}>
        <TextInput
          style={[commonstyles.textInput, styles.subjectContainer]}
          placeholder="enter group name"
          onChangeText={value => this.setState({groupName:value})}
          value={this.state.groupName}
        />
        <View style = {styles.participantWrapper}>
          <Text style = {[commonstyles.text, styles.title]}>participants</Text>
          <FlatList
            data = {contactsSelected}
            keyExtractor={item => item.id}
            renderItem={({item}) =>
              <View style = {styles.memberWrapper}>
                <Text style = {[commonStyles.text, styles.text]}>{`${item.firstName} ${item.lastName}`}</Text>
              </View>
            }
          />
        </View>
        <View style = {styles.buttonWrapper}>
          <CustomButton
            text="Create Map"
            onPress={this._createMapPressed.bind(this)}
          />
        </View>
      </View>
    );
  }
}

MapConfigurationScreen.propTypes = {
  navigateToMap: PropTypes.func.isRequired,
  createMap: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  account: state.accountData
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({navigateToMap, createMap}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MapConfigurationScreen);
