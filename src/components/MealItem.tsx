import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { Meal } from '../types/types';

type Props = {
    meal: Meal;
}

const MealItem: React.FC<Props> = ({ meal }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: meal.strMealThumb + "/preview" }} style={styles.image} resizeMode='contain' />
            </View>
            <View style={styles.infosContainer}>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{meal.strMeal}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 200,
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#E9E9E9",
        marginVertical: 10,
        backgroundColor: "#000"
    },
    imageContainer: {
        display: "flex",
        height: "50%",
        width: "100%",
        justifyContent: "center",
        alignItems: 'center'
    },
    image: {
        flex: 1,
        aspectRatio: 1,
    },
    infosContainer: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "40%"
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: "#000",
    },
    author: {
        fontSize: 14,
        fontWeight: '600',
        color: "#747474"
    },
    description: {
        paddingTop: 16,
        fontSize: 14,
        fontWeight: '400',
        color: "#989898"
    }
});

export default MealItem