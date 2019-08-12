/** @format */

// import liraries
import React, { Component } from "react";
import { View, TextInput } from "react-native";

import styles from "./styles";

// create a component
class SearchName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  keyExtractor = item => item;

  onNameChange = name => {
    this.props.downloadArtiste(name);

    this.setState({ name });
  };

  render() {
    const { name } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <TextInput
            clearButtonMode={"always"}
            placeholder="Rechercher"
            placeholderTextColor="white"
            style={styles.objectInput}
            numberOfLines={1}
            onChangeText={this.onNameChange}
            value={name}
            autoCorrect={false}
          />
        </View>
      </View>
    );
  }
}

export default SearchName;
