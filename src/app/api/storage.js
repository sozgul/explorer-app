import { AsyncStorage } from 'react-native';

// For documentation, see: https://facebook.github.io/react-native/docs/asyncstorage.html

class LocalStorage {
  constructor(store_name) {
    this.store_name = store_name;
  }

  async setItem(key, value) {
    if (!(value instanceof String)) {
      value = JSON.stringify(value);
    }
    return await AsyncStorage.setItem(`${this.store_name}:${key}`, value);
  }

  async getItem(key) {
    let result = await AsyncStorage.getItem(`${this.store_name}:${key}`);
    result = JSON.parse(result);
    return result;
  }

  async mergeItem(key, value) {
    value = JSON.stringify(value);
    return await AsyncStorage.mergeItem(`${this.store_name}:${key}`, value);
  }

  async removeItem(key) {
    return await AsyncStorage.removeItem(`${this.store_name}:${key}`);
  }

  async multiGet(keys) {
    let result = await AsyncStorage.multiGet(keys);
    result = result.map(item => {
      return JSON.parse(item);
    });
    return result;
  }

  async multiSet(keys, values) {
    values = values.map(item => {
      if (!(item instanceof String)) {
        item = JSON.stringify(item);
      }
      return item;
    });
    return await AsyncStorage.multiSet(keys, values);
  }

  async multiMerge(keys, values) {
    values = values.map(obj => {
      return JSON.stringify(obj);
    });
    return await AsyncStorage.multiMerge(keys, values);
  }

  async multiRemove(keys) {
    return await AsyncStorage.multiRemove(keys);
  }

  async getAllKeys() {
    return await AsyncStorage.getAllKeys();
  }

  async flushGetRequests() {
    return await AsyncStorage.getAllKeys();
  }

  async clear() {
    return await AsyncStorage.clear();
  }
}

const appStoreApi = new LocalStorage('@ExplorerStorage');
export default appStoreApi;