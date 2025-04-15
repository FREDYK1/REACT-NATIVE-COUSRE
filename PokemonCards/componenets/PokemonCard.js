import { View, Text, StyleSheet, Platform } from 'react-native';

export default function PokemonCard() {
    return (
        <View style={styles.card}>
            <Text>Pokemon Card</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: {
                    hieght: 2,
                    width: 2,
                },
                shadowOpacity: 0.2,
                showdowColor: '#333',
                shadowRadius: 5,
            },
            android: {
                elevation: 5,
            }
        })
    }
});