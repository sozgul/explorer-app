
export function getContactsWithUserIDsSelector(registeredUsers, contacts) {
  return contacts.map(contact => {
    const registeredUser = registeredUsers.find(regUser => regUser.contactId === contact.id);
          
    if (registeredUser) {
      contact.userId = registeredUser.userId;
    }

    return contact;
  });
}