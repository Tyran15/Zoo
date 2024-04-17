import React, { useState, useEffect } from 'react';
import { Text, ImageBackground, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../src/style';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const navigation = useNavigation();

    useEffect(() => {
        checkAsyncStorage();
        
    }, []);

    const checkAsyncStorage = async () => {
        try {
            const userId = await AsyncStorage.getItem('user_id');
            const isLogin = await AsyncStorage.getItem('isLogin');

            if (userId !== null && isLogin !== null) {
                // Existem informações salvas, navegue para a próxima tela
                navigation.navigate('Home');
            }
        } catch (error) {
            console.log('Erro ao verificar AsyncStorage:', error.message);
            // Lidar com o erro conforme necessário
        }
    };

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

    const saveSessionInfo = async (id, name, email, isLogin) => {
        try {
            await AsyncStorage.setItem('user_id', id.toString());
            await AsyncStorage.setItem('user_name', name);
            await AsyncStorage.setItem('user_email', email);
            await AsyncStorage.setItem('isLogin', JSON.stringify(isLogin));
            console.log('Informações de sessão salvas com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar informações de sessão:', error);
        }
    };

    const submitChange = async () => {
        try {
            const response = await axios.post("http://localhost/bdetec/userCheckCredentials", formData, axiosConfig);
            const data = response.data;
            saveSessionInfo(data.id, data.nome, data.email, true);
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
