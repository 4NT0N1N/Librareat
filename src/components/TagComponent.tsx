import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { WINDOW_WIDTH } from '../constants';
import { Tag } from '../types/types';


type Props = {
    item: Tag
}

const TagComponent: React.FC<Props> = ({ item }) => {
    return (
        <View style={styles.container}>
            <FontAwesome name="tag" size={WINDOW_WIDTH * 0.035} color="#fff" />
            <Text style={styles.text}>
                {item.value}
            </Text>
        </View>
        

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    text: {
        textAlign: 'center',
        color: "#fff",
        fontSize: WINDOW_WIDTH * 0.035
    }
});

export default TagComponent