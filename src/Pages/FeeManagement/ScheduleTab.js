import React from 'react';
import { SafeAreaView, View, StyleSheet, ScrollView, Text, ImageBackground } from 'react-native';
import { Card } from '@rneui/themed';

const App = () => {

    return (
        <SafeAreaView>
            <ImageBackground source={require('../../assets/backgroundImages/ScheduleTab.png')} style={styles.backgroundImage}>
                <View style={styles.payDescription}>
                    <Text style={{ fontSize: 20 }}>Total : 20000</Text>
                    <Text style={{ fontSize: 20 }}>Total Paid Amount : <Text style={{ color: "green", fontSize: 25 }}>15000</Text></Text>
                    <Text style={{ fontSize: 20 }}>Due Amount : <Text style={{ color: "red", fontSize: 25 }}>15000</Text></Text>
                </View>
                <ScrollView style={styles.cardContent}>
                    <Card containerStyle={styles.cardContent}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.title}>2021-2022</Text>
                        </View>
                        <ScrollView horizontal={true}>
                            <Card>
                                <View>
                                    <Text>Total</Text>
                                    <Text>Total Paid Amount</Text>
                                    <Text>Due Amount</Text>
                                </View>
                            </Card>
                            <Card>
                                <View>
                                    <Text>Total</Text>
                                    <Text>Total Paid Amount</Text>
                                    <Text>Due Amount</Text>
                                </View>
                            </Card>
                        </ScrollView>
                    </Card>
                    <Card containerStyle={styles.cardContent}>
                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.title}>2022-2023</Text>
                        </View>
                        <ScrollView horizontal={true}>
                            <Card>
                                <View>
                                    <Text>Total</Text>
                                    <Text>Total Paid Amount</Text>
                                    <Text>Due Amount</Text>
                                </View>
                            </Card>
                            <Card>
                                <View>
                                    <Text>Total</Text>
                                    <Text>Total Paid Amount</Text>
                                    <Text>Due Amount</Text>
                                </View>
                            </Card>
                        </ScrollView>
                    </Card>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        margin: 0,
        backgroundColor: '#fff',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    cardContent: {
        flex: 1,
        backgroundColor: '#f9c2ff',
        width: '100%',
        margin: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    payDescription: {
        alignContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center"
    },
});

export default App;