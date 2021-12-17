import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './components/HomeScreen';
import FinderScreen from './components/FinderScreen';
import DogDetailsScreen from './components/DogDetailsScreen';

const Tab = createBottomTabNavigator();
const DetailsStack = createNativeStackNavigator();

function DetailStackScreen() {
  return (
    <DetailsStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <DetailsStack.Screen name="Home" component={HomeScreen} />
      <DetailsStack.Screen name="DogDetails" component={DogDetailsScreen} />
    </DetailsStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'rgb(0, 60, 52)',
          headerStyle: {
            shadowColor: '#000',
          },
        }}>
        <Tab.Screen
          name="Dog BF"
          component={DetailStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={focused ? "rgb(0, 60, 52)" : color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Finder"
          component={FinderScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name="image-search"
                color={focused ? "rgb(0, 60, 52)" : color}
                size={size} />
            ),
            tabBarButton: props => <TouchableOpacity {...props} />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
