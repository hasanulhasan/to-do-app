import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Todo from './components/Todo';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mainApp}>
        <Text style={styles.heading}>Hero To do App</Text>
        <View style={styles.toDo}>
          <Text>Here to do options</Text>
          <Todo></Todo>
          <Todo></Todo>
          <Todo></Todo>
        </View>
      </View>
      <StatusBar style='auto'></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  mainApp: {
    paddingTop: 50,
    paddingHorizontal: 20
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10
  },
  toDo: {

  }
});
