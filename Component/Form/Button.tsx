/**
 * Bouton de formulaire à base de Pressable et changeant de couleur en fonction du type de bouton
 */

import React from "react"
import { Pressable, StyleSheet, Text } from "react-native"

/**
 * Ici, je définis un type pour les props du bouton.
 * Le type est un objet qui contient les propriétés du bouton.
 * Pas besoin de le faire dans un autre fichier, il ne sevira que pour ces props de ce bouton.
 */
type Props = {
    title: string,
    type: "primary" | "secondary",
    onPress: () => void
}

const Button = ({ title, onPress, type }: Props) => {
    const { buttonStyle, textStyle } = styles
    return (
        <Pressable onPress={onPress} style={[buttonStyle, type === "primary" ? styles.primary : styles.secondary]}>
            <Text style={[textStyle, type === "primary" ? styles.primaryText : styles.secondaryText]}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        padding: 10,        
        marginTop: 10,
        marginHorizontal:10
    },
    textStyle: {
        alignSelf: "center",
        fontSize: 20,
    },
    primary: {
        backgroundColor: "tomato",
    },
    primaryText: {
        color: "#fff",
    },
    secondary: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "tomato",
    },
    secondaryText: {
        color: "#33058d",
    },
})

export default Button