import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { WINDOW_WIDTH } from '../constants';
import { Cocktail } from '../types/types';

type Props = {
    cocktail: Cocktail
}

const CocktailItem: React.FC<Props> = ({ cocktail }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: cocktail.strDrinkThumb + "/preview" }} style={styles.image} resizeMode='cover' />
            </View>
            <View style={styles.infosContainer}>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{cocktail.strDrink}</Text>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 200,
        borderRadius: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
        shadowRadius: 16.00,
        // Shadow Android
        elevation: 24,
    },
    imageContainer: {
        height: "75%",
        width: "100%",
        justifyContent: "center",
        alignItems: 'center',
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
    },
    image: {
        height: "100%",
        width: "100%",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    infosContainer: {
        backgroundColor: "#484f54",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "25%",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: "#fff",
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

export default CocktailItem