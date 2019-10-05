import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => setEnteredGoal(enteredText);

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Course Goal' style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
        <Button title='ADD' onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map((goal) => (
          <View style={styles.listItems} key={goal}>
            <Text>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  input: { borderBottomColor: 'black', borderWidth: 1, padding: 10, width: '80%' },
  listItems: { padding: 10, marginVertical: 10, backgroundColor: '#ccc', borderColor: '#000', borderWidth: 1 },
});
