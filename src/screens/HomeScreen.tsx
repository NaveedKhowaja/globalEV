import { View, StyleSheet } from 'react-native';
import React from 'react';
import Searchbar from '../components/Searchbar';
import PagerViewContainer from '../components/PagerViewContainer';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Searchbar />
      <PagerViewContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
  },
});

export default HomeScreen;
