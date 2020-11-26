import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Cocktail, Meal } from '../types/types';
import { toCocktail, toMeal } from '../utils'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../constants';
import CocktailItem from '../components/CocktailItem';
import MealItem from '../components/MealItem';

const RandomScreen = (props: any) => {
    const [cocktail, setCocktail] = useState<Cocktail>()
    const [meal, setMeal] = useState<Meal>()

    useEffect(() => {
        _getRandomMealAndCocktail()
    }, [])

    const _getRandomMealAndCocktail = async () => {
        const randomMeal = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
        setMeal(randomMeal.data.meals.map((item: any) => toMeal(item))[0])
        const randomCocktail = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        setCocktail(randomCocktail.data.drinks.map((item: any) => toCocktail(item))[0])
    }

    return (
        <View style={styles.container}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderTopColor: "#000", borderTopWidth: 1 }}>
                {
                    meal != undefined ?
                        <View>
                            <Text style={styles.searchButtonText}>Plat</Text>
                            <TouchableOpacity onPress={() => props.navigation.navigate("MealDetail", { meal: meal })}>
                                <MealItem meal={meal} />
                            </TouchableOpacity>
                        </View>
                        : null
                }
                {
                    cocktail != undefined ?
                        <View>
                            <Text style={styles.searchButtonText}>Cocktail</Text>
                            <TouchableOpacity onPress={() => props.navigation.navigate("CocktailDetail", { cocktail: cocktail })}>
                                <CocktailItem cocktail={cocktail} />
                            </TouchableOpacity>
                        </View>
                        : null
                }
            </View>
            <TouchableOpacity style={styles.searchButton} onPress={() => _getRandomMealAndCocktail()}>
                <Text style={styles.searchButtonText}>Plat et cocktail aléatoires</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    searchButton: {
        width: WINDOW_WIDTH * 0.8,
        alignSelf: 'center',
        padding: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#000',
        borderRadius: 10,
        marginBottom: WINDOW_HEIGHT * 0.02
    },
    searchButtonText: {
        fontSize: WINDOW_WIDTH * 0.06,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff'
    },
    container: {
        flex: 1,
        backgroundColor: "#393e42"
    }
})

export default RandomScreen