import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MealsScreen from './src/screens/MealsScreen';
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import CocktailsScreen from './src/screens/CocktailsScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { StyleSheet, Text } from 'react-native';
import MealDetail from './src/screens/MealDetail';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from './src/constants';
import CocktailDetail from './src/screens/CocktailDetail';
import RandomScreen from './src/screens/RandomScreen';
import CategoryScreen from './src/screens/CategoryScreen';

const MealsStack = createStackNavigator()
function MyMealsStack() {
  return (
    <MealsStack.Navigator headerMode="none">
      <MealsStack.Screen name="Meals" component={MealsScreen} />
      <MealsStack.Screen name="MealDetail" component={MealDetail} />
    </MealsStack.Navigator>
  )
}

const CocktailStack = createStackNavigator()
function MyCocktailStack() {
  return (
    <CocktailStack.Navigator headerMode="none">
      <CocktailStack.Screen name="Cocktails" component={CocktailsScreen} />
      <MealsStack.Screen name="CocktailDetail" component={CocktailDetail} />
    </CocktailStack.Navigator>
  )
}

const TabStack = createMaterialTopTabNavigator()
function MyTabStack() {
  return (

    <TabStack.Navigator initialRouteName="HomeMeals"
      tabBarPosition="bottom"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          switch (route.name) {
            case "HomeMeals":
              return <Ionicons name="md-restaurant-sharp" size={WINDOW_HEIGHT * 0.04} color={focused ? "#9ab065"  : color} />
            case "HomeCocktails":
              return <Entypo name="drink" size={WINDOW_HEIGHT * 0.04} color={focused ? "#d8bf18"  : color} />
            case "Random":
              return <FontAwesome name="random" size={WINDOW_HEIGHT * 0.04} color={focused ? "#000"  : color} />
            default:
              
              break;
          }
        }
      })}
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        activeTintColor: '#9ab065',
        inactiveTintColor: 'rgba(0,0,0,0.3)',
        indicatorStyle: {
          backgroundColor: 'rgba(0,0,0,0.3)'
        },
        tabStyle: {
          height: WINDOW_HEIGHT * 0.07,
          backgroundColor: "#393e42",
          borderTopColor: "#fff",
          borderTopWidth: 1,
        },
        iconStyle: {
          width: WINDOW_WIDTH / 2,
          flex: 1,
          alignItems: 'center',
        }

      }}
    >
      <TabStack.Screen name="HomeMeals" component={MyMealsStack} />
      <TabStack.Screen name="HomeCocktails" component={MyCocktailStack} />
      {/* <TabStack.Screen name="Random" component={RandomScreen} /> */}
      <TabStack.Screen name="Random" component={CategoryScreen} />
    </TabStack.Navigator>
  )
}

export default function App() {


  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#393e42" }}>
        <Text style={styles.title}>Librar'Eat</Text>
        <NavigationContainer>
          <MyTabStack />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  title: {
    fontWeight: '800',
    fontSize: 42,
    padding: 16,
    color: "#FFF",
  },
})