import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'



export default function Cart1({ navigation }) {
    return (
        <View style={styles.container}>
            
            <Pressable onPress={() => {
                navigation.navigate('Home')
            }}>
                <Text style={styles.text}>CartScreen</Text>
            </Pressable>

            <Pressable onPress={() => {
                navigation.navigate('Favorite', {
                    itemId: 5,
                    otherParam: 'b',
                })
            }}>
                <Text style={styles.text}>Parameter</Text>
            </Pressable>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        marginTop: 40,
        padding: 20,

    },
    text: {
        color: 'white'
    },
    // but: {
    //     backgroundColor: 'grey',
    //     padding: 12,
    //     marginTop: 30,
    //     alignItems: 'center',
    //     borderWidth: 1,
    //     borderColor: 'white',
    //     borderRadius: 5,
    //     paddingTop: -100,
    // },
    header: {
        flex: 1,
        color: 'white',
        fontSize: 35,
        paddingTop: 85,
    }
})