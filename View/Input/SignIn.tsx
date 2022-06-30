/**
 * Champ de saisie de texte comprenant un placeholder. Ce champ prend en charge le blur ainsi que le masquage/apparition du mot de passe en fonction du type de champ.
 */

 import React from "react"
 import { StyleSheet, TextInput, View, Text, Pressable } from "react-native"
 import Icon from "react-native-vector-icons/FontAwesome5"
 
 type Props = {
     placeholder: string,
     onChangeText: (text: string) => void,
     onBlur?: () => void, //Cette props est optionnelle, on peut la mettre ou non
     value: string,
     type: "password" | "text" | "email",
     error?: string,
 }
 
 const SignInScreen = ({ placeholder, onChangeText, value, type, onBlur, error }: Props) => {
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
             />
             {type === "password" && <Pressable onPress={() => { toggleShowPassword() }} style={styles.icon}><Icon name={isShowPassword ? "eye-with-line": "eye" } size={40} color="#00a3e1" /></Pressable>}
             {error != undefined && <Text style={styles.error}>{error}</Text>}
         </View>
     )
 }
 
 const styles = StyleSheet.create({
     container: {
         marginBottom: 10,
         marginTop: 10,
     },
     inputStyle: {
         color: "#000",
         padding: 10,
         fontSize: 18,
         borderColor: "#33058d",
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
 
 export default SignInScreen