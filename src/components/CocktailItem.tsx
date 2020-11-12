import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cocktail } from '../types/types';

type Props = {
	cocktail: Cocktail
}

const CocktailItem: React.FC<Props> = ({ cocktail }) => {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={{ uri: cocktail.strDrinkThumb + "/preview" }} style={styles.image} resizeMode='contain' />
			</View>
			<View style={styles.infosContainer}>
				<Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{cocktail.strDrink}</Text>
			</View>
		</View>

	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingHorizontal: 16,
		paddingVertical: 16,
		display: "flex",
		flexDirection: "row",
		borderBottomWidth: 2,
		borderBottomColor: "#E9E9E9"

	},
	imageContainer: {
		width: 90,
		display: "flex",
		justifyContent: "center",
		alignItems: 'center'
	},
	image: {
		height: 120,
		aspectRatio: 1,
	},
	infosContainer: {
		flex: 1,
		paddingHorizontal: 16,
	},
	title: {
		fontSize: 18,
		fontWeight: '700',
		color: "#2413A2",
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