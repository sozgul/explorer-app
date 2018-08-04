import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';
import {isLoggedInSelector, shouldRefreshExplorerAPITokenSelector} from '../../selectors/auth';
import {isUserSignedUpSelector} from '../../selectors/account';
import * as ScreenNames from '../../navigators/screen_names';
import {updateAPIAccessToken} from '../../actions/auth';

class AuthLoadingScreen extends Component {
  static navigationOptions = {};

  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  async _bootstrapAsync() {
    const {
      auth,
      account, 
      isUserSignedUp, 
      isUserLoggedIn, 
      shouldRefreshAPIToken,
      updateAPIAccessToken,
      navigation
    } = this.props;
    const {refreshToken} = auth;
    const {userId} = account;
    // NOTE: destinationRoute will need to change if we implement a signup page.
    const destinationRoute = isUserSignedUp ? ScreenNames.MAIN_FLOW : ScreenNames.AUTH_FLOW;

    if (!isUserLoggedIn || shouldRefreshAPIToken) {
      updateAPIAccessToken({userId, refreshToken}).then(() => {
        navigation.navigate(destinationRoute);  
      }).catch(() => {
        // TODO: navigate to an error route!
      });
    } else {
      navigation.navigate(destinationRoute);
    }

    this.props.navigation.navigate(ScreenNames.AUTH_FLOW);
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

AuthLoadingScreen.propTypes = {
  auth: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired,
  isUserSignedUp: PropTypes.bool.isRequired,
  shouldRefreshAPIToken: PropTypes.bool.isRequired,
  updateAPIAccessToken: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.authData,
  account: state.accountData,
  isUserSignedUp: isUserSignedUpSelector(state.accountData),
  isUserLoggedIn: isLoggedInSelector(state.authData),
  shouldRefreshAPIToken: shouldRefreshExplorerAPITokenSelector(state.authData)
});
const mapDispatchToProps = dispatch => bindActionCreators({
  updateAPIAccessToken
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);
