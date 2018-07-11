import React from 'react';
import {Provider} from 'react-redux';
import Layout from './components/Layout';
import {AppNavigator} from './navigators/index';
import Store from './store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Layout>
          <AppNavigator />
        </Layout>
      </Provider>
    );
  }
}