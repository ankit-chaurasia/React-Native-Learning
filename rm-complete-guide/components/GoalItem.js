import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ id, title, onDelete }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onDelete.bind(this, id)}>
      <View style={styles.listItems}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: { padding: 10, marginVertical: 10, backgroundColor: '#ccc', borderColor: '#000', borderWidth: 1 },
});

export default GoalItem;
