import { View, Text} from 'react-native'
import React from 'react'
import Header from "../../components/header/index";
import styles from './style';
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from 'react-native-paper';
export default function SearchScreen() {
  const [text, setText] = React.useState("");
  return (
    <View style={{flex:1}}>
      <Header />
      <View style={styles.header}>
       <Text style={styles.text}>
         Category
       </Text>
     </View>
     <TextInput 
     style={styles.input}
       mode='outlined'
       label='what are you looking for?'
       activeOutlineColor='#127cc0'
       right={<TextInput.Icon name='magnify' color='#127cc0'/>}
     />
    </View>
  )
}