import { StyleSheet } from "react-native";

export const globalstyles = StyleSheet.create({
    view: {
        backgroundColor: "rgb(182, 176, 176)",
        paddingBottom: "1.5rem"
    },
    images: {
        width: 300,
        height: 250,
        marginBottom: "1.5rem",
        alignSelf: "center"
    },
    text: {
        alignSelf: "center",
        fontWeight: "600",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        padding: 5,
        color: "rgb(34, 34, 34)"
    },
    text1: {
        fontWeight: "600",
        alignSelf: "center"
    },
    textDetail: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        marginTop:"0.5rem",
        padding: "1rem"
    },
    button: {
        width: "50%",
        alignSelf: "center",
        marginTop: 15
    },
    input: {
        margin: 10,
        height: 40,
        borderRadius: "5px",
        textAlign: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
    },
    input1: {
        margin: 10,
        height: 40,
        borderColor: 'white',
        borderRadius: "5px",
        alignSelf: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
    }
})