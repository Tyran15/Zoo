import React, { useEffect, useState } from 'react';
import { StatusBar, ImageBackground, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../src/stylehome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const [userNome, setUserNome] = useState("");

  useEffect(() => {
    fetchUserNome();
  }, []);

  const fetchUserNome = async () => {
    try {
      const nome = await AsyncStorage.getItem('user_name');
      if (nome !== null) {
        setUserNome(nome);
      }
    } catch (error) {
      console.error('Erro ao obter nome do usuário do AsyncStorage:', error);
    }
  };

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

  const handleImagePress = () => {
    // Ação a ser executada quando a imagem for clicada
    console.log('Imagem clicada!');
  };

  return (
    <ImageBackground source={require('../assets/splash.jpg')} blurRadius={8} style={styles.imageBackground}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity onPress={removeItemFromStorage}>
          <Image source={require('../assets/img/tittle.png')} resizeMode="contain" style={styles.titleImage} />
        </TouchableOpacity>
        <View style={styles.textContainer}>
        <Text style={styles.text}>
            Bem-vindos ao nosso zoológico, um lugar onde você pode embarcar em uma jornada emocionante através das regiões mais fascinantes do nosso planeta! Aqui, convidamos você a explorar e descobrir a diversidade incrível da vida selvagem, representando cada canto do mundo. Em nosso zoológico, cada área oferece uma visão única e emocionante da vida selvagem, destacando a importância da conservação e do respeito pela natureza em todas as partes do mundo. Prepare-se para uma jornada inesquecível enquanto mergulha na beleza e na diversidade do nosso planeta!
          </Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
