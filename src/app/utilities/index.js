
import mirrorKeys from './mirror_keys';

function capitalizeString(string = '') {
  return string.split(' ').map(word => word.replace(/^\w/, c => c.toUpperCase())).join(' ');
}

export {
  mirrorKeys,
  capitalizeString
};