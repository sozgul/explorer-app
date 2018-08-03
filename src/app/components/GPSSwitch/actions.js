import ActionTypes from '../../actions/types';

export function mapGPSToggled({mapID, gpsEnabled}) {
  return {
    type: ActionTypes.MAP_GPS_TOGGLED,
    mapID,
    gpsEnabled,
    gpsEnabledAt: (new Date().getTime())
  };
}