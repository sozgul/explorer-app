
import APIClient from '../api/api';
import ActionTypes from './types';
import Logger from '../utilities/logger';

const logger = new Logger({name: 'UsersActions'});

export function syncUserIds() {
  return function(dispatch) {
    APIClient.matchContactsUserIDs().then(response => {
      const {data = []} = response;
      
      logger.log('Synced userIDs with registered contacts: ', data);
      dispatch({
        type: ActionTypes.USERIDS_SYNC_UPDATED,
        registeredContacts: data
      });
    }).catch(error => {
      logger.error('Error while syncing userIDs with contacts: ', error);
    });
  };
}