
import { Contacts, Permissions } from 'expo';

/**
 * async isContactsPermissionGranted
 * Checks if user has already granted contacts permission.
 * 
 * Returns true if permission was granted. false otherwise.
 */
export async function isContactsPermissionGrantedAsync() {
  const {status} = await Permissions.getAsync(Permissions.CONTACTS);
  return status === 'granted';
}

/**
 * async requestContactsPermission
 * Checks if user has granted contacts permission.  If not, it prompts the 
 * user to grant permission.  
 * 
 * Returns true if permission was granted.  false otherwise.
 */
export async function requestContactsPermissionAsync() {
  // Check if permission was granted already...
  const isGranted = await isContactsPermissionGrantedAsync();
  if (isGranted) {
    return true;
  }
  
  // If permission was not already granted, ask user for permission...
  const permission = await Permissions.askAsync(Permissions.CONTACTS);
  return permission.status === 'granted';
}

/**
 * async getContacts
 * Gets contacts from the contacts api.
 * 
 * Default behavior:
 * - sorted: will sort by full name
 * - checkPermission: will check permission and prompt if they haven't been granted.
 * 
 * returns an array of contacts
 */
export async function getContactsAsync({sorted=true, checkPermission=true} = {}) {
  if (checkPermission) {
    const permissionGranted = await requestContactsPermissionAsync();
    if (!permissionGranted) {
      return [];
    }
  }

  const contacts = await Contacts.getContactsAsync({
    fields: [
      Contacts.PHONE_NUMBERS,
      Contacts.EMAILS
    ]
  });
  return sorted ? sortContactsByName(contacts.data) : contacts.data;
}

/**
 * sortContactsByName
 * 
 * sorts the given array of contacts by full name.
 */
export function sortContactsByName(contacts = [], {ascending=true} = {}) {
  return contacts.sort((c1, c2) => {
    const c1Name = getFullName(c1).toLowerCase();
    const c2Name = getFullName(c2).toLowerCase();
    if (c1Name < c2Name) {
      return ascending ? -1 : 1;
    } else if (c1Name > c2Name) {
      return ascending ? 1 : -1;
    }
    return 0;
  });
}

/**
 * getFullName
 * 
 * Returns the 'full name' for a given contact.
 */
export function getFullName(contact = {}) {
  return `${contact.firstName} ${contact.lastName}`;
}