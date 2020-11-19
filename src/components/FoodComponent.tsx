import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { WINDOW_WIDTH } from '../constants';
import { Food } from '../types/types';


type Props = {
    item: Food
}

const FoodComponent: React.FC<Props> = ({ item }) => {
    return (
        <View style={styles.container}>
            <FontAwesome name="angle-right" size={WINDOW_WIDTH * 0.070} color="#fff" />
            <View style={{justifyContent: "space-around", flexWrap:"wrap", flexDirection: "column"}}>
                <Text style={styles.text}>
                    {item.name}
                </Text>
                <Text style={styles.text}>
                    {item.measure}
                </Text>
            </View>
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
        fontSize: WINDOW_WIDTH * 0.035,
        width: "100%"
    }
});

export default FoodComponent