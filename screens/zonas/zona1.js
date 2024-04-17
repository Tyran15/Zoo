import React, { useState, useEffect } from "react";
import {
    StatusBar,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal,
    StyleSheet
} from "react-native";
import { styles } from "../../src/stylehome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function Zona1() {
    const navigation = useNavigation();
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        // Função para recuperar os dados do AsyncStorage
        const fetchUserData = async () => {
            try {
                // Recuperar os dados do AsyncStorage
                const userId = await AsyncStorage.getItem("user_id");
                const userName = await AsyncStorage.getItem("user_name");
                const userEmail = await AsyncStorage.getItem("user_email");

                // Atualizar o estado com os dados recuperados
                setUserData({ id: userId, name: userName, email: userEmail });
            } catch (error) {
                console.error("Erro ao recuperar dados do AsyncStorage:", error);
            }
        };

        // Chamar a função de busca quando o componente for montado
        fetchUserData();
    }, []);
    const [modalVisible, setModalVisible] = useState(false); // Inicializado como false para que o modal não seja exibido no início
    const removeItemFromStorage = async () => {
        try {
            await AsyncStorage.removeItem("user_id");
            await AsyncStorage.removeItem("user_name");
            await AsyncStorage.removeItem("user_email");
            await AsyncStorage.removeItem("isLogin");
            setModalVisible(false);
            navigation.navigate("Login");
        } catch (error) {
            console.error("Erro ao remover item do AsyncStorage:", error);
        }
    };

    return (
        <View style={styles.container}>
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
            </ScrollView>
            <View style={styles.bottomBar}>
                <Image style={styles.logo} resizeMode="contain" source={require('../../assets/img/tittle.png')} />
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Image style={styles.perfil} resizeMode="contain" source={require('../../assets/img/perfil.png')} />
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Configuração de Perfil</Text>
                        <Image style={styles.perfil} resizeMode="contain" source={require('../../assets/img/perfil.png')} />
                        <Text style={styles.modalText}>{userData?.name ?? 'Nome não encontrado'} {userData?.id ?? 'ID não encontrado'}#</Text>
                        <TouchableOpacity
                            style={styles.openButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.textStyle}>Editar nome</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.openButton}
                            onPress={() => removeItemFromStorage()}
                        >
                            <Text style={styles.textStyle}>Sair da conta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.openButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.textStyle}>Fechar modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

