import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/search-bar';

const SearchScreen = () => {
  return (
    <View>
      <SearchBar />
      <Text>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
