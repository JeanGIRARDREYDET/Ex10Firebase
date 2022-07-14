import React, { Component, useState } from "react"
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TextInput } from 'react-native-paper'
import Input from "../../Component/Form/Input"
import Button from "../../Component/Form/Button"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { isEmail, isNotEmpty } from "../../Utils/Form"
import {UserCreate,UserReadAuth} from "../../Component/Auth/UserCRU"

//type SignUpStep1ScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "SignUpStep1">
//On défini un type pour les ereurs possible dans ce formulaire. Cela va nous éviter de faire plusieurs state par erreur comme dans le formulaire de connexion.
type error = {
    email?: string,
    password?: string,
    passwordConfirmation?: string,
}
type Props = {
    placeholder: string,
    onChangeText: (text: string) => void,
    onBlur?: () => void, //Cette props est optionnelle, on peut la mettre ou non
    value: string,
    type: "password" | "text" | "email",
    error?: string,
}
const SignUpScreen = () => {
    const signUp: Boolean= false;
    // const navigation = useNavigation<SignUpStep1ScreenNavigationProp>()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")
    const [errors, setErrors] = useState<error>({})

    const onSubmit = () => {
        //On revérifie les champs avant de passer à l'étape suivante.
        onPasswordBlur()
        signUp ? onPasswordConfirmationBlur():onPasswordBlur();
        onEmailBlur()
        
        //Si il n'y a pas d'erreur, on passe à l'étape suivante
        if (errors.email == undefined && errors.password == undefined && (errors.passwordConfirmation == undefined && signUp)) {
            //On vérifie que les champs passwords sont identiques
            if (password !== passwordConfirmation && signUp) {
                setErrors({ ...errors, "password": "Les mots de passe ne correspondent pas" })
            } else {
                setErrors({ ...errors, "password": undefined })

                const UserAuth : { Uid: string, errors: string } = (signUp?UserCreate(email, password):UserReadAuth(email, password));
                console.log("UserAuth : " + UserAuth.errors)
                //  navigation.navigate("SignUpStep2", { email, password })
            }
        } else {
        }
    }
    const onPasswordBlur = () => {
        setErrors({ ...errors, "password": isNotEmpty(password) ? undefined : "Le mot de passe est vide" })
    }
    const onPasswordConfirmationBlur = () => {
        setErrors({ ...errors, "passwordConfirmation": isNotEmpty(passwordConfirmation) ? undefined : "Le mot de passe de confirmation est vide" })
    }

    const onEmailBlur = () => {
        setErrors({ ...errors, "email": isNotEmpty(email) ? undefined : "L'email est vide" })
        if (errors.email == undefined) {
            setErrors({ ...errors, "email": isEmail(email) ? undefined : "L'email n'est pas valide" })
        }
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <Input placeholder="Email" type="email" onChangeText={setEmail} value={email} onBlur={() => onEmailBlur()} error={errors.email} />
                <Input placeholder="Mot de passe" type="password" onChangeText={setPassword} value={password} onBlur={() => onPasswordBlur()} error={errors.password} />
               {signUp?
                  <Input  placeholder="Confirmation du mot de passe" type="password" onChangeText={setPasswordConfirmation} value={passwordConfirmation} onBlur={() => onPasswordConfirmationBlur()} error={errors.passwordConfirmation} />
                 :<Text></Text>
                }
                <Button onPress={() => onSubmit()} title={signUp?"Sin UP":"Sign In"} type="primary" />
            </ScrollView>
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
        fontSize: 18,
        borderColor: "tomato",
        borderWidth: 1,
        textAlign: 'center',
        margin: 5,
        borderRadius: 5,
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
}
)
export default SignUpScreen