import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SignupNavigator from '../../navigators/signup';
import MainNavigator from '../../navigators/main';

function HomeScreen(props) {
  const {account} = props;
  return (account.verificationStatus === 'verified' ? (
    <MainNavigator />
  ) : (
    <SignupNavigator  />
  ));
}
HomeScreen.propTypes = {
  account: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  account: state.accountData,
  profile: state.userProfileData
});
  
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

 