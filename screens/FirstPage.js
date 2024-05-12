import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text, 
  View, 
  TouchableWithoutFeedback , 
  TouchableOpacity,
  TouchableHighlight,
  Image ,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  Dimensions
} from 'react-native';
// import { useDimensions } from '@react-native-community/hooks';

export default function FirstPage() {
  // console.log(Dimensions.get("screen"));
  // console.log(useDimensions())
  
  const handlePress = () => console.log("Text Pressed");
  console.log("App excecuted");


  let x;
  // x.toString();
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground
      source={require('./assets/background.jpg')}
      style={styles.background}
    >
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
        onPress={() => Alert.alert("Register to Continue", "Do you want to continue", [
          {text: "OK", onPress: () => console.log("Yes")},
          {text: "Cancel", onPress: () => console.log("No")},

        ])}
        style={styles.button}
      />

      {/* 
      <Text numberOfLines={1} onPress={handlePress}>Fuck You Bitch !</Text>
      <TouchableHighlight  onPress={() => console.log("Ai obanne")}>
        <Image 
          blurRadius={1}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <Image source={require("./assets/favicon.png")} />
      <StatusBar style="auto" />
      */}

      <View style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        alignContent: 'center'
      }}>
        {/* <View style={{
          backgroundColor: 'red',
          flexBasis: 100,
          height: 100,
        }} />
        <View style={{
          backgroundColor: 'blue',
          width: 100,
          height: 100,
          bottom: 20,
        }} />
        <View style={{
          backgroundColor: 'yellow',
          width: 100,
          height: 100,
        }} /> */}
      </View>
    </SafeAreaView>
  );
}

//     <SafeAreaView style={styles.container}>
//       {<Button
//         title='Click Me'
//         onPress={() => Alert.alert("Hello Traveller", "Welcome to Sri Lanka", [
//           {text: "Yes", onPress: () => console.log("Yes")},
//           {text: "No", onPress: () => console.log("No")},
//           {text: "Maybe", onPress: () => console.log("Maybe")}
//         ])}
//           // onPress={() => Alert.prompt("Hello Traveller", "Welcome to Sri Lanka", (text) => console.log(text))} // Not working in android

//       />
//       // <Text numberOfLines={1} onPress={handlePress}>Fuck You Bitch !</Text>
//       // <TouchableHighlight  onPress={() => console.log("Ai obanne")}>
//       // <Image 
//       // blurRadius={1}
//       // fadeDuration={1000}
//       // source={{
//       //   width: 200,
//       //   height: 300,
//       //   uri: "https://picsum.photos/200/300", }}>
//       //   </Image>
//       // </TouchableHighlight>
//       // <Image source={require("./assets/favicon.png")}></Image>
      
//       // <StatusBar style="auto" />}
//       }View
//         style = {{backgroundColor: "white",
//         // width: "100%",
//         // height: '70%',
//         flex: 1,
//         flexDirection:'row',
//         justifyContent:'center', //main axis ishorizontal axis
//         alignItems:'center',
//         flexWrap:'wrap',
//         alignContent:'center'
//       }}
//       /> 
//       <View 
//         style = {{
//           backgroundColor:'red',
//           flexBasis: 100,
//           flex:-1,
          
//           // width: 100,
//           height: 100,         
//           // flex:1
//         }}
//       />
//       <View 
//         style = {{
//           backgroundColor:'blue',
//           width: 100,
//           height: 100, 
//           bottom: 20,         
//           // flex:1
//         }}
//       />
//       <View 
//         style = {{

//           backgroundColor:'yellow',
//           width: 100,
//           height: 100,          
//           // flex:1
//         }}
//       />
//       {/* < View 
//         style = {{

//           backgroundColor:'black',
//           width: 100,
//           height: 100,          
//           // flex:1
//         }}
//       />
//       <View 
//         style = {{

//           backgroundColor:'indigo',
//           width: 100,
//           height: 100,          
//           // flex:1
//         }}
//       /> */}
//       </View>
//       }
//     </SafeAreaView>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', //Aligns children at the bottom of the screen
    alignItems: 'center', //Aligns children horizontally
    padding: 20,

    //alignItems: 'center',
    //justifyContent: 'center',
  },
  button: {
    alignSelf: 'center', // Centers the button horizontally
    marginTop: 20,
  }
});
