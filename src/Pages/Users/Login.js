import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "@rneui/base";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { useValidation } from 'react-native-form-validator';

import { AuthContext } from "../../../App";
import Loader from "../../Components/Loader";
import axiosInstance from "../../Service/AxiosInstance";

export default function Login({ navigation }) {

    const { setAuth, setUser, setAlert } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);

    const { validate, isFieldInError, getErrorsInField, isFormValid } =
        useValidation({
            state: { email, password },
        });

    const handleSubmit = () => {
        validate({
            email: { required: true }, // email: true
            password: { required: true },
        });

        if (isFormValid()) {
            const handleLogin = async () => {
                setLoader(true);
                try {
                    if (email === 'ad' && password === 'ad') {
                        await AsyncStorage.setItem('hgp_user_details', JSON.stringify({ email, password }));
                        setAuth(true);
                        setUser({ email, password });
                        navigation.navigate("Dashboard")
                    } else {
                        setAlert({ show: true, title: 'Login Failed', message: 'Invalid username or password' });
                    }
                } catch (error) {
                    console.log('error: ', error);
                } finally {
                    setLoader(false);
                }
            }
            handleLogin();
        }
    }

    const handleStrg = () => {
        // axios.get('testing/').then(res => {
        //     console.log('res:  2', res);
        // }).catch(err => {
        //     console.log('err: ', err);
        // })
        AsyncStorage.clear();
    }

    if (loader) return <Loader />

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: "https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/user-244.png" }} />

            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            {isFieldInError('email') &&
                getErrorsInField('email').map(errorMessage => (
                    <Text style={{ color: "red" }} key={errorMessage}>{errorMessage}</Text>
                ))}

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            {isFieldInError('password') &&
                getErrorsInField('password').map(errorMessage => (
                    <Text style={{ color: "red" }} key={errorMessage}>{errorMessage}</Text>
                ))}

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}>
                <Text
                    style={styles.loginText}
                    onPress={() => handleSubmit()}
                >
                    LOGIN
                </Text>
            </TouchableOpacity>
            {/* <Button onPress={() => handleStrg()} >Console check print</Button> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginTop: 20,
        marginBottom: 40,
        width: "50%",
        height: "30%",
    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginTop: 10,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 15,
        marginTop: 15,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
    },
});