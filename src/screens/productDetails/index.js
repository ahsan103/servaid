import { View, Text, Pressable, ScrollView, Modal } from "react-native";
import React, { useState } from "react";
import { Button, Card } from "react-native-paper";
import Header from "../../components/header";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./style";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
export default function ProductDetail(props) {
  const navigation = useNavigation();
  const sheetRef = React.useRef(null);
  const SlideButton = (props)=>{
    return(
      <Pressable style={styles.effectView}>
        <Text style={styles.effectButton}>{props.title}</Text>
        <AntDesign name="right" size={26} color="#127cc0" />
      </Pressable>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.buttonHeader}>
        <Pressable
          style={{ margin: 10 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="left" size={26} color="#127cc0" />
        </Pressable>
      </View>
      <ScrollView>
        <Card style={styles.card}>
          <Card.Cover
            style={styles.image}
            source={{ uri: props.route.params.product.image }}
          />
          <Card.Actions>
            <View style={styles.Button}>
              <Pressable style={styles.zoom}>
                <Feather name="zoom-in" size={26} color="#127cc0" />
              </Pressable>
              <Pressable style={styles.share}>
                <Entypo name="share" size={22} color="#127cc0" />
              </Pressable>
            </View>
          </Card.Actions>
        </Card>
        <View style={styles.innerContainerOne}>
          <View>
            <Text style={styles.title}>{props.route.params.product.title}</Text>
          </View>
          <View>
            <Text style={styles.company}>
              {props.route.params.product.company}
            </Text>
          </View>
          <View>
            <Text
              style={[styles.company, { fontWeight: "bold", fontSize: 20 }]}
            >
              Rs. {props.route.params.product.price}/Pack
            </Text>
          </View>
          <View style={{ borderBottomWidth: 3, borderBottomColor: "white" }}>
            <Text
              style={[styles.company, { paddingVertical: 10, paddingRight: 5 }]}
            >
              {props.route.params.product.detail}
            </Text>
          </View>
        </View>
        <SlideButton title="Precautions" />
        <SlideButton title="Side Effect" />
        <SlideButton title="Reviews" />
      </ScrollView>
      <View style={styles.cartView}>
        <Pressable style={styles.cartButton}>
          <Text style={styles.ButtonText}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
}
