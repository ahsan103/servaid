import { View, Text, Pressable, FlatList, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";
import Header from "../../components/header";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import category from "../../assets/data/category.json";
import product from "../../assets/data/product.json";
import ProductCard from "../../components/productCard/index";
export default function FilterScreen(props) {
  const navigation = useNavigation();
  const [parents, setParents] = useState([]);
  const [subParents, setSubParents] = useState([]);
  const [parentPressed, setParentPressed] = useState("");
  const [subParentPressed, setSubParentPressed] = useState("");
  const [products, setProducts] = useState([]);
  useState(async () => {
    const data = category.filter((item) =>
      item.parent === props.route.params.category.id && item.subParent === null
        ? item
        : null
    );
    setParents(data);
    const array = category.filter((item) =>
      item.parent === props.route.params.category.id && item.subParent
        ? item
        : null
    );
    setSubParents(array);
    const proArray = [];
    for (let i = 0; i < array.length; i++) {
      for (let k = 0; k < product.length; k++) {
        if (array[i].id === product[k].category) {
          proArray.push(product[k]);
        }
      }
    }
    for (let i = 0; i < data.length; i++) {
      for (let k = 0; k < product.length; k++) {
        if (data[i].id === product[k].category) {
          proArray.push(product[k]);
        }
      }
    }
    for (let i = 0; i < product.length; i++) {
      if (product[i].category === props.route.params.category.id) {
        proArray.push(product[i]);
      }
    }
    setProducts(proArray);
  });

  return (
    <View style={{ flex: 1, marginBottom: 100 }}>
      <Header />
      <View style={styles.headerTitle}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={26} color="#127cc0" />
        </Pressable>
        <Text style={styles.titleText}>
          {props.route.params.category.title}
        </Text>
        <Pressable>
          <MaterialIcons name="filter-tilt-shift" size={28} color="#127cc0" />
        </Pressable>
      </View>

      <View style={styles.parentView}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={parents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              style={[
                styles.parent,
                { borderBottomWidth: item.id === parentPressed ? 2 : null },
              ]}
              onPress={() => {
                setParentPressed(item.id);
                setSubParentPressed("");
              }}
            >
              <Text style={{ fontSize: 16 }}>{item.title}</Text>
            </Pressable>
          )}
        />
      </View>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={subParents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            !parentPressed ? (
              <Pressable
                style={[
                  styles.subParent,
                  {
                    backgroundColor:
                      item.id === subParentPressed ? "#127cc0" : "#95dcfc",
                  },
                ]}
                onPress={() => {
                  setSubParentPressed(item.id);
                  setParentPressed(item.subParent);
                }}
              >
                <Text
                  style={[
                    styles.subParentText,
                    {
                      color: item.id === subParentPressed ? "white" : "#127cc0",
                    },
                  ]}
                >
                  {item.title}
                </Text>
              </Pressable>
            ) : item.subParent === parentPressed ? (
              <Pressable
                style={[
                  styles.subParent,
                  {
                    backgroundColor:
                      item.id === subParentPressed ? "#127cc0" : "#95dcfc",
                  },
                ]}
                onPress={() => {
                  setSubParentPressed(item.id);
                  setParentPressed(item.subParent);
                }}
              >
                <Text
                  style={[
                    styles.subParentText,
                    {
                      color: item.id === subParentPressed ? "white" : "#127cc0",
                    },
                  ]}
                >
                  {item.title}
                </Text>
              </Pressable>
            ) : null
          }
        />
      </View>
      <View style={{ marginBottom: 100 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            if (item.category === subParentPressed) {
              return <ProductCard product={item}  onPressHandler={()=>{
                navigation.navigate('Detail' , {product:item});
              }}/>;
            } else if (parentPressed) {
              if (subParentPressed) {
                return null;
              }
              if (parentPressed === item.category) {
                return <ProductCard product={item}  onPressHandler={()=>{
                  navigation.navigate('Detail' , {product:item});
                }}/>;
              }
              for (let i = 0; i < subParents.length; i++) {
                if (subParents[i].subParent === parentPressed) {
                  if (subParents[i].id === item.category) {
                    return <ProductCard product={item}  onPressHandler={()=>{
                      navigation.navigate('Detail' , {product:item});
                    }}/>;
                  }
                }
              }
            } else {
              if (subParentPressed || parentPressed) {
                return null;
              }
              return <ProductCard product={item}  onPressHandler={()=>{
                navigation.navigate('Detail' , {product:item});
              }}/>;
            }
          }}
        />
      </View>
    </View>
  );
}
