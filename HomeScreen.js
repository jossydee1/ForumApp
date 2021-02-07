import React, { Component, useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import { useStateValue } from "./StateProvider";

export default function HomeScreen() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      //timestamp: firebase.firestore.fieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl
    });

    setInput("");
    setImageUrl("");
  };
  const [{ user }, dispatch] = useStateValue();

  return (
    <View>
      <TextInput
        style={styles.text}
        placeholder="Say Something"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <Button title="Send" type="submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingLeft: 22,
    paddingRight: 22,
    borderWidth: 2,
    borderColor: "#7a42f4",
    color: "green"
  }
});
