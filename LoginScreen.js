import React, { Component, useState } from "react";
import { Text, View, Button } from "react-native";
import { auth } from "firebase";
import { provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reduce";

export default function LoginScreen() {
  const [dispatch] = useStateValue();

  const signIn = () => {
    // sign in auth
    auth
      .signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        });
      })
      .catch(error => alert(error.message));
  };

  return (
    <View>
      <Button title="Sign In with Google" onPress={signIn} />
    </View>
  );
}
