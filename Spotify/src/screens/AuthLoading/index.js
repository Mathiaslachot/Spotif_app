/**
 * @format
 * @flow
 */

import * as React from 'react';
import {View, ActivityIndicator, StatusBar} from 'react-native';
import styles from './styles';

class AuthLoading extends React.Component {
  componentDidMount() {
    this.checkLoggedIn();
  }

  checkLoggedIn = async () => {
      this.props.navigation.navigate('Auth');
    }
  

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoading;
