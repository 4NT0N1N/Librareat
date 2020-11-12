import axios from 'axios';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar} from 'react-native';
import BookItem from '../components/BookItem';
import EmptyListPlaceholder from '../components/EmptyListPlaceholder';

const MainScreen = () => {

  const [query, setquery] = useState<string>('')
  const [books, setbooks] = useState<any[]>([])


  const onPressSearch = async () => {
    if (query === '') {
      setbooks([])
      return
    }
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    setbooks(res.data.items)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView>
        <Text style={styles.title}>Search a Book</Text>
        <TextInput value={query} onChangeText={setquery} style={styles.searchInput} />
        <TouchableOpacity style={styles.searchButton} onPress={onPressSearch}>
          <Text style={styles.searchButtonText}>SEARCH</Text>
        </TouchableOpacity>
        <FlatList
          data={books}
          ListEmptyComponent={<EmptyListPlaceholder />}
          renderItem={({ item, index }) => {
            console.log(item)
            return (
              <BookItem
                thumbnailUrl={item.volumeInfo.imageLinks?.thumbnail}
                title={item.volumeInfo.title}
                description={item.volumeInfo.description}
                author={item.volumeInfo.authors?.map((as: string) => as.replace(/,/g, '')).join(', ')}
              />
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
    fontWeight: '500',
    fontSize: 24,
    padding: 16,
    backgroundColor: '#F6F6F6'
  },
  searchButton: {
    padding: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: '#4630EB'
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
});

export default MainScreen