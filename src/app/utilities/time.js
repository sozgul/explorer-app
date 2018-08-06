export function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);


  var hDisplay = h > 0 ? `${h}:`: '';
  var mDisplay = m > 0 ? `${m}:`: '00:';
  var sDisplay = s > 0 ? `${s}` : '00';
  return hDisplay + mDisplay + sDisplay;
}

export function getCurrentTimestampSeconds() {
  return Math.round((new Date()).getTime() / 1000);
}