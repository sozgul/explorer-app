import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { gpsEnabledMaps } from '../selectors/maps';
import GPSClient, {eventNames} from '../api/gps';
import {watchPositionAsync} from '../utilities/location';
import {locationDataReceived} from './actions';

class GPSConnector extends Component {
  static propTypes = {
    account: PropTypes.object.isRequired,
    gpsEnabledMaps: PropTypes.array.isRequired,
    locationDataReceived: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this._locationDataReceived = this._locationDataReceived.bind(this);
  }

  componentDidMount() {
    // TODO: Only connect if we have maps that are GPS enabled.
    this._connectGPSClient();
    this._joinMaps();
    GPSClient.on(eventNames.location_data_received, this._locationDataReceived);
  }

  componentWillUnmouvdvnt() {
    this._disconnectGPSClient();
    GPSClient.removeEventListener(eventNames.location_data_received, this._locationDataReceived);
  }

  _locationDataReceived(payload) {
    this.props.locationDataReceived(payload);
  }

  _setupGPSPositionListener() {
    watchPositionAsync({
      enableHighAccuracy:true,
      timeInterval:1000,
      distanceInterval:0.3
    }, this._onPositionChanged.bind(this));
  }

  _onPositionChanged(location) {
    const {account} = this.props;
    const {userId} = account;
    const {gpsEnabledMaps} = this.props;
    const gpsEnabledMapIDs = gpsEnabledMaps.map(map => map.id);
    const {coords: coordinates} = location;
    GPSClient.sendGPS({
      userId,
      mapIds:gpsEnabledMapIDs, 
      coordinates
    });
  }

  _joinMaps() {
    const {gpsEnabledMaps} = this.props;
    const gpsEnabledMapIDs = gpsEnabledMaps.map(map => map.id);

    gpsEnabledMapIDs.forEach(mapId => {
      GPSClient.joinMap({mapId});
    });
  }

  _connectGPSClient() {
    const {userId} = this.props.account;

    if (!GPSClient.isConnected()) {
      GPSClient.connect();
      GPSClient.setUserId({userId});
      this._setupGPSPositionListener();
    }
  }

  _disconnectGPSClient() {
    if (GPSClient.isConnected()) {
      GPSClient.disconnect();
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({

  account: state.accountData,
  maps: state.mapsData,
  gpsEnabledMaps: gpsEnabledMaps(state.mapsData)
});
const mapDispatchToProps = dispatch => bindActionCreators({
  locationDataReceived
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GPSConnector);