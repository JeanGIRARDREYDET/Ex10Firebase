/**
 * Composant permettant de faire un DatePicker avec un textInput et un Presseable
 */

import React, { useState } from "react"
import { StyleSheet, TextInput, Pressable, View, Text } from "react-native"
import Moment from "moment"
import DateTimePicker from "@react-native-community/datetimepicker"
import Icon from "react-native-vector-icons/Entypo"

type Props = {
    date: string,
    onChangeDate: (date: string) => void,
    error? : string,
}

const DatePicker = ({ date, onChangeDate, error }: Props) => {
    const [show, setShow] = useState<boolean>(false)
    const onsubmit = (date: Date) => {
        setShow(false)
        onChangeDate(Moment(date).format("DD/MM/YYYY"))
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={date}
                editable={false}
            />
            {show && <DateTimePicker
                mode="date"
                value={new Date()}
                onChange={(event, date) => {
                    if (date != undefined) {
                        onsubmit(date)
                    }
                }}
                dateFormat="day month year"
            />}
            {/* Nous permet d'afficher la modal de date */}
            <Pressable onPress={() => setShow(true)} style={styles.icon}>
                <Icon name="calendar" size={35} color="#00a3e1" />
            </Pressable>
            {error != undefined && <Text style={styles.error}>{error}</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        color: "#000",
        padding: 10,
        fontSize: 18,
        borderColor: "#33058d",
        borderWidth: 1,
        textAlign: 'center',
    },
    icon: {
        position: "absolute",
        right: 10,
        top: 5,
    },
    text: {
        color: "white",
        textAlign: "center",
    },
    error: {
        color: "red",
        fontSize: 12,
        textAlign: "center",
    }
})
export default DatePicker