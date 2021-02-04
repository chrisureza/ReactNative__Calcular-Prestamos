import React from 'react'
import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import colors from '../utils/colors'

export default function Footer({ reset }) {
    return (
        <SafeAreaView style={styles.viewFooter}>
            <TouchableOpacity style={styles.button} onPress={reset}>
                <Text style={styles.text}>LIMPIAR</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        backgroundColor: colors.PRIMARY_COLOR,
        height: 120,
        borderTopLeftRadius: 30,
        borderTopEndRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        width: '75%'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        textAlign: 'center'
    }
})

