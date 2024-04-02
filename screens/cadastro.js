import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, ImageBackground, Image, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../src/style";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    nome: "",
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
      const response = await axios.post("http://192.168.15.13/bdetec/userInsert",formData, axiosConfig);
      console.log("Cadastro bem-sucedido:", response.data);
      
      navigation.navigate('Login');
    } catch (error) {
      console.error("Ocorreu um erro ao cadastrar:", error);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/splash.jpg")}
      blurRadius={8}
      style={styles.container}
    >
      <Image
        source={require("../assets/img/tittle.png")}
        resizeMode="contain"
        style={styles.img}
      />
      <Text style={styles.text}>Cadastro</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={formData.nome}
          onChangeText={(text) => handleChange("nome", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={formData.senha}
          onChangeText={(text) => handleChange("senha", text)}
          secureTextEntry={true}
        />

        <TouchableOpacity onPress={submitChange} style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.textLink}>Já tem uma conta? Faça login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
