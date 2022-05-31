import React from 'react';
import { Text, View } from 'react-native';
import { Image } from "@rneui/themed";

const Dashboard = () => {

    const data = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
    ]

    return (
        <View style={{ backgroundColor: "white", padding: "20px" }}>
            {
                data && data.map((item, index) => {
                    return (
                        <View key={index} style={{ marginBottom: "20px" }}>
                            <Text>{item.id}</Text>
                            <Image
                                source="https://cdn.shopify.com/s/files/1/0035/2754/0782/articles/International_Flower_Day_1200x1200.jpeg?v=1579365491"
                            // containerStyle={styles.item}
                            // PlaceholderContent={<ActivityIndicator />}
                            />
                        </View>
                    )
                })
            }
        </View>
    );
};

export default Dashboard;