import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const Task = (props) =>{
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.itemDone}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.itemDelete}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:"fff",
        padding: 15,
        borderRadius: 10,
    },
    itemLeft:{},
    itemText:{},
    itemDone:{},
    itemDelete:{},
});

export default Task;