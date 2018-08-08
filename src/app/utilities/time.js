function padWithZero(integer) {
  return integer < 10 ? `0${integer}` : integer;
}

export function secondsToHms(d) {
  d = Number(d);
  const h = Math.floor(d / 3600);
  const m = Math.floor(d % 3600 / 60);
  const s = Math.floor(d % 3600 % 60);


  const hDisplay = h > 0 ? `${h}:`: '';
  const mDisplay = m > 0 ? `${padWithZero(m)}:`: '00:';
  const sDisplay = s > 0 ? `${padWithZero(s)}` : '00';
  return hDisplay + mDisplay + sDisplay;
}

export function getCurrentTimestampSeconds() {
  return Math.round((new Date()).getTime() / 1000);
}