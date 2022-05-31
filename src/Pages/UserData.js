import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const UserData = () => {

    const [userId, setUserId] = useState([]);
    const [input, setInput] = useState();

    const handleData = (id) => {
        setInput(id);
    }

    const data = [
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
        { name: 'John', unit: '3F' },
    ]


    return (
        <View style={{ paddingBottom: "50px" }}>
            <View style={{ marginTop: "20px" }}>
                <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                    Welcome to Carlos Cafe
                </Text>
            </View>
            <View style={{ marginTop: "20px", fontSize: "20px" }}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="User Id"
                    value={input}
                    onChangeText={(id) => handleData(id)}
                // onKeyPress={(e) => e.preventDefault()}
                />

                <table>
                    <tbody>
                        {
                            data?.length > 0 ?
                                data.map((item, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td align='center'>{index + 1}</td>
                                                <td>{item?.name}</td>
                                                <td align='right' style={{ paddingRight: "25px" }}>{item?.unit}</td>
                                            </tr>
                                        </>
                                    )
                                })
                                : <Text style={{ alignItems: "center" }}>No Data to Display</Text>
                        }
                    </tbody>
                </table>
            </View>
            <View style={styles.container}>
                <Button
                    title="End Session"
                    onPress={() => setInput()}
                />
            </View>
        </View>
    );
};


export default UserData;


const styles = StyleSheet.create({
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: "#b1abab",
        borderWidth: 0,
        borderBottomWidth: 2,
    },
    container: {
        backgroundColor: "#fff",
        right: 10,
        left: 10,
        position: 'fixed',
        bottom: 0,
        borderRadius: 10,
        paddingBottom: 10,
    },
});