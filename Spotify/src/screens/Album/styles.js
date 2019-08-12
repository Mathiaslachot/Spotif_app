/** @format */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black"
  },
  containerScrollView: {
    flex: 1,
    backgroundColor: "transparent",
    zIndex: 1,
    paddingTop: 200,
    width: "100%"
  },
  containerFlatList: {
    flex: 1,
    zIndex: 1,
    paddingBottom: 200,
    backgroundColor: "black",
    width: "100%"
  },
  containerListItem: {
    backgroundColor: "black"
  },
  name: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginBottom: 5
  },
  buttonWebAppLeft: {
    height: "100%",
    flex: 0,
    justifyContent: "center",
    paddingHorizontal: 16
  },
  viewButton: {
    flexDirection: "row",
    flex: 1
  },
  viewTextButton: {
    flex: 0.8,
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  viewTime: {
    flex: 0.2,
    justifyContent: "flex-end"
  },
  time: {
    textAlign: "center",
    color: "grey",
    fontSize: 14
  },
  nameArtist: {
    textAlign: "center",
    color: "grey",
    fontSize: 14
  },
  scollViexContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    height: 200,
    width: 200
  },
  imageZIndex: {
    height: 200,
    width: 200,
    position: "absolute",
    top: 0,
    zIndex: 1
  },
  imageOpacity: {
    opacity: 0.7
  }
});
