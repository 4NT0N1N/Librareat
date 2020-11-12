import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import CocktailItem from '../components/CocktailItem';
import { Cocktail } from '../types/types';
import EmptyListPlaceholder from '../components/EmptyListPlaceholder';
import { toCocktail } from '../utils'

const CocktailsScreen = (props: any) => {

    const [query, setquery] = useState<string>('')
    const [cocktails, setcocktails] = useState<Cocktail[]>([])

    useEffect(() => {
        onPressSearch()
    }, [query])

    const onPressSearch = async () => {
        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
        setcocktails(res.data.drinks.map((item: any) => toCocktail(item)))
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
                <View style={styles.searchButton}>
                    <Text style={styles.searchButtonText}>{`Résultat(s) : ${cocktails.length}`}</Text>
                </View>
                <FlatList
                    data={cocktails}
                    ListEmptyComponent={<EmptyListPlaceholder />}
                    contentContainerStyle={styles.flatlist}
                    keyExtractor={(item) => JSON.stringify(item)}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => props.navigation.navigate("CocktailDetail", { cocktail: item })}>
                                <CocktailItem cocktail={item} />
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
        backgroundColor: '#d8bf18'
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

export default CocktailsScreen