import React from 'react';
import { View, StyleSheet, Text, Button, Platform } from 'react-native';
import RazorpayCheckout from '../../RazorPay';
import { WebView } from 'react-native-webview';

const Payment = () => {

    console.log('===============================', Platform.OS);

    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: 'https://rzp.io/i/QKHvGqEo' }}
                startInLoadingState={true}
                scalesPageToFit={true} />
        </View>
        // <WebView
        //     source={{ uri: 'https://rzp.io/i/QKHvGqEo' }}
        //     style={{ width: 320 }}
        // />
    );
}

const styles = StyleSheet.create({})

export default Payment;
