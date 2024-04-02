import React, { useState } from 'react';
import { Text, ImageBackground, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native'; // Importe useState e StatusBar do React Native
import { useNavigation } from '@react-navigation/native';
import { styles } from '../src/style';
import axios from 'axios';

export default function Login() {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
        email: "",
        senha: "",
    });

    const handleChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const axiosConfig = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

    const submitChange = async () => {
        try {
            const response = await axios.post("http://localhost/bdetec/userCheckCredentials", formData, axiosConfig); // Altere o endpoint e o método de envio conforme necessário
            console.log("Login bem-sucedido:", response.data);
            navigation.navigate('Home');
            } catch (error) {
            console.error("Ocorreu um erro ao fazer login:", error);
        }
    };

    return (
        <ImageBackground source={require('../assets/splash.jpg')} blurRadius={8} style={styles.container}>
            <Image source={require('../assets/img/tittle.png')} resizeMode="contain" style={styles.img} />
            <Text style={styles.text}>Login</Text>
            <TextInput style={styles.input} placeholder="Email" value={formData.email} onChangeText={(text) => handleChange("email", text)} />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} value={formData.senha} onChangeText={(text) => handleChange("senha", text)} />
            <TouchableOpacity onPress={submitChange} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.textLink}>Não tem uma conta? Cadastra-se</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </ImageBackground>
    );
}
