
import axios from 'axios';
import {getAPIHost} from '../config/hosts';
import Logger from '../utilities/logger';
import { getContactsAsync } from '../utilities/contacts';
import {getCountryCallingCode} from 'libphonenumber-js';

let client;
const logger = new Logger({name: 'APIClient'});

class APIClient {
  constructor({host, accessToken}) {
    this._host = host;
    this._headers = {accessToken: accessToken};
    this._createHTTPClient();
  }

  _createHTTPClient() {
    this._http = axios.create({
      baseURL: this._host,
      headers: this._headers
    });
  }

  _setAccessToken(token) {
    this._headers.accessToken = token;
    this._createHTTPClient();
  }

  async updateAPIToken({userId, refreshToken}) {
    const endpoint = '/token';
    const payload = {
      userid: userId,
      refreshToken
    };
    logger.info(`requesting new access token for ${userId}`, payload);

    return this._http.post(endpoint, payload).then(response => {
      const {data: token} = response;
      logger.info(`received new access token for ${userId}`, token);
      this._setAccessToken(token);
      return token;
    }).catch(error => {
      logger.error(`request for new access token failed for ${userId}`, error);
    });
  }

  async verifyPhoneNumber({country, countryCode, phoneNumber}) {
    const endpoint = '/request-verification';
    const payload = {
      phoneDetails: {
        carrierCode: '',
        countryCallingCode: countryCode,
        country,
        phone: phoneNumber,
        ext: '',
        possible: true,
        valid: true
      }
    };
    logger.info('sending verifyPhoneNumber request', payload);

    return this._http.post(endpoint, payload);
  }

  async verifySMSToken({country, countryCode, phoneNumber, smsCode}) {
    const endpoint = '/verify-token';
    const payload = {
      phoneDetails: {
        carrierCode: '',
        countryCallingCode: countryCode,
        country,
        ext: '',
        phone: phoneNumber,
        possible: true,
        valid: true
      },
      verificationToken: smsCode
    };
    logger.info('sending verifySMSToken request', payload);

    return this._http.post(endpoint, payload);
  }

  async matchContactsUserIDs() {
    const endpoint = '/match-contacts';
    const contacts = await getContactsAsync();
    const contactDetailsList = contacts.map(c => {
      return {
        contactId: c.id,
        phoneNumbers: c.phoneNumbers.map(p => {
          return {
            countryCallingCode: getCountryCallingCode(p.countryCode.toUpperCase()),
            phoneNumber: p.digits
          };
        })
      };
    });
    const payload = {
      contactDetailsList
    };
    return this._http.post(endpoint, payload);
  }

  async createMap({userId, subject, participantIDs}) {
    const endpoint = '/map';
    const payload = {
      creatorID: userId,
      subject,
      participants: [
        {participantID: userId, role: 'admin'}, 
        ...participantIDs.map(p => ({participantID: p.id, role: 'member'}))
      ]
    };
    return this._http.post(endpoint, payload);
  }
}

client = new APIClient({
  host: getAPIHost()
});

export default client;
