import { StyleSheet , View} from 'react-native'
import React from 'react'
import Main from './src/navigations/main/index'
export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})