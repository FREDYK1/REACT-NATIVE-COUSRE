import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar,FlatList } from 'react-native';
import pokemonList from './data.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ScrollView}>
      <FlatList 
      data={ pokemonList }
      renderItem={({ item }) => {
        return (
            <View style={styles.card} key={item.id}>
              <Text style={ styles.text }>
                {item.type}
                </Text>
              <Text>
                {item.name}
                </Text>
            </View>       
            );
      }}
      horizontal={true}
      keyExtractor={(item, id) => item.id.toString()}
      />
      </View>
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
    paddingTop: 120,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    marginLeft: 16,
    paddingVertical: 50,
  },
  text: {
    fontSize: 30,
  },
});
