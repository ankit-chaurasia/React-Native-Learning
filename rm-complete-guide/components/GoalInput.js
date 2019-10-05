import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = ({ onAddGoal, onCancelGoal, visible }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => setEnteredGoal(enteredText);

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Course Goal' style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='CANCEL' color={'red'} onPress={onCancelGoal} />
          </View>
          <View style={styles.button}>
            <Button title='ADD' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' },
  input: { borderBottomColor: 'black', borderWidth: 1, padding: 10, width: '80%', marginBottom: 10 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', width: '60%' },
  button: { width: '40%' },
});

export default GoalInput;
