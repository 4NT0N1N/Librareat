import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons/Icon';
import CocktailItem from '../components/CocktailItem';
import { Cocktail } from '../types/types';
import EmptyListPlaceholder from '../components/EmptyListPlaceholder';
import { toCocktail } from '../utils'

const CocktailsScreen = () => {

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
                <Text style={styles.title}>Librar'Eat</Text>
                <Input
                    placeholder="Recherche..."
                    value={query}
                    onChangeText={setquery}
                    style={styles.searchInput}
                    leftIcon={
                        <Icon
                            name='search'
                            size={24}
                            color='black'
                        />
                    }
                />
                <TouchableOpacity style={styles.searchButton} onPress={onPressSearch}>
                    <Text style={styles.searchButtonText}>Recherche</Text>
                </TouchableOpacity>
                <FlatList
                    data={cocktails}
                    ListEmptyComponent={<EmptyListPlaceholder />}
                    keyExtractor={(item) => JSON.stringify(item)}
                    renderItem={({ item }) => {
                        return (
                            <CocktailItem
                                cocktail={item}
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

export default CocktailsScreen