import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function Cart1({ navigation }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => {
                navigation.navigate('Home')
            }}>
                <Text>CartScreen</Text>
            </Pressable>
            
            <Pressable onPress={() => { navigation.navigate('Favorite',{
                    itemId: 5,
                    otherParam: 'b',
                }) }}>
                <Text>Parameter</Text>
            </Pressable>
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