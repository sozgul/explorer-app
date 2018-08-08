import { createSelector } from 'reselect';

const mapList = state => state.mapList;

export const gpsEnabledMaps = createSelector(
  mapList,
  mapList => mapList.filter(map => map.gpsEnabled)
);