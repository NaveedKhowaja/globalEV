import { StyleSheet, TextInput } from 'react-native';
import React from 'react';

const Searchbar = () => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Enter you location"
      placeholderTextColor={'black'}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 44,
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: 8,
    marginHorizontal: 16,
  },
});

export default Searchbar;
