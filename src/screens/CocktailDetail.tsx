import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, StatusBar, TextInput, Image, ScrollView } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import MealItem from '../components/MealItem';
import { toMeal } from '../utils';
import EmptyListPlaceholder from '../components/EmptyListPlaceholder';
import { Meal } from '../types/types';
import Accordion from 'react-native-collapsible/Accordion';
import { WINDOW_WIDTH } from '../constants';

// Tag
import TagComponent from '../components/TagComponent';

// Food
import FoodComponent from '../components/FoodComponent';

const CocktailDetail = (props: any) => {
    const { cocktail } = props.route.params
    const [index, setIndex] = useState<[]>([])

    const sections = [
        {
            title: 'Ingrédients',
            content: cocktail.strIngredients,
        },
        {
            title: 'Recette',
            content: cocktail.strInstructions,
        },
        {
            title: 'Tags',
            content: cocktail.strTags,
        },
        {
            title: 'Catégories',
            content: cocktail.strCategory
        }
    ];

    const measures = cocktail.strMeasures;


    const update = (activeSections: any) => {
        setIndex(activeSections)
    }

    const renderHeader = (section: any) => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}> - {section.title}</Text>
            </View>
        );
    };

    const renderContent = (section: any) => {
        switch (section.title) {
            case "Ingrédients":
                return (
                    <View style={styles.listContainer}>
                        {
                            section.content.map((name: string, index: number) =>
                                <TouchableOpacity style={styles.foodItem}>
                                    <FoodComponent key={name} item={{ name: name, measure: measures[index] }} />
                                </TouchableOpacity>

                            )
                        }
                    </View>
                )
            case "Recette":
                return (
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: "#fff" }}>{section.content}</Text>
                    </View>
                )
            case "Tags":
                return (
                    <View style={styles.listContainer}>
                        {
                            section.content.map((tag: string, index: number) =>
                                <TouchableOpacity style={styles.tagItem} onPress={() => props.navigation.navigate('Cocktails', { tag: tag })}>
                                    <TagComponent key={`${tag}${index}`} item={{ value: tag }} />
                                </TouchableOpacity>

                            )
                        }
                    </View>
                )
            case "Catégories":
                return (
                    <TouchableOpacity style={styles.tagItem} onPress={() => props.navigation.navigate('Meals', { category: section.content })}>
                        <TagComponent item={{ value: section.content }} />
                    </TouchableOpacity>
                )
            default:
                return <View>

                </View>
        }
    };


    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.imageContainer}>
                <Image source={{ uri: cocktail.strDrinkThumb + "/preview" }} style={styles.image} resizeMode='contain' />
            </View>
            <Text style={styles.title}>
                {cocktail.strDrink}
            </Text>
            <ScrollView style={{ width: WINDOW_WIDTH * 0.9, marginVertical: 10 }}>
                <Accordion
                    activeSections={index}
                    sections={sections}
                    renderHeader={renderHeader}
                    renderContent={renderContent}
                    onChange={update}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    recetteTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        marginVertical: 5
    },
    title: {
        fontWeight: '800',
        fontSize: 42,
        padding: 16,
        backgroundColor: "#d8bf18",
        color: "#fff",
        width: "100%",
        textAlign: "center"

    },
    desc: {
        fontSize: 14,
        textAlign: "justify",
        color: "#fff"
    },
    list: {
        padding: 16,
        display: 'flex'
    },
    item: {
        width: "90%",
        borderBottomColor: "#AAA",
        borderBottomWidth: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#393e42',
        alignItems: "center"
    },
    flatlist: {
        alignItems: "center"
    },
    imageContainer: {
        display: "flex",
        height: "30%",
        width: "100%",
        justifyContent: "center",
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        backgroundColor: "#000"
    },
    image: {
        height: "100%",
        width: "100%",
    },
    underContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    header: {
        height: 50,
        borderRadius: 10,
        backgroundColor: "#d8bf18",
        justifyContent: "center",
        alignItems: "flex-start",
        marginVertical: 10
    },
    headerText: {
        color: "#fff",
        fontSize: 30,
        textAlign: "left",
        marginLeft: 10
    },
    content: {
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        color: "#fff"
    },
    listContainer: {
        flexDirection: 'row',
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: 'space-around',
    },
    tagItem: {
        padding: WINDOW_WIDTH * 0.01,
        height: 40,
        width: 150,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#fff",
        marginVertical: 10,
        // Shadow
        shadowColor: "#222",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 5,
        // Shadow Android
        elevation: 24,
    },
    foodItem: {
        padding: WINDOW_WIDTH * 0.01,
        height: 80,
        width: 150,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#fff",
        marginVertical: 10,
        // Shadow
        shadowColor: "#222",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 5,
        // Shadow Android
        elevation: 24,
    }


});

export default CocktailDetail