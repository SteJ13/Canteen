import React, { useContext } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Canteen from './Pages/Canteen/ConCanteen';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Users/Login';
import { AuthContext } from '../App';
import UserData from './Pages/UserData';
import Sessions from './Pages/Sessions';

const Stack = createNativeStackNavigator();

const Routes = () => {

    const { handleLogout } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => handleLogout()}
                        >
                            <Image
                                style={{ width: 20, height: 20, marginRight: 10 }}
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/126/126467.png' }}
                            />
                        </TouchableOpacity>
                    ),
                    headerTitleAlign: 'center',
                }}>
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        title: 'Dashboard',
                        headerShown: true,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        }
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Canteen"
                    component={Canteen}
                />
                <Stack.Screen
                    name="UserData"
                    component={UserData}
                />
                <Stack.Screen
                    name="Sessions"
                    component={Sessions}
                />
                <Stack.Screen
                    name="Fee Management"
                    component={require('./Pages/FeeManagement/ConFeeManagement').default}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
})

export default Routes;
