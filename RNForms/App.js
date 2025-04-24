import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput } from 'react-native';
import { useState } form 'react';

 
export default function App() {

  const [name, setName] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} value={name} onChangeText={setName}/>
      <Text style={styles.text}>
      My name is {name}. 
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40, 
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 34,
    padding: 10,
  }
});
