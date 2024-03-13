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
})