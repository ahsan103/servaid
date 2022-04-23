import { View, Text, Pressable , Alert } from "react-native";
import React, { useState } from "react";
import { Card } from "react-native-paper";
import styles from "./style";
import { FontAwesome5 } from "@expo/vector-icons";
import QuantitySelector from "../quantitySelector/index";
export default function ProductCard(props) {
  const [buttonColor, setButtonColor] = useState("#127cc0");
  const [check, setCheck] = useState(false);
  const [qty, setQty] = useState(0);
  const [selector, setSelector] = useState(false);
  return (
   
      <Card style={styles.container} onPress={props.onPressHandler}>
        <Card.Cover style={styles.image} source={{ uri: props.product.image }} />
        <View>
          <Text style={styles.title} numberOfLines={2}>
            {props.product.title}
          </Text>
        </View>
        <View>
          <Text style={styles.price}>Rs. {props.product.price}</Text>
        </View>
        {!selector ? (
          <Pressable
            style={[styles.button, { backgroundColor: buttonColor }]}
            onPress={() => {
              setButtonColor("#20ab23");
              setSelector(true);
              setQty(qty + 1);
              setTimeout(() => {
                setCheck(true);
                setSelector(false);
              }, 2000);
            }}
          >
            {!check ? (
              <FontAwesome5 name="plus" size={20} color="white" />
            ) : (
              <Text style={styles.buttonText}>{qty}</Text>
            )}
          </Pressable>
        ) : (
          <QuantitySelector />
        )}
      </Card>
    
  );
}
