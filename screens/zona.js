export default function Zona() {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetchZonaData();
    }, []);
  
    const fetchZonaData = async () => {
      try {
        const id = await AsyncStorage.getItem('id');
        // Simular uma requisição para obter dados da zona com base no ID
        // Aqui você deve fazer uma requisição real para o seu servidor
        const zonaData = [
          { id: "1", imageUrl: require("../assets/img/Africa.jpg"), title: "Detalhes da Zona 1 - Africa" },
          { id: "2", imageUrl: require("../assets/img/America.jpg"), title: "Detalhes da Zona 2 - America" },
          { id: "3", imageUrl: require("../assets/img/Artic.jpg"), title: "Detalhes da Zona 3 - Artico" },
          { id: "4", imageUrl: require("../assets/img/Asia.jpg"), title: "Detalhes da Zona 4 - Asia" },
          { id: "5", imageUrl: require("../assets/img/Jurassic.jpg"), title: "Detalhes da Zona 5 - Jurássico" },
          { id: "6", imageUrl: require("../assets/img/Oceania.png"), title: "Detalhes da Zona 6 - Oceania" },
          { id: "7", imageUrl: require("../assets/img/Oceano.jpg"), title: "Detalhes da Zona 7 - Oceano" },
        ];
        setData(zonaData);
      } catch (error) {
        console.error('Erro ao buscar dados da zona:', error);
      }
    };
  
    const renderItem = ({ item }) => (
      <View style={styles.textContainer}>
        <Image
          source={item.imageUrl}
          style={{ width: 325, height: 325 }}
          resizeMode="contain"
        />
        <Text>{item.title}</Text>
      </View>
    );
  
    return (
      <ImageBackground
        source={require("../assets/img/fundo-2.png")}
        blurRadius={8}
        style={styles.imageBackground}
      >
        <ScrollView>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </ImageBackground>
    );
  }