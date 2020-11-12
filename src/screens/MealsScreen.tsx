import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, StatusBar, TextInput } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import MealItem from '../components/MealItem';
import { toMeal } from '../utils';
import EmptyListPlaceholder from '../components/EmptyListPlaceholder';
import { Meal } from '../types/types';

const MealsScreen = (props: any) => {
  const [query, setquery] = useState<string>('')
  const [meals, setmeals] = useState<Meal[]>([])

  useEffect(() => {
    onPressSearch()
  }, [query])

  const onPressSearch = async () => {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    setmeals(res.data.meals.map((item: any) => toMeal(item)))
  }


  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <SearchBar
          placeholder="Recherche..."
          value={query}
          onChangeText={setquery}
          onKeyPress={onPressSearch}
          showLoading={query == "" ? false : true}
        />
        {/* onPressSearch */}
        <View style={styles.searchButton}>
          <Text style={styles.searchButtonText}>{`Résultat(s) : ${meals.length}`}</Text>
        </View>
        <FlatList
          data={meals}
          contentContainerStyle={styles.flatlist}
          ListEmptyComponent={<EmptyListPlaceholder />}
          keyExtractor={(item) => JSON.stringify(item)}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => props.navigation.navigate("MealDetail", { meal: item })}>
                <MealItem meal={item} />
              </TouchableOpacity>
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
    backgroundColor: '#fff',
  },
  flatlist: {
    alignItems: "center"
  }
});

export default MealsScreen