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
    height: 100,
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
    width: 'auto',
    height: 74,
    justifyContent: 'flex-end'
  },
  logo: {
    width: 200,
    marginTop: 30,
  },
})