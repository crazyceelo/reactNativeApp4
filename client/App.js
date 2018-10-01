import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";

// components
import LoginForm from "./src/components/LoginForm";

// router component
import Router from "./src/router";

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
    // second argument is for any initial state
    // last argument is a store enhancer
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router />
          {/* <LoginForm /> */}
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
