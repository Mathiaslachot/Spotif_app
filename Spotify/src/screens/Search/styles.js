/** @format */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  buttonText: {
    fontSize: 18,
    color: "green",
    fontWeight: "900"
  },
  emptyContainer: {
    flex: 1,
    top: "40%",
    padding: 16,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyText: {
    fontSize: 17,
    textAlign: "center",
    padding: 8
  },
  emptySubtitle: {
    fontSize: 17,
    textAlign: "center",
    padding: 8
  },
  name: {
    fontSize: 18,
    color: "white",
    textAlign: "center"
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    textAlign: "center"
  },
  viewButton: {
    flexDirection: "row",
    flex: 1
  },
  viewTextButton: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  viewImageButton: {
    flex: 0.3,
    justifyContent: "flex-end"
  },
  imageButton: {
    height: 60,
    width: 60,
    marginRight: 15
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CED0CE"
  },
  viewWarning: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textWarning: {
    fontSize: 18,
    fontWeight: "900",
    color: "black",
    textAlign: "center"
  },
  containerFlatList: {
    flex: 1,
    backgroundColor: "black"
  },
  buttonWebAppLeft: {
    height: "100%",
    flex: 0,
    justifyContent: "center",
    paddingHorizontal: 16
  },
  containerListItem: {
    backgroundColor: "black"
  },
  viewSearchName: {
    flex: 0.2
  },
  viewFlatList: {
    flex: 0.8
  }
});
