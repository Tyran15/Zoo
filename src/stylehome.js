import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native-web";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 70,
  },
  img: {
    width: 400,
    height: 175,
  },

  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 40,
    marginBottom: 50,
    padding: 30,
    color: 'black',
    textAlign: 'justify',
  },
  ImageBackground: {
    flex: 1,
    height: 'auto',
    width: 'auto'
  },
  textContainer: {
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 10,
    margin: 20,
    borderWidth: 3,
    borderColor: 'gray',
    borderRadius: 2,
    margin: 20,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 80,
    fontWeight: 'bold',
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
  },
  cards: {
    width: 300,
    height: 66,
    backgroundColor: 'red',
    marginBottom: 20,
  },
  bottomBar: {
    backgroundColor: '#63E1A4',
    width: '100%',
    height: 30,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
  },
  logo: {
    width: 200,
  },
  perfil: {
    width: 150,
    height: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 500,
    width: 300,
    borderWidth: 1
  },
  openButton: {
    backgroundColor: "blue",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 5,
    width: 125
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})