//import liraries
import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { WebView } from 'react-native-webview';
import apiConf from "../../api.config";
import styles from './styles';

const urlWebview = "http://localhost:3000/auth/spotify"
const startUrl = "http://localhost:3000/auth/spotify/callback"
// create a component
class Login extends Component {

  downloadToken = async () => {
    try {
      const url = apiConf.host + apiConf.endpoints.token;

      const response = await fetch(url, {
        method: "GET"
      });

      const data = await response.json();

      const myProfile = {
        name: data.paramToken.profile.displayName,
        email: data.paramToken.profile.emails[0].value,
        followers: data.paramToken.profile.followers
      };

      try {
        await AsyncStorage.setItem('profileConnectedUser', JSON.stringify(myProfile));
      } catch (error) {
        console.log({ error });
      }

      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  };

  changeNavigation = async ({ url }) => {
    const { navigation } = this.props;
    if (url.startsWith(startUrl)) {
      await this.downloadToken();
      navigation.navigate('App');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <WebView
          source={{ uri: urlWebview }}
          onNavigationStateChange={this.changeNavigation}
          style={styles.webview}
        />
      </View>
    );
  }
}

//make this component available to the app
export default Login;
