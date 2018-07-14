import React from 'react';
import {Provider} from 'react-redux';
import Layout from './components/Layout';
import {AppNavigator} from './navigators/index';
import Store from './store';
import { Font } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: require('./assets/fonts/FontAwesome.otf')
    });
    this.setState({fontsLoaded: true});
  }
  render() {
    return (
      <Provider store={Store}>
        <Layout>
          {this.state.fontsLoaded ? (
            <AppNavigator />
          ) : null}
        </Layout>
      </Provider>
    );
  }
}