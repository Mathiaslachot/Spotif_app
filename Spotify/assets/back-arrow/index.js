/** @format */

import { Platform } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Icon = Platform.OS === "android" ? MaterialIcons : Ionicons;

const name = {
  name: Platform.OS === "android" ? "arrow-back" : "ios-arrow-back"
};

const BackArrow = props => <Icon {...props} size={25} {...name} />;

export default BackArrow;
