import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';
import commonStyles from './styles';
import {isLoggedInSelector, shouldRefreshExplorerAPITokenSelector} from '../../selectors/auth';
import {isUserSignedUpSelector} from '../../selectors/account';
import * as ScreenNames from '../../navigators/screen_names';
import {updateAPIAccessToken} from '../../actions/auth';
import Logger from '../../utilities/logger';

const logger = new Logger({name: 'AuthLoadingScreen'});

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
      navigation
    } = this.props;
    const {explorerAPIRefreshToken: refreshToken} = auth;
    const {userId} = account;
    
    if (!isUserSignedUp) {
      // User is not signed up... Navigate to the 'AUTH_FLOW'
      logger.info(`no account found on device - navigating to ${ScreenNames.AUTH_FLOW}`);
      this.props.navigation.navigate(ScreenNames.AUTH_FLOW);
    
    } else if (!isUserLoggedIn || shouldRefreshAPIToken) {
      // User is signed-up, but their token is expired (or about to expire).
      logger.info('need updated credentials - updating the API access token');
      this.props.updateAPIAccessToken({userId, refreshToken}).then(response => {
        logger.info(`received updated credentials - navigating to ${ScreenNames.MAIN_FLOW}`, response);
        navigation.navigate(ScreenNames.MAIN_FLOW);  
      }).catch(error => {
        // TODO: navigate to an error route!
        logger.error('updating API access token failed', error);
      });
    
    } else {
      // Otherwise, user is already signed-id, so head to MAIN_FLOW.
      logger.info(`user has valid credentials - navigating to ${ScreenNames.MAIN_FLOW}`);
      navigation.navigate(ScreenNames.MAIN_FLOW);
    }
  }

  render() {
    return (
      <View style={[commonStyles.container, styles.container]}>
        <ActivityIndicator
          animating={true}
          size="large"
        />
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
