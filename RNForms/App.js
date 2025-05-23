import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput,Switch } from 'react-native';
import { useState } from "react";
 

export default function App() {

  const [name, setName] = useState("");
  const [mode, setMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} 
      value={name} 
      onChangeText={setName} 
      placeholder="email@gmail.com"
      secureTextEntry
      keyboardType="numeric"
      autocorrect={false}
      autoCapitalize="none"
      />
      <Text style={styles.text}>My Text is {name} </Text>
      <TextInput 
      style={[styles.input, styles.multiLine]}
      placeholder="message"
      multiline
      />
      <View style={styles.switchContainer}>
        <Text style={styles.text}>
          Dark Mode
        </Text>
        <Switch 
        value={mode}
        onValueChange = {() => setMode((previousState) => !previousState) }/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    padding: 10,
  },
  multiLine: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
