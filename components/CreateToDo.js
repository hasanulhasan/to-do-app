import { View, Text, KeyboardAvoidingView, Platform, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

export default function CreateToDo({ setToDoContent, toDoContent, handleAddToDo }) {
  return (
    <View>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={styles.createBox}>
        <TextInput style={styles.inputBox} value={toDoContent} placeholder='Write here.....' onChangeText={(text) => { setToDoContent(text) }}
        ></TextInput>
        <TouchableOpacity onPress={handleAddToDo}>
          <View style={styles.btn}>
            <Text style={styles.addBtn}>Add</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View >
  )
}

const styles = StyleSheet.create({
  createBox: {
    position: 'absolute',
    bottom: 50,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  inputBox: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#9b59b6',
    borderRadius: 20,
    borderColor: '#C0C0C0',
  },
  addBtn: {

  }
})