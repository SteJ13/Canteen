import React, { createContext, useLayoutEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Alert from "react-native-awesome-alerts";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from './src/Routes';
import Loader from './src/Components/Loader';
import Login from './src/Pages/Users/Login';
import CollegeSelect from './src/Pages/CollegeSelect';


export const AuthContext = createContext();
const Stack = createNativeStackNavigator();

export default function App() {

  const [appConfig, setAppConfig] = useState(null);
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);

  const [loader, setLoader] = useState(true);
  const [alert, setAlert] = useState({ show: false, title: '', message: '' });

  useLayoutEffect(() => {
    const getData = async () => {
      let appConfig = await AsyncStorage.getItem('hgp_selected_college');
      if (appConfig) setAppConfig(JSON.parse(appConfig));
      let user = await AsyncStorage.getItem('hgp_user_details');
      if (user) {
        setUser(JSON.parse(user));
        setAuth(true);
      }
      setLoader(false);
    }
    getData();
  }, [])

  const handleLogout = async () => {
    setLoader(true);
    try {
      await AsyncStorage.removeItem('hgp_user_details');
      setLoader(false);
      setAuth(false);
    } catch (error) {
      setLoader(false);
    }
  }


  const contextData = {
    appConfig,
    user,
    setUser,
    auth,
    handleLogout,
    setAuth,
    setAlert,
    setAppConfig
  }


  if (loader) return <Loader />

  return (
    <SafeAreaProvider style={styles.bg}>
      <AuthContext.Provider value={contextData}>
        {
          !auth &&
          <NavigationContainer>
            <Stack.Navigator>
              {
                !appConfig &&
                <Stack.Screen
                  name="CollegeSelect"
                  component={CollegeSelect}
                  options={{
                    headerShown: false
                  }}
                />
              }
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: false
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        }
        {appConfig && auth &&
          <Routes />
        }
        <Alert
          show={alert?.show}
          title={alert?.title}
          message={alert?.message}
          closeOnTouchOutside={true}
          onDismiss={() => setAlert({ show: false })}
        />
      </AuthContext.Provider>
    </SafeAreaProvider >
  );
}
const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#fff',
  },
})