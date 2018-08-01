import React from 'react';
import {Provider} from 'react-redux';
import Layout from './components/Layout';
import {AppNavigator} from './navigators';
import {store, persistor} from './store';
import { AppLoading, Font } from 'expo';
import { PersistGate } from 'redux-persist/integration/react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
    this._loadFonts();
  }
  async _loadFonts() {
    await Font.loadAsync({
      FontAwesome: require('./assets/fonts/FontAwesome.otf')
    });
    this.setState({fontsLoaded: true});
  }

  _renderAppLoading() {
    return (
      <AppLoading />
    );
  }

  _renderApp() {
    return (
      <AppNavigator />
    );
  }

  render() {
    const {fontsLoaded} = this.state;

    return (
      <Provider store={store}>
        <PersistGate 
          loading={this._renderAppLoading()}
          persistor={persistor}
        >
          <Layout>
            {fontsLoaded ? (this._renderApp()) : (this._renderAppLoading())}
          </Layout>
        </PersistGate>
      </Provider>
    );
  }
}