/** @format */

// import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import styles from "./styles";
import BackArrow from "../../../assets/back-arrow";
import querystring from "query-string";
import apiConf from "../../api.config";
import ErrorMessage from "../../components/ErrorMessage";
import UndefinedMessage from "../../components/UndefinedMessage";
import WaitingMessage from "../../components/WaitingMessage";
import MarqueeText from "react-native-marquee";

export default class Artiste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      isError: false,
      artiste: this.props.navigation.state.params.artiste
    };
  }

  componentDidMount() {
    this.downloadArtiste();
  }

  downloadArtiste = async () => {
    const { artiste } = this.state;

    try {
      const url = apiConf.host + apiConf.endpoints.artiste;

      const artisteId = querystring.stringify({
        id: artiste.id
      });

      const response = await fetch(url + "?" + artisteId, {
        method: "GET"
      });

      const data = await response.json();

      this.setState({ dataSource: data, isLoading: false });

      return Promise.resolve();
    } catch (error) {
      this.setState({ isError: true });
      return Promise.reject();
    }
  };

  _goToAlbum = infoAlbum => {
    const { navigation } = this.props;

    navigation.navigate("Album", {
      album: {
        ...infoAlbum
      }
    });
  };

  lowerCaseAllWordsExceptFirstLetters = string => {
    return string.replace(/\w\S*/g, function(word) {
      return word.charAt(0) + word.slice(1).toLowerCase();
    });
  };

  render() {
    const { dataSource, isLoading, isError } = this.state;

    if (isLoading) {
      return <WaitingMessage />;
    }

    if (isError) {
      return <ErrorMessage />;
    }

    if (dataSource === undefined) {
      return <UndefinedMessage />;
    }

    return (
      <View style={styles.container}>
        <View style={styles.scroll}>
          <FlatList
            contentContainerStyle={styles.flatlistcontainer}
            showsVerticalScrollIndicator={true}
            bounces={false}
            data={dataSource}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.buttonTouch}
                onPress={() => {
                  this._goToAlbum(item);
                }}
              >
                <Image
                  style={styles.imageOnButton}
                  source={{ uri: item.images[0].url }}
                  imageStyle={styles.imageOpacity}
                />    
       
                <MarqueeText
                duration={2000}
                marqueeOnStart
                loop
                marqueeDelay={1000}
                marqueeResetDelay={1000}
                style={styles.textNameAlbum}
              >
                {this.lowerCaseAllWordsExceptFirstLetters(item.name)}
              </MarqueeText>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    );
  }
}

// make this component available to the app

Artiste.navigationOptions = ({ navigation }) => ({
  title: "Albums populaires",
  headerStyle: {
    backgroundColor: "black",
    borderBottomWidth: 0
  },
  headerTintColor: "white",
  headerLeft: (
    <TouchableOpacity title="<" onPress={() => navigation.goBack()}>
      <View style={styles.buttonWebAppLeft}>
        <BackArrow color="#fff" />
      </View>
    </TouchableOpacity>
  )
});
