import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableHighlight,
  ImageBackground,
  Image,
  Linking,
  Alert,
} from 'react-native';

export default function App() {
  const handlePress = () =>Linking.openURL('https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)'); console.log("Text Pressed");
  console.log("App executed");

  return (
    <ImageBackground
      source={require('../assets/heart02.jpg')}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.textStyle1} >Heart <Text style={styles.textStyle2}>Disease Detection App</Text></Text>
          <Text style={styles.textStyle2} onPress={handlePress}>View more about CVD</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title='Login'
            onPress={() => Alert.alert("Login to Continue", "Do you want to continue", [
              {text: "OK", onPress: () => console.log("Yes")},
              {text: "Cancel", onPress: () => console.log("No")},
            ])}
            style={styles.button}
          />
          <Button
            title='Register'
            onPress={() => Alert.alert("Dont have an account ?", "Register now !", [
              {text: "Register", onPress: () => console.log("Yes")},
              {text: "Cancel", onPress: () => console.log("No")},
            ])}
            style={styles.button}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start'
    
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
  textStyle1:{
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    top:120,
    left :42,
    position: 'absolute',
    textAlign: 'center',
  },
  textStyle2:{
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    top:600,
    left:20,
    position: 'absolute',
    textAlign: 'center',

  }

});
