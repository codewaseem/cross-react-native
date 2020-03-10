import React from "react";
import Link from "gatsby-link";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { App } from "@cross-rnw/common";
const styles = StyleSheet.create({
  box: { padding: 10, margin: 10, borderWidth: 1, borderColor: "black" },
  text: { fontWeight: "bold", color: "red" },
  button: {
    marginVertical: 40,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "lightgrey",
    alignItems: "center",
  },
  buttonText: { fontWeight: "bold", color: "black" },
});

const IndexPage = () => <App />;

export default IndexPage;
