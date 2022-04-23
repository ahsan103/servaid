import { View, Text, Image , FlatList} from "react-native";
import React from "react";
import styles from "./style";
import health from '../../assets/data/health.json'
export default function HealthConcern() {
  
  return (
    <FlatList 
    horizontal={true}
    showsHorizontalScrollIndicator={false}
     data={health}
     keyExtractor={(item)=>item.id}
     renderItem={({item})=>(<View style={[styles.container, { backgroundColor: item.color }]}>
      <View style={{flex:1.5}}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
      <View style={{flex:1}}>
        <Image style={styles.image} source={{uri:item.image}} />
      </View>
    </View>)}
    
    />
    
  );
}
