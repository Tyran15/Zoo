import React, { useEffect, useState } from "react";
import {
  StatusBar,
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import { styles } from "../src/stylehome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';

export default function Home() {
  const navigation = useNavigation();
  const data = [
    { id: "1", imageUrl: require("../assets/img/Africa.jpg"), title: "Zona 1 - Africa" },
    {
      id: "2",
      imageUrl: require("../assets/img/America.jpg"),
      title: "Zona 2 - America",
    },
    { id: "3", imageUrl: require("../assets/img/Artic.jpg"), title: "Zona 3 - Artico" },
    { id: "4", imageUrl: require("../assets/img/Asia.jpg"), title: "Zona 4 - Asia" },
    {
      id: "5",
      imageUrl: require("../assets/img/Jurassic.jpg"),
      title: "Zona 5 - Jurássico",
    },
    {
      id: "6",
      imageUrl: require("../assets/img/Oceania.png"),
      title: "Zona 6 - Oceania",
    },
    { id: "7", imageUrl: require("../assets/img/Oceano.jpg"), title: "Zona 7 - Oceano" },
  ];

  const removeItemFromStorage = async () => {
    try {
      await AsyncStorage.removeItem("user_id");
      await AsyncStorage.removeItem("user_name");
      await AsyncStorage.removeItem("user_email");
      await AsyncStorage.removeItem("isLogin");
      navigation.navigate("Login");
    } catch (error) {
      console.error("Erro ao remover item do AsyncStorage:", error);
    }
  };

  const handleItemPress = (item) => {
    console.log("Item pressionado:", item.id);
    AsyncStorage.setItem('id', item.id);
    navigation.navigate('zona');
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

  return (
    <ImageBackground
      source={require("../assets/img/fundo-2.png")}
      blurRadius={8}
      style={styles.imageBackground}
    >
      <ScrollView>
        <TouchableOpacity onPress={removeItemFromStorage}>
          <Image
            source={require("../assets/img/tittle.png")}
            resizeMode="contain"
            style={styles.titleImage}
          />
        </TouchableOpacity>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <StatusBar style="auto" />
      </ScrollView>
    </ImageBackground>
  );
}
