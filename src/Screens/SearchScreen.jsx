import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import yelp from '../api/YelpAPI';

import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
