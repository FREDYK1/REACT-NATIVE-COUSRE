import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import pokemonList from './data.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.ScrollView}>
      {
        pokemonList.map(pokemon => {
          return (
            <View style={styles.card} key={pokemon.id}>
              <Text style={ styles.text }>{pokemon.type}</Text>
              <Text>{pokemon.name}</Text>
            </View>
          );
        })
      }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  ScrollView: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
  },
  text: {
    fontSize: 30,
  },
});
