import React from 'react';
import { StatusBar, ImageBackground, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../src/stylehome';

export default function Home() {
  const handleImagePress = () => {
    // Ação a ser executada quando a imagem for clicada
    console.log('Imagem clicada!');
  };

  return (
    <ImageBackground source={require('../assets/splash.jpg')} blurRadius={8} style={styles.imageBackground}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <TouchableOpacity onPress={handleImagePress}>
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
