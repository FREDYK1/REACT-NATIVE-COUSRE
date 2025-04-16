import { View, Text, StyleSheet, Platform, Image, ScrollView } from 'react-native';



const getTypeDetails = (type) => {
    switch (type.toLowerCase()) {
        case "electric":
            return {borderColor: "#FFD700", emoji:"⚡"};
        case "water":
            return {borderColor: "#64893EA", emoji:"💧"};
        case "fire":
            return {borderColor: "#FF5733", emoji:"🔥"};
        case "grass":
            return {borderColor: "#66cc66", emoji:"🌱"};
        default:
            return {borderColor: "#ccc", emoji:"❓"};
    }
};

export default function PokemonCard({    
    name,
    type,
    image,
    hp,
    moves,
    weaknesses
}) {
    const { borderColor, emoji } = getTypeDetails(type);
    return (
        <View style={styles.card}>
            <View style={ styles.nameContainer }>
                <Text style={ styles.name }>{ name }</Text>
                <Text style={ styles.hp }>💖{ hp }</Text>
            </View>

            <Image source={image} accessibilityLable={"${name} pokemon" } style={ styles.image } resizeMode="contain" />

            <View style={ styles.typeContainer }>
                <View style={[styles.badge, { borderColor }]}>
                    <Text style={ styles.typeEmoji } >{ emoji }</Text>
                    <Text style={ styles.typeText }>{ type }</Text>
                </View>
            </View>
            <View style={ styles.moveContainer }>
                <Text style={ styles.moveText }>
                    Moves: {moves.join(", ")}
                </Text>
            </View>
            <View style={ styles.weaknessContainer }>
                <Text style={ styles.weaknessText }>
                    Weaknesses: {weaknesses.join(", ")}
                </Text>
            </View>
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
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    hp: {
        fontSize: 22,
    },
    image : {
        width: "100%",
        height: 200,
    },
    typeContainer: {
        marginBottom: 30,
        alignItems: "center",
        marginTop: 20,
    },
    badge: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        borderRadius: 20,
        borderWidth: 4,
    },
    typeEmoji: {
        fontSize: 30,
        marginRight: 12,
    },
    typeText: {
        fontSize: 22,
        fontWeight: "bold",
        marginRight: 9,
    }, 
    movesContainer: {
        marginBottom: 16,
    },
    moveText: {
        fontSize: 22,
        fontWeight: "bold",
    },
    weaknessContainer: {
        marginBottom: 16,
    },
    weaknessText: {
        fontSize: 22,
        fontWeight: "bold",
    },
});