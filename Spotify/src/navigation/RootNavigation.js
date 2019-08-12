/**
 * @format
 * @flow
 */

import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import Login from '../screens/Login';

import { Easing, Animated } from "react-native";
import { appRoutes } from ".";
import AuthLoading from '../screens/AuthLoading';

const transitionConfig = () => ({
  transitionSpec: {
    duration: 250,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
    useNativeDriver: true
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;

    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0]
    });

    return { transform: [{ translateX }] };
  }
});

const configApp = {
  headerStyle: {
    backgroundColor: "red"
  },
  transitionConfig,
  cardStyle: {
    backgroundColor: "#fff"
  }
};

const App = createStackNavigator(appRoutes, configApp);

const authRoutes = {
  Login: {
    screen: Login
  }
};

const configAuth = {
  headerStyle: {
    backgroundColor: "red"
  },
};

const Auth = createStackNavigator(authRoutes, configAuth);

let RootNavigation = createSwitchNavigator(
  {
    AuthLoading,
    Auth,
    App,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

RootNavigation = createAppContainer(RootNavigation);

export default RootNavigation;
