import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import CreateToDo from './components/CreateToDo';
import Todo from './components/Todo';

export default function App() {
  const [toDos, setToDos] = useState([])
  const [toDoContent, setToDoContent] = useState('');

  const handleAddToDo = () => {
    setToDos(prev => [...prev, { id: prev.length + 1, text: toDoContent }]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainApp}>
        <Text style={styles.heading}>Hero To do App</Text>
        <View style={styles.toDo}>
          <Text>Here to do options</Text>
          {
            toDos.map((todo, index) => <Todo
              key={index}
              id={todo.id}
              number={index + 1}
              text={todo.text}></Todo>)
          }
        </View>
      </View>
      <View>
        <CreateToDo
          setToDoContent={setToDoContent}
          toDoContent={toDoContent}
          handleAddToDo={handleAddToDo}></CreateToDo>
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
