import { StatusBar } from 'expo-status-bar';
import { Text, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../src/style';

export default function Cadastro() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/splash.jpg')} blurRadius={8} style={styles.container}>
      <Image source={require('../assets/img/tittle.png')} resizeMode="contain" style={styles.img} />
      <Text style={styles.text}>Cadastro</Text>
      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" />
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.textLink}>Já tem uma conta? faça login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}