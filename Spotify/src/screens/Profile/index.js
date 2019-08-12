/** @format */

//import liraries
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  AsyncStorage,
} from 'react-native';
import SettingsList from 'react-native-settings-list';
import BackArrow from '../../../assets/back-arrow';
import WaitingMessage from "../../components/WaitingMessage";
import styles from './styles';

const imageEmpty = require('./../../../assets/images/profile_empty.png');

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.dowloadProfile();
  }

  dowloadProfile = async () => {
    let userProfile = null;
    try {
      userProfile = (await AsyncStorage.getItem('profileConnectedUser')) || 'none';
    } catch (error) {
      console.log(error.message);
    }
    const userProfileComplete = JSON.parse(userProfile);
    this.setState({ profile: userProfileComplete, isLoading: false });

    return userProfileComplete;
  };

  render() {
    const { profile, isLoading } = this.state;

    if (isLoading) {
      return <WaitingMessage />;
    }

    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Image style={styles.profileImage} source={imageEmpty} />
        </View>
        <SettingsList borderColor="#c8c7cc" defaultItemSize={50}>
          <SettingsList.Header headerStyle={styles.settingListHeader} />
          <SettingsList.Item
            title="Username"
            titleInfo={profile.name}
            hasNavArrow={false}
          />
          <SettingsList.Item
            title="Email"
            titleInfo={profile.email}
            hasNavArrow={false}
          />
          <SettingsList.Item
            title="Followers"
            titleInfo={profile.followers.toString()}
            hasNavArrow={false}
          />
        </SettingsList>
      </ScrollView>
    );
  }
}

Profile.navigationOptions = ({ navigation }) => {
  return {
    title: 'Profil',
    headerStyle: {
      backgroundColor: 'black'
    },
    headerTintColor: '#fff',
    headerTintColor: '#ffffff',
    headerLeft: (
      <TouchableOpacity title="<" onPress={() => navigation.goBack()}>
        <View style={styles.leftButton}>
          <BackArrow color="#fff" />
        </View>
      </TouchableOpacity>
    ),
  };
};

//make this component available to the app
export default Profile;
