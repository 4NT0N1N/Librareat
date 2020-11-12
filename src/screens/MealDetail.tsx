import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, StatusBar, TextInput, Image } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
import MealItem from '../components/MealItem';
import { toMeal } from '../utils';
import EmptyListPlaceholder from '../components/EmptyListPlaceholder';
import { Meal } from '../types/types';

const MealDetail = (props: any) => {
    const { meal } = props.route.params
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: meal.strMealThumb + "/preview" }} style={styles.image} resizeMode='cover' />
                </View>
                <View style={styles.underContainer}>

                </View>
                <Text style={styles.title}>
                    {"name"}
                </Text>
                <Text style={styles.desc}>
                    {"description"}
                </Text>
                <FlatList
                    data={[]}
                    contentContainerStyle={styles.flatlist}
                    ListEmptyComponent={<EmptyListPlaceholder />}
                    keyExtractor={(item) => JSON.stringify(item)}
                    renderItem={({ item }) => {
                        return (
                            <Text style={styles.item}>
                                {`- ${item}`}
                            </Text>
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
        backgroundColor: "#9ab065",
        width: "100%"
    },
    desc: {
        fontSize: 20,
        textAlign: "justify"
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
        backgroundColor: '#fff',
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
        borderBottomColor: "#000",
        borderBottomWidth: 1,
    },
    image: {
        height: "100%",
        width: "100%",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    underContainer: {
        height: "70%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default MealDetail