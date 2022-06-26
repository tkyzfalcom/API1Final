import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    Barra: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff159",
        flex: 1,
        padding: 15,


    },

    IMG: {
        width: 20,
        height: 20,
        marginLeft: 5,
    },

    corpo: {
        textAlign: "left",
        justifyContent: "center",
        fontSize: 28,
        padding: 10,
    },

    Bory: {
        margin: 20,

    },

    input: {
        borderColor: "red",
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,

        borderRadius: 7,
        borderColor: "#0003",
        borderWidth: 1.3,
        marginBottom: 20
    },

    Button: {
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
        marging: 20,
        padding: 10,



    },

    continuar: {
        fontSize: 25,
        color: "white"

    },
    resto: {
        color: "#2968c8",
        fontSize: 25

    },
    footer: {
        borderTopColor: "#0003",
        borderTopWidth: 1,
        width: "100%",
        alignItems: "center",

    },
    textfooter: {
        fontSize: 20,
        paddingTop: 35,
        paddingBottom:10,
      
    },


});
export default styles;