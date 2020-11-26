import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { WINDOW_WIDTH } from '../constants';

// Icon
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Foundation from 'react-native-vector-icons/Foundation'
import Zocial from 'react-native-vector-icons/Zocial'
import { color } from "react-native-reanimated";

type Props = {
    category: string
}

const getIcons = (name:string) => {

    console.log("name")
    console.log(name)

    switch (name) {
      case "Beef":
        return <MaterialCommunityIcons name="food-steak" color="#ec2f3b" size={64} />
      case "Breakfast":
        return <MaterialCommunityIcons name="food-croissant" color="#d18e1a" size={64} />
      case "Chicken":
        return <MaterialCommunityIcons name="food-drumstick" color="#f8a985" size={64} />
      case "Dessert":
        return <MaterialCommunityIcons name="cupcake" color="#ff4d00" size={64} />  
      case "Goat":
        return <MaterialIcons name="goat" color="#eff" size={64} />
      case "Lamb":
        return <MaterialCommunityIcons name="food-steak" color="#f26249" size={64} />
      case "Miscellaneous":
        return <Entypo name="cog" color="#125" size={64} />
      case "Pasta":
        return <Entypo name="bowl" color="#bd8282" size={64} />
      case "Pork":
        return <FontAwesome5 name="piggy-bank" color="#ffd9bf" size={64} />  
      case "Seafood":
        return <FontAwesome5 name="fish" color="#b5d0ea" size={64} />  
      case "Side":
        return <FontAwesome5 name="pizza-slice" color="#dba24a" size={64} />  
      case "Starter":
        return <FontAwesome5 name="poo" color="#000" size={64} />  
      case "Vegan":
        return <FontAwesome5 name="leaf" color="#3A5F0B" size={64} />  
      case "Vegetarian":
        return <FontAwesome5 name="lemon" color="#fff700" size={64} />  
      default:
        break;
    }
  }

const CategroyItem: React.FC<Props> = ({ category }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imageContainer}>
                {getIcons(category)}
            </View>
            <View style={styles.infosContainer}>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{category}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        width: WINDOW_WIDTH * 0.40, 
        height: WINDOW_WIDTH * 0.40,
        margin : 10,
        borderRadius: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#fff",
        marginVertical: 10,
        backgroundColor: "#000",
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

export default CategroyItem