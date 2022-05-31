import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const Sessions = ({ navigation }) => {

    const sessions = [
        { session: 'Morning', time: '8:00 AM' },
        { session: 'Afternoon', time: '1:00 PM' },
        { session: 'Evening', time: '5:00 PM' },
        { session: 'Night', time: '8:00 PM' },
    ]

    return (
        <View>
            <Text style={styles.header}>
                Select Session
            </Text>
            <View style={styles.container}>
                <FlatList
                    data={sessions}
                    renderItem={({ item }) => <Text
                        style={styles.item}
                        onPress={() => navigation.navigate('Canteen')}
                    >
                        {item.session} - {item.time}
                    </Text>
                    }
                />
            </View>
        </View>
    );
};

export default Sessions;

const styles = StyleSheet.create({
    header: {
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: "10px"
    },
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});