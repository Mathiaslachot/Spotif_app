/** @format */

import { StyleSheet } from 'react-native';

const PROFILE_IMAGE_HEIGHT = 125;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef'
  },
  leftButton: {
    height: '100%',
    flex: 0,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  headerContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImage: {
    height: PROFILE_IMAGE_HEIGHT,
    width: PROFILE_IMAGE_HEIGHT,
    borderRadius: PROFILE_IMAGE_HEIGHT / 2,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    borderColor: 'lightgray'
  },
  settingListHeader: {
    marginTop: 15
  }
});
