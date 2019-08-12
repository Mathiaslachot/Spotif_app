/** @format */

// import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  InteractionManager,
} from "react-native";
import { ListItem } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import SearchName from "./SearchName";
import querystring from "query-string";
import apiConf from "../../api.config";
import ErrorMessage from "../../components/ErrorMessage";
import UndefinedMessage from "../../components/UndefinedMessage";
import RenderEmpty from "../../components/RenderEmpty";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      dataSource: null,
      isError: false,
      nameArtiste: ""
    };
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.props.navigation.setParams({ goToProfile: this.goToProfile });
    });
  }

  downloadArtiste = async nameArtiste => {
    try {
      const url = apiConf.host + apiConf.endpoints.search;

      const artiste = querystring.stringify({
        name: nameArtiste
      });

      const response = await fetch(url + "?" + artiste, {
        method: "GET"
      });

      const data = await response.json();
      this.setState({ dataSource: data, isLoading: true });

      return Promise.resolve();
    } catch (error) {
      this.setState({ isError: true });
      return Promise.reject();
    }
  };

  _goToArtist = infoArtiste => {
    const { navigation } = this.props;

    navigation.navigate("Artiste", {
      artiste: {
        id: infoArtiste.id,
        name: infoArtiste.name,
        picture: infoArtiste.images != 0 ? infoArtiste.images[0].url : null
      }
    });
  };

  goToProfile = () => {
    const { navigation } = this.props;
    navigation.navigate('Profile');
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        this._goToArtist(item);
      }}
    >
      <ListItem
        roundAvatar
        chevron={{ size: 25, color: "grey" }}
        containerStyle={styles.containerListItem}
        title={
          <View style={styles.viewButton}>
              <View>
                {item.images != 0 && (
                  <Image
                    resizeMode="stretch"
                    style={styles.imageButton}
                    source={{ uri: item.images[0].url }}
                  />
                )}
              </View>
              <View style={styles.viewTextButton}>
                <Text style={styles.name} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.subtitle}>
                  Followers : {item.followers.total}
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
    const { dataSource, isLoading, isError, nameArtiste } = this.state;

    if (isError) {
      return <ErrorMessage />;
    }
    if (dataSource === undefined) {
      return <UndefinedMessage />;
    }

    return (
      <View style={styles.container}>
        <View style={styles.viewSearchName}>
          <SearchName
            nameArtiste={nameArtiste}
            downloadArtiste={this.downloadArtiste}
            onChangeText={nameArtiste => this.setState({ nameArtiste })}
          />
        </View>
        {isLoading && (
          <View style={styles.viewFlatList}>
            <FlatList
              data={dataSource.sort(
                (a, b) => b.followers.total - a.followers.total
              )}
              style={styles.containerFlatList}
              bounces={false}
              renderItem={this.renderItem}
              keyExtractor={item => "" + item.id}
              ListEmptyComponent={this.renderEmpty}
            />
          </View>
        )}
      </View>
    );
  }
}

// make this component available to the app

Search.navigationOptions = ({ navigation }) => {
  const goToProfile = navigation.getParam('goToProfile', this.goToProfile);

  return {
    headerStyle: {
      backgroundColor: "black",
      borderBottomWidth: 0
    },
    headerTintColor: "#fff",
    headerLeft: (
      <TouchableOpacity title="<" onPress={() => goToProfile()}>
        <View style={styles.buttonWebAppLeft}>
          <Ionicons size={30} name="ios-contact" color="white" />
        </View>
      </TouchableOpacity>
    )
  };
};
