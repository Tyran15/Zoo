import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Cadastro from '../screens/cadastro';
import Login from '../screens/login';
import Zona1 from '../screens/zonas/zona1'
import Zona2 from '../screens/zonas/zona2';
import Zona3 from '../screens/zonas/zona3';
import Zona4 from '../screens/zonas/zona4';
import Zona5 from '../screens/zonas/zona5';
import Zona6 from '../screens/zonas/zona6';
import Zona7 from '../screens/zonas/zona7';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Zona1" component={Zona1} />   
      <Stack.Screen name="Zona2" component={Zona2} />   
      <Stack.Screen name="Zona3" component={Zona3} />   
      <Stack.Screen name="Zona4" component={Zona4} />   
      <Stack.Screen name="Zona5" component={Zona5} />   
      <Stack.Screen name="Zona6" component={Zona6} />   
      <Stack.Screen name="Zona7" component={Zona7} />   
    </Stack.Navigator>
  );
}
 