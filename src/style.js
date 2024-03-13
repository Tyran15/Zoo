import { StyleSheet } from "react-native";

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
  text: {
    fontSize: 40,
    marginBottom: 50,
  },
  input: {
    width: 240,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: 30,
    paddingLeft: 20,
    fontSize: 20,
  },
  button: {
    backgroundColor: 'white',
    marginTop: 30,
    width: 150,
    height: 40,
    borderRadius: 30,
  },
  buttonText: {
    textAlign: 'center',
    marginTop: 2,
    fontSize: 25
  },
  textLink: {
    fontSize: 20,
    color: '#94b8ff',
    marginTop: 30,
    textDecorationLine: 'underline',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    textShadowColor: 'black'
  }
});