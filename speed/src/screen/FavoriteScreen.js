import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function FavoriteScreen({ route, navigation }) {
    const { itemId, otherParam } = route.params;
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()}>
                <Text>FavoriteScreen</Text>
            </Pressable>
            <Text>{itemId}</Text>
            <Text>{otherParam}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})