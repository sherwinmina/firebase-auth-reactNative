import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

class App extends React.Component {
  componentDidMount () {
    const config = {
      apiKey: "AIzaSyAEkWq8_QIEvBzDulfpA5e6XopVJaacBOk",
      authDomain: "one-time-password-a425c.firebaseapp.com",
      databaseURL: "https://one-time-password-a425c.firebaseio.com",
      projectId: "one-time-password-a425c",
      storageBucket: "one-time-password-a425c.appspot.com",
      messagingSenderId: "638049320769"
    };
    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

Expo.registerRootComponent(App);
