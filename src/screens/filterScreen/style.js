import { StyleSheet } from 'react-native'
import { borderBottomColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const styles = StyleSheet.create({
    
    headerTitle:{
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:"#95dcfc",
        height:80
        
    },
    parentView:{
        backgroundColor:"#95dcfc",
        justifyContent:'center',
    },
    titleText:{
        flex: 1,
        paddingLeft:20,
        fontSize:20,
        fontWeight:'bold',
        color:"#127cc0",
    },
    parent:{
        marginHorizontal:10,
        borderBottomColor:"#127cc0",
    },
    subParent:{
        margin:10,
        backgroundColor:"#95dcfc",
        borderRadius:50,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        

    },
    subParentText:{
        paddingHorizontal:10,
        fontSize:16,
        fontWeight:'bold',
        color:"#127cc0"
    },
   
    
});

export default styles;