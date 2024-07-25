import React from 'react'

import {
    View, 
    Text,
    StyleSheet,
    useColorScheme
} from "react-native";

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello from AppPro</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: "#000000"
    }
})

export default AppPro