import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onPressHandler = () => {
    console.log("click");
    const n = name && name.trim();
    if (n) {
      setMessage(`Hello world, ${n}!`);
    }
  };

  const onChangeTextHandler = (text) => {
    console.log(text);
    setName(text);
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>Hello World</Text>
      <TextInput
        style={styles.helloWorldInput}
        placeholder="Digite o seu nome"
        onChangeText={onChangeTextHandler}
        value={name}
      />
      <Button
        onPress={onPressHandler}
        color="green"
        title="Clique aqui para dizer oi"
      />
      {message && <Text style={styles.title}>{message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "monospace",
    fontSize: 36,
    color: "green",
  },
  helloWorldInput: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 16,
    padding: 32,
    margin: 16,
    width: "80%",
    backgroundColor: "green",
    fontFamily: "monospace",
  },
});
