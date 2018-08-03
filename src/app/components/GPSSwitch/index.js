import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Switch  from '../../components/Switch';
import { WHITE,GREEN,LIGHT_GREY} from '../../common/colors';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {mapGPSToggled} from './actions';
import {secondsToHms} from '../../utilities/time';
import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';
import styles from './styles';

class GPSSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      gpsTimeLeft: this.props.profile.gpsTimeLimit
    };
    this.timerStarted = props.value;
    this.startedTime = 0;
  }

  componentDidMount() {
    if (this.state.value) {
      this._startTimer();
    }
  }

  componentWillUnmount() {
    this._stopTimer();
  }

  componentDidUpdate() {
    if (this.state.value) {
      this._startTimer();
    } else {
      this._stopTimer();
    }
  }

  _stopTimer() {
    if (this.timerStarted) {
      this.timerStarted = false;
      this.clearInterval(this._timer);
      this.setState({
        gpsTimeLeft: this.props.profile.gpsTimeLimit
      });
      this.startedTime = 0;
    }
  }

  _getCurrentTimeSec() {
    return Math.round((new Date).getTime() / 1000);
  }

  _startTimer() {
    if (!this.timerStarted) {
      this.startedTime = Math.round((new Date).getTime() / 1000);
      this._timer = this.setInterval(this._onTimerTick.bind(this), 1000);
      this.timerStarted = true;
    }
  }

  _onTimerTick() {
    const timeLeft = this.props.profile.gpsTimeLimit - (this._getCurrentTimeSec() - this.startedTime);
    const value = (timeLeft <= 0) ? false : this.state.value;
    this.setState({
      gpsTimeLeft: timeLeft,
      value
    });
  }

  render() {
    return (
      <Switch
        value={this.state.value}
        onValueChange={value => {
          this.setState({value});
          this.props.mapGPSToggled({mapID: this.props.mapID, gpsEnabled:value});
        }}
        disabled={false}
        activeText={secondsToHms(this.state.gpsTimeLeft)}
        inActiveText={'GPS muted'}
        circleSize={55}
        barHeight={55}
        activeTextStyle={styles.activeText}
        inactiveTextStyle={styles.inActiveText}
        circleBorderWidth={2}
        backgroundActive={GREEN}
        backgroundInactive={LIGHT_GREY}
        circleActiveColor={WHITE}
        circleInActiveColor={WHITE}
        changeValueImmediately={true}
        renderInsideCircle={() => (
          <FontAwesome style={[styles.rocketIcon]}>
            {Icons.rocket}
          </FontAwesome>
        )}
        innerCircleStyle={styles.innerCircleStyle}
        outerCircleStyle={styles.outerCircleStyle}
        renderActiveText={this.state.value}
        renderInActiveText={!this.state.value}
        switchLeftPx={1}
        switchRightPx={1}
        switchWidthMultiplier={3}
      />
    );
  }
}

reactMixin(GPSSwitch.prototype, TimerMixin);

GPSSwitch.propTypes = {
  value: PropTypes.bool,
  map: PropTypes.object,
  mapID: PropTypes.string,
  mapGPSToggled: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
GPSSwitch.defaultProps = {
  value: false
};
const gpsSwitchMapStateToProps = state => ({
  profile: state.userProfileData
});
const gpsSwitchMapDispatchToProps = dispatch => bindActionCreators({
  mapGPSToggled
}, dispatch);

export default connect(gpsSwitchMapStateToProps, gpsSwitchMapDispatchToProps)(GPSSwitch);