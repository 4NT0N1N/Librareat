import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, StatusBar, TextInput } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import CategroyItem from '../components/CategroyItem';
import { toMeal } from '../utils';
import EmptyListPlaceholder from '../components/EmptyListPlaceholder';
import { Meal } from '../types/types';
import { WINDOW_WIDTH } from '../constants';

const CategoryScreen = (props: any) => {
  const [query, setquery] = useState<string>('')
  const [categories, setCategories] = useState<Meal[]>([])

  const api = async () => {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
    console.log("res data :")
    console.log(res.data)
    setCategories(res.data.meals)
  }

  useEffect(() => {
    api()
  }, []);


  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>

        <FlatList
          data={categories}
          contentContainerStyle={styles.flatlist}
          numColumns={2}
          ListEmptyComponent={<EmptyListPlaceholder />}
          keyExtractor={(item) => JSON.stringify(item)}
          renderItem={({ item }) => {
            return (
              <CategroyItem category={item.strCategory} />
            )
          }}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '800',
    fontSize: 42,
    padding: 16,
  },
  searchInput: {
  },
  searchButton: {
    padding: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#9ab065'
  },
  searchButtonText: {
    fontWeight: '600',
    fontSize: 24,
    color: 'white',
    letterSpacing: 4
  },
  list: {
    padding: 16,
    display: 'flex'
  },
  container: {
    flex: 1,
    backgroundColor: '#393e42',
  },
  flatlist: {
    alignItems: "center",
    justifyContent: "space-around",
  }
});

export default CategoryScreen