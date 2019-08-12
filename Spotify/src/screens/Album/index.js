/** @format */

// import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { ListItem } from "react-native-elements";
import styles from "./styles";
import BackArrow from "../../../assets/back-arrow";
import MarqueeText from "react-native-marquee";
import querystring from "query-string";
import apiConf from "../../api.config";
import ErrorMessage from "../../components/ErrorMessage";
import UndefinedMessage from "../../components/UndefinedMessage";
import WaitingMessage from "../../components/WaitingMessage";
import RenderEmpty from "../../components/RenderEmpty";

const noImage = "https://www.nocowboys.co.nz/images/v3/no-image-available.png";

export default class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      isError: false,
      album: this.props.navigation.state.params.album
    };
  }

  componentDidMount() {
    this.downloadAlbum();
  }

  downloadAlbum = async () => {
    const { album } = this.state;

    try {
      const url = apiConf.host + apiConf.endpoints.album;

      const albumId = querystring.stringify({
        id: album.id
      });

      const response = await fetch(url + "?" + albumId, {
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

  msToMinSeconde = millis => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.7}>
      <ListItem
        roundAvatar
        containerStyle={styles.containerListItem}
        title={
          <View style={styles.viewButton}>
            <View style={styles.viewTextButton}>
              <MarqueeText
                duration={2000}
                marqueeOnStart
                loop
                marqueeDelay={1000}
                marqueeResetDelay={1000}
                style={styles.name}
              >
                {item.name}
              </MarqueeText>
              <Text style={styles.nameArtist} numberOfLines={1}>
                {item.artists[0].name}
              </Text>
            </View>

            <View style={styles.viewTime}>
              <Text style={styles.time} numberOfLines={1}>
                {this.msToMinSeconde(item.duration_ms)}
              </Text>
            </View>
          </View>
        }
      />
    </TouchableOpacity>
  );

  renderEmpty = () => {
    return <RenderEmpty />;
  };

  render() {
    const { dataSource, isLoading, isError, album } = this.state;

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
        <ImageBackground
          style={styles.imageZIndex}
          imageStyle={styles.imageOpacity}
          source={{ uri: album.images ? album.images[0].url : noImage }}
        />
        <ScrollView
          style={styles.containerScrollView}
          contentContainerStyle={styles.scollViexContainer}
        >
          <FlatList
            data={dataSource}
            style={styles.containerFlatList}
            bounces={false}
            renderItem={this.renderItem}
            keyExtractor={item => "" + item.id}
            ListEmptyComponent={this.renderEmpty}
          />
        </ScrollView>
      </View>
    );
  }
}

Album.navigationOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: "black",
    borderBottomWidth: 0
  },
  headerLeft: (
    <TouchableOpacity title="<" onPress={() => navigation.goBack()}>
      <View style={styles.buttonWebAppLeft}>
        <BackArrow color="#fff" />
      </View>
    </TouchableOpacity>
  )
});
