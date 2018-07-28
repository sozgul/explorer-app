
import { Location, Permissions } from 'expo';

/**
 * async isLocationPermissionGrantedAsync
 * Checks if user has already granted location permission.
 * 
 * Returns true if permission was granted. false otherwise.
 */
export async function isLocationPermissionGrantedAsync() {
  const {status} = await Permissions.getAsync(Permissions.LOCATION);
  return status === 'granted';
}

/**
 * async requestLocationPermissionAsync
 * Checks if user has granted location permission.  If not, it prompts the 
 * user to grant permission.  
 * 
 * Returns true if permission was granted.  false otherwise.
 */
export async function requestLocationPermissionAsync() {
  // Check if permission was granted already...
  const isGranted = await isLocationPermissionGrantedAsync();
  if (isGranted) {
    return true;
  }
  
  // If permission was not already granted, ask user for permission...
  const permission = await Permissions.askAsync(Permissions.LOCATION);
  return permission.status === 'granted';
}

/**
 * async getCurrentPositionAsync
 * Gets the device's current location
 * 
 * - enableHighAccuracy (true by default)
 * 
 * returns a location object (or null if no permission)
 * (https://docs.expo.io/versions/v28.0.0/sdk/location#coords-object----the-coordinates-of-the)
 */
export async function getCurrentPositionAsync({enableHighAccuracy = true, checkPermission=true} = {}) {
  if (checkPermission) {
    const permissionGranted = await requestLocationPermissionAsync();
    if (!permissionGranted) {
      return null;
    }
  }

  return await Location.getCurrentPositionAsync({enableHighAccuracy});
}

/**
 * async watchPositionAsync
 * Triggers callback whenever location changes based on provided parameters.
 * 
 * - checkPermission: whether or not to check GPS permissions first.
 * - enableHighAccuracy (true by default)
 * - timeInterval (250ms by default)
 * - distanceInterval (0.3m (1ft) by default)
 * - callback: triggered on every location change (will be called with location object)
 * 
 * returns a subscription object with a 'remove' function to stop listening.
 * https://docs.expo.io/versions/v28.0.0/sdk/location#expolocationwatchpositionasyncoptions-callback
 */
export async function watchPositionAsync(
  {checkPermission=true, enableHighAccuracy=true, timeInterval=250, distanceInterval=0.3} = {},
  callback = () => {}
) {
  if (checkPermission) {
    const permissionGranted = await requestLocationPermissionAsync();
    if (!permissionGranted) {
      return null;
    }
  }

  return await Location.watchPositionAsync(
    {enableHighAccuracy, timeInterval, distanceInterval}, 
    callback
  );
}