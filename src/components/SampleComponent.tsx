import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

type Props = {
	title: string
}

const SampleComponent: React.FC<Props> = ({ title }) => {
	return (
		<>
			<Text style={styles.title}>{title}</Text>
		</>

	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 22
	},
});

export default SampleComponent