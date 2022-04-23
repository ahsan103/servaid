import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./style";
export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: "#8dd9fc" }]}
        onPress={() => {
          quantity > 1 ? setQuantity(quantity - 1) : null;
        }}
      >
        {quantity == 1 ? (
          <FontAwesome5 name="trash" size={18} color="#127cc0" />
        ) : (
          <FontAwesome5 name="minus" size={18} color="#127cc0" />
        )}
      </Pressable>
      <View style={styles.qtyView}>
        <Text style={styles.buttonText}>{quantity}</Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          setQuantity(quantity + 1);
        }}
      >
        <FontAwesome5 name="plus" size={18} color="white" />
      </Pressable>
    </View>
  );
}
