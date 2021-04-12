import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        //backgroundColor:"#000000",
        //backgroundColor:"#006400",
        backgroundColor:"#1E90FF",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        flexWrap:"wrap",

    },

    input:{
        width:370,
        height:60,
        backgroundColor:"#FFFFFF",
        borderRadius:90,
        borderColor:"#0000CD",
        borderWidth:3,
        borderTopColor:"#0000FF",
        textAlign:"center",
        fontSize:15,
        fontWeight:"bold",
        color:"#FF0000",
        padding:10,
    },

    image:{
        height:180,
        width:180,
        margin:35,
        borderWidth:3,
        //borderColor:"#FF0000",
        borderColor:"#FFF",
        borderRadius:120,
    },

    opacity:{
        //backgroundColor:"#008000",
        backgroundColor:"#4169E1",
        height:50,
        width:160,
        marginTop:1,
        margin:25,
        marginTop:5,
        padding:10,
        borderWidth:3,
        borderRadius:35,
        borderColor:"#FFF",
        alignItems:"center",
        justifyContent:"center",

    },

    text:{
        fontSize:17,
        color:"#FFF",
        fontWeight:"bold",
    },
});

  export default styles;