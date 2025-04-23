import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar,FlatList, SectionList } from 'react-native';
import pokemonList from './data.json';
import groupedPokemonList from './grouped-data.json';



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ScrollView}>
      {/* <FlatList 
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
      ItemSeparatorComponent={<View style={{ width: 16 }} />}
      ListEmptyComponent={<Text style={styles.text}>No Pokemon Found</Text>}
      ListHeaderComponent={<Text style={styles.text}>Pokemon List</Text>}
      ListFooterComponent={<Text style={styles.text}>End of List</Text>}
      /> */}

      <SectionList
      sections={ groupedPokemonList }
      renderItem={( {item} )  => {
        return (
            <View style={styles.card}>
                <Text style={ styles.cardText }>
                  {item}
                </Text>
            </View>       
            );
      }
    }
    renderSectionHeader={({ section }) => (
      <Text style={styles.text}>{section.type}</Text>
    )}
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
    paddingVertical: 50,
  },
  text: {
    fontSize: 30,
  },
});
