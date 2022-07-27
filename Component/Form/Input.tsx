/**
 * Champ de saisie de texte comprenant un placeholder. Ce champ prend en charge le blur ainsi que le masquage/apparition du mot de passe en fonction du type de champ.
 */

import React from "react"
import { StyleSheet,  View, Text, Pressable } from "react-native"
//import Icon from "react-native-vector-icons/Entypo"
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-paper';

type Props = {
    placeholder: string,
    onChangeText: (text: string) => void,
    onBlur?: () => void, //Cette props est optionnelle, on peut la mettre ou non
    value: string,
    type: "password" | "text" | "email",
    error?: string,
}

const Input = ({ placeholder, onChangeText, value, type, onBlur, error }: Props) => {
    //Si c'est un type password on cache le mot de passe par défaut
    const [isShowPassword, setIsShowPassword] = React.useState<boolean>(type !== "password")
    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword)
    }
    return (
        <View style={styles.container}>
            <TextInput
                secureTextEntry={!isShowPassword}
                keyboardType={type === "email" ? "email-address" : "default"} //On change le clavier en fonction du type de champ
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                style={styles.inputStyle}
                onBlur={onBlur}
               // right={<TextInput.Icon name="eye" /> }
                left={type === "email" ? "<TextInput.Icon name=\"{email}\" />" : ""}
            />
            {type === "password" && <Pressable onPress={() => { toggleShowPassword() }} style={styles.icon}><Icon name={isShowPassword ? "eye-slash": "eye" } size={40} color="tomato" /></Pressable>}
            {error != undefined && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    inputStyle: {
        color: "#000",
        padding: 10,
      //  fontSize: 18,
        borderColor: "tomato",
        borderWidth: 1,
        textAlign: 'center',
        
    },
    error: {
        color: "red",
        fontSize: 12,
        textAlign: "center",
    },
    label: {
        fontSize: 18,
    },
    icon: {
        position: "absolute",
        right: 10,
        top: 5,
    },
})

export default Input