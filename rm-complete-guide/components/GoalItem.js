import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = ({title}) => {
  return (
    <View style={styles.listItems}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    listItems: { padding: 10, marginVertical: 10, backgroundColor: '#ccc', borderColor: '#000', borderWidth: 1 },
})

export default GoalItem;
