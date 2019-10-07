import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/colors';
import TitleText from './TitleText';

const Header = ({ title }) => {
  return (
    <View style={{ ...styles.headerBase, ...Platform.select({ ios: styles.headerIOS, android: styles.headerAndroid }) }}>
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIOS: {
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    color: Platform.OS === 'ios' ? Colors.primary : '#fff',
  },
});

export default Header;
