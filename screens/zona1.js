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
import { styles } from "../src/stylehome"; // Certifique-se de que o caminho do arquivo de estilos está correto
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

export default function Zona() {
    const navigation = useNavigation();

    return (
        <View style={styles.ImageBackground}>
            <Text style={styles.title}>Zona 1 - Africa</Text>
            <ScrollView contentContainerStyle={styles.cardContainer}>
                <TouchableOpacity style={styles.cards}>

                </TouchableOpacity>
                <TouchableOpacity style={styles.cards}>

                </TouchableOpacity>
                <TouchableOpacity style={styles.cards}>

                </TouchableOpacity>
                <TouchableOpacity style={styles.cards}>

                </TouchableOpacity>
                <StatusBar style="auto" />
            </ScrollView>
            <View style={styles.bottomBar}>
                <Image style={styles.logo} resizeMode="contain" source={require('../assets/img/tittle.png')} />
            </View>
        </View>
    );
}
