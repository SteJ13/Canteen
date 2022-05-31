import React from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import { styles } from "../../assets/styles/Custom";

const Dashboard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/canteenDashboard.png')} style={lstyles.logo} />
            <Text style={[styles.contentCenter, styles.h1]}>
                Welcome to the HGP Canteen Module
            </Text>
            <View style={lstyles.container}>
                <Button
                    title="Get Started"
                    onPress={() => {
                        navigation.navigate('Canteen');
                    }}
                />
            </View>
            <Button
                title="Enter"
                onPress={() => {
                    navigation.navigate('UserData');
                }}
            />
            <Button
                title="Sessions"
                onPress={() => {
                    navigation.navigate('Sessions');
                }}
            />
        </View>
    );
};

export default Dashboard;

const lstyles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        right: 10,
        left: 10,
        position: 'absolute',
        bottom: 10,
    },
    logo: {
        width: "100%",
        height: "50%",
    },
});