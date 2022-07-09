import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Button, Card } from '@rneui/base';
import feeImage from '../assets/images/fee_management.png'
import { Divider } from '@rneui/themed';

const Dashboard = ({ navigation }) => {

    const dataSource = [
        { id: 1, src: "https://www.clipartmax.com/png/middle/221-2214281_catering-computer-icons-business-event-management-canteen-management-system-icon.png", },
        { id: 2, src: "https://www.clipartmax.com/png/middle/221-2214281_catering-computer-icons-business-event-management-canteen-management-system-icon.png", },
        { id: 3, src: "https://www.clipartmax.com/png/middle/221-2214281_catering-computer-icons-business-event-management-canteen-management-system-icon.png", },
        { id: 4, src: "https://www.clipartmax.com/png/middle/221-2214281_catering-computer-icons-business-event-management-canteen-management-system-icon.png", },
        { id: 1, src: "https://www.clipartmax.com/png/middle/221-2214281_catering-computer-icons-business-event-management-canteen-management-system-icon.png", },
        { id: 2, src: "https://www.clipartmax.com/png/middle/221-2214281_catering-computer-icons-business-event-management-canteen-management-system-icon.png", },
        { id: 2, src: "https://www.clipartmax.com/png/middle/221-2214281_catering-computer-icons-business-event-management-canteen-management-system-icon.png", },
        { id: 2, src: "https://www.clipartmax.com/png/middle/221-2214281_catering-computer-icons-business-event-management-canteen-management-system-icon.png", },
        { id: 2, src: "https://www.clipartmax.com/png/middle/221-2214281_catering-computer-icons-business-event-management-canteen-management-system-icon.png", },
        { id: 2, src: "https://www.clipartmax.com/png/middle/221-2214281_catering-computer-icons-business-event-management-canteen-management-system-icon.png", },
        { id: 2, src: "https://www.clipartmax.com/png/middle/221-2214281_catering-computer-icons-business-event-management-canteen-management-system-icon.png", },
        { id: 2, src: "https://www.clipartmax.com/png/middle/221-2214281_catering-computer-icons-business-event-management-canteen-management-system-icon.png", },
        { id: 2, src: "https://www.clipartmax.com/png/middle/221-2214281_catering-computer-icons-business-event-management-canteen-management-system-icon.png", },
        { id: 2, src: "https://www.clipartmax.com/png/middle/221-2214281_catering-computer-icons-business-event-management-canteen-management-system-icon.png", },

    ]

    return (
        // <View style={{ backgroundColor: "white", padding: "20px" }}>
        //     {
        //         data && data.map((item, index) => {
        //             return (
        //                 <View key={index} style={{ flex: 1, flexDirection: 'row', marginBottom: "25px" }}>
        //                     <Image
        //                         source={{ uri: "https://cdn.shopify.com/s/files/1/0035/2754/0782/articles/International_Flower_Day_1200x1200.jpeg?v=1579365491" }}
        //                         style={{ width: "40%", height: "120px", borderRadius: "10px" }}
        //                     />
        //                     <View style={{ width: "65%", padding: "20px", textAlign: "center" }}>
        //                         <Text style={{ fontWeight: "bold", fontSize: "20px", color: "#1100ff" }}>
        //                             {item.name}
        //                         </Text>
        //                         {/* <Button
        //                             // onPress={onPressLearnMore}
        //                             title="View"
        //                             color="#0c59d9"
        //                             style={{ borderRadius: 20 }}
        //                             containerStyle={{ borderRadius: 5 }}
        //                         /> */}
        //                         <Button
        //                             size="sm"
        //                             containerStyle={{ borderRadius: 20, marginTop: 10 }}
        //                         // onPress={handleSubmit}
        //                         >View</Button>
        //                     </View>
        //                 </View>
        //             )
        //         })
        //     }
        // </View>
        <>
            {/* <SafeAreaView style={styles.container}>
                <FlatList
                    data={dataSource}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                padding: 10,
                                justifyContent: 'center',
                            }}>
                            <Image
                                style={styles.imageThumbnail}
                                source={{ uri: item.src }}
                            />
                        </View>
                    )}
                    //Setting the number of column
                    numColumns={3}
                    keyExtractor={(item, index) => index}
                />
            </SafeAreaView> */}
            <ScrollView style={{ backgroundColor: "#00e5ff", flex: 1, padding: "20px" }}>
                <View style={styles.vertical}>
                    <TouchableOpacity onPress={() => navigation.navigate('Fee Management')}>
                        <Image
                            style={{ width: "100%", height: 100 }}
                            resizeMode="contain"
                            source={feeImage}

                        />
                        <Text>Fee Management</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Canteen')}>
                        <Image
                            style={{ width: "100%", height: 100 }}
                            resizeMode="contain"
                            source={{ uri: 'https://www.clipartmax.com/png/middle/221-2214281_catering-computer-icons-business-event-management-canteen-management-system-icon.png' }}
                        />
                        <Text>Canteen</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* <View style={{ backgroundColor: "white", padding: "20px", flex: 1, flexDirection: 'row', marginBottom: "25px" }}>
                {
                    data?.map((res, index) => {
                        return (
                            <View style={{ flex: 1, flexDirection: 'col', }}>
                                <Image
                                    source={{ uri: "https://cdn.shopify.com/s/files/1/0035/2754/0782/articles/International_Flower_Day_1200x1200.jpeg?v=1579365491" }}
                                    style={{ width: "100%", height: "45px", borderRadius: "50%" }}
                                />
                                <Text style={{ position: "relative", marginTop: "5px" }}>
                                    {res.name}
                                </Text>
                            </View>
                        )
                    })
                }
            </View> */}
            {/* <View style={{ flex: 1, flexDirection: 'col', }}>
                <Image
                    source={{ uri: "https://cdn.shopify.com/s/files/1/0035/2754/0782/articles/International_Flower_Day_1200x1200.jpeg?v=1579365491" }}
                    style={{ width: "15%", height: "45px", borderRadius: "50%" }}
                />
                <Text style={{ position: "relative", marginTop: "5px" }}>
                    Gowtham
                </Text>
                <Text style={{ position: "relative", marginTop: "5px" }}>
                    Gowtham
                </Text>
            </View> */}
        </>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
    },
    vertical: {
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})