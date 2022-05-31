import { StyleSheet, Text } from 'react-native';

export default function H1({ children }) {
    return (
        <Text style={styles.h1}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        margin: 10,
    },
});
