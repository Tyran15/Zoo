import React, { useEffect, useState } from 'react';
import { StatusBar, ImageBackground, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../src/stylehome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const data = [
    { id: '1', imageUrl: require('../assets/img/Africa.jpg'), title: 'Africa' },
    { id: '2', imageUrl: require('../assets/img/America.jpg'), title: 'America' },
    { id: '3', imageUrl: require('../assets/img/Artic.jpg'), title: 'Artico' },
    { id: '4', imageUrl: require('../assets/img/Asia.jpg'), title: 'Asia' },
    { id: '5', imageUrl: require('../assets/img/Jurassic.jpg'), title: 'Jurássico' },
    { id: '6', imageUrl: require('../assets/img/Oceania.png'), title: 'Oceania' },
    { id: '7', imageUrl: require('../assets/img/Oceano.jpg'), title: 'Oceano' },
  ];

  const removeItemFromStorage = async () => {
    try {
      await AsyncStorage.removeItem('user_id');
      await AsyncStorage.removeItem('user_name');
      await AsyncStorage.removeItem('user_email');
      await AsyncStorage.removeItem('isLogin');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao remover item do AsyncStorage:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.textContainer}>
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <Image
          source={item.imageUrl}
          style={{ width: 325, height: 325 }}
          resizeMode="contain"
        />
        <Text>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  const handleItemPress = (item) => {
    // Implemente a ação que deseja realizar quando um item for pressionado
    console.log('Item pressionado:', item.title);
  };

  return (
    <ImageBackground source={require('../assets/splash.jpg')} blurRadius={8} style={styles.imageBackground}>
      <TouchableOpacity onPress={removeItemFromStorage}>
        <Image source={require('../assets/img/tittle.png')} resizeMode="contain" style={styles.titleImage} />
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
