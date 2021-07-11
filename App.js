import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard} from 'react-native';


import { useRef, useState, useEffect } from "react";
import Tasks from './components/List';
import {Colors} from './components/Colors'

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskitems] = useState([]);

  //app.js additem from class
  const handlerAddTask = () =>{
    //console.log(task);
    Keyboard.dismiss();
    setTaskitems([...taskItems,task]);
    setTask(null);
  }

  const handlerDeleteTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskitems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.titleSection}>My Tasks</Text>
        <View style={styles.itemsSection}>
          {
            taskItems.map((item , index)=>{
              return (
                <TouchableOpacity
                key={index}
                onPress={()=>handlerDeleteTask(index)}>
                  <Tasks text={item}/>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} 
        placeholder="Write a task"
        value={task}
        onChangeText={text => setTask(text)}
        clearButtonMode="always" //does not work
        />
        <TouchableOpacity onPress={() => handlerAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

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
