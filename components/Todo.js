import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Todo(props) {
  const { text, number } = props;
  return (
    <View style={styles.toDoElement}>
      <View style={styles.toDoNumber}>
        <View style={styles.order}>
          <Text style={styles.textColor}>{number}</Text>
        </View>
        <Text style={styles.mainText}>{text}</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.removeBtn}>Remove</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  toDoElement: {
    backgroundColor: "#f7f7f7",
    padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10

  },
  toDoNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  order: {
    width: 25,
    height: 25,
    backgroundColor: '#9b59b6',
    opacity: 0.7,
    borderRadius: 5,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textColor: {
    color: '#fff'
  },
  mainText: {
    maxWidth: "88%"
  },
  removeBtn: {
    backgroundColor: '#9b59b6',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#fff'
  }
});