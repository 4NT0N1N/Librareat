import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

type Props = {
}

const EmptyListPlaceholder: React.FC<Props> = ({  }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.placeholder}>Search for a book ...</Text>
		</View>

	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 400,
		display: "flex",
		justifyContent: 'center',
		alignItems: 'center'
	},
	placeholder: {
		fontSize: 22,
		color: "#CECECE"
	},
});

export default EmptyListPlaceholder