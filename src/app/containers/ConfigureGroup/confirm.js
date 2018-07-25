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

class ConfirmGroupScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'add subject',
      headerLeft: (
        <HeaderBackButton
          onPress={() => navigation.navigate(ScreenNames.CREATE_GROUP)}
          title ='participants'
          tintColor= '#FFF'
        />
      )
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      groupName: '',
      messages: []
    };
  }


  _createMapPressed() {
    const {navigateToMap} = this.props;
    const {params: contactsSelected} = this.props.navigation.state;
    createMap('', '', contactsSelected.map((item) => (item.id)), this.state.groupName, '', this.state.messages );
    navigateToMap();
  }

  render() {
    const {params: contactsSelected} = this.props.navigation.state;
    return (
      <View style = {styles.container}>
        <TextInput
          style={[commonstyles.textInput, styles.subjectContainer]}
          placeholder="enter group name"
          onChangeText={value => this.setState({groupName:value})}
          value={this.state.displayUserName}
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

ConfirmGroupScreen.propTypes = {
  navigateToMap: PropTypes.func.isRequired,
  createMap: PropTypes.func.isRequired
};
const mapStateToProps = state => (state);

const mapDispatchToProps = (dispatch) => 
  bindActionCreators({navigateToMap, createMap}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmGroupScreen);
