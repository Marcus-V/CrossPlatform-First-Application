import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard} from 'react-native';

import {Task} from "./components/Task";
import {Colors} from './components/Colors';

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.titleSection}>Title</Text>
      </View>
      <View style={style.itemsSection}></View>
      
    </View>

    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bone,
  },
  wrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  titleSection:{
    fontSize:24,
    fontWeight:'bold',
  },
  itemsSection:{
    marginTop:30,
  },
  writeTaskWrapper:{
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: Colors.macaroniAndCheese,
    borderRadius:60,
    borderColor: Colors.cyberGrape,
    borderWidth: 1,
    width: 250,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor: Colors.palePink,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.vermilion,
    borderWidth: 1,
  },
  addText:{},
});
