import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/reducers";
import firebase from "firebase";

export default class App extends React.Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyC2LRs2XziR7q6Bky3r_N9fX5y9wsm8gD8",
      authDomain: "manager-480bf.firebaseapp.com",
      databaseURL: "https://manager-480bf.firebaseio.com",
      projectId: "manager-480bf",
      storageBucket: "manager-480bf.appspot.com",
      messagingSenderId: "711857715618"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  }
});
