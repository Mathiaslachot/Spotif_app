/** @format */

import React from "react";
import { StyleSheet, View, Text } from "react-native";

const RenderEmpty = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        Impossible de trouver l"artiste recherché
      </Text>
      <Text style={styles.emptySubtitle}>
        Réessayer, vérifier l"orthographe ou utilisez d"autres mots-clés
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    color: "white",
    padding: 8
  },
  emptySubtitle: {
    fontSize: 17,
    color: "white",
    textAlign: "center",
    padding: 8
  }
});

export default RenderEmpty;
