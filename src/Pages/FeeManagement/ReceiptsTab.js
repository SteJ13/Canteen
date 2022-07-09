import React, { memo, useContext } from 'react';
import {
    StyleSheet, ScrollView, View, Text, TouchableOpacity, Platform,
    PermissionsAndroid,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import * as Linking from 'expo-linking';
// import RNFetchBlob from 'rn-fetch-blob';
import { AuthContext } from '../../../App';

const ReceiptsTab = ({ data }) => {

    const { setAlert } = useContext(AuthContext);

    const fileUrl = 'https://www.techup.co.in/wp-content/uploads/2020/01/techup_logo_72-scaled.jpg';

    const checkPermission = async () => {
        if (Platform.OS === 'ios') {
            downloadFile();
        } else {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storage Permission Required',
                        message:
                            'Application needs access to your storage to download File',
                    }
                );
                console.log('granted: ', granted);
                console.log('PermissionsAndroid: ', PermissionsAndroid);
                downloadFile();
                // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //     downloadFile();
                //     console.log('Storage Permission Granted.');
                // } else {
                //     // If permission denied then show alert
                //     setAlert({ show: true, title: 'Download Failed', message: 'Storage Permission Not Granted' });
                // }
            } catch (err) {
                // To handle permission related exception
                console.log("++++" + err);
            }
        }
    };

    const downloadFile = () => {
        console.log('========************##################');
        // Get today's date to add the time suffix in filename
        let date = new Date();
        // File URL which we want to download
        let FILE_URL = fileUrl;
        // Function to get extention of the file url
        let file_ext = getFileExtention(FILE_URL);

        file_ext = '.' + file_ext[0];

        // config: To get response by passing the downloading related options
        // fs: Root directory path to download
        const { config, fs } = RNFetchBlob;
        let RootDir = fs.dirs.PictureDir;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                path:
                    RootDir +
                    '/file_' +
                    Math.floor(date.getTime() + date.getSeconds() / 2) +
                    file_ext,
                description: 'downloading file...',
                notification: true,
                // useDownloadManager works with Android only
                useDownloadManager: true,
            },
        };
        config(options)
            .fetch('GET', FILE_URL)
            .then(res => {
                // Alert after successful downloading
                console.log('res -> ', JSON.stringify(res));
                alert('File Downloaded Successfully.');
            });
    };

    const getFileExtention = fileUrl => {
        // To get the file extension
        return /[.]/.exec(fileUrl) ?
            /[^.]+$/.exec(fileUrl) : undefined;
    };


    return (
        <ScrollView style={{ flex: 1, padding: "10px" }}>
            {
                data.map((item, index) => {
                    return (
                        <View style={styles.mainCardView} key={index}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ marginLeft: 5, marginRight: 5, width: "100%" }}>
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            color: 'black',
                                            fontWeight: 'bold',
                                            fontFamily: 'nunitoBold',
                                            textTransform: 'capitalize',
                                        }}>
                                        {item.name}
                                    </Text>
                                    <View
                                        style={{
                                            marginTop: 4,
                                            borderWidth: 0,
                                            width: '100%',
                                        }}>
                                        <Text
                                            style={styles.subText}>
                                            Ref.No: {item.refNo}
                                        </Text>
                                        <Text
                                            style={styles.subText}>
                                            Receipt No: {item.recNo}
                                        </Text>
                                        <Text
                                            style={styles.subText}>
                                            Paid:
                                            <Text
                                                style={{
                                                    color: '#00bcd4',
                                                    fontWeight: 'bold',
                                                    marginLeft: 3
                                                }}>
                                                {item.paAm}
                                            </Text> on {item.dop}
                                        </Text>
                                    </View>
                                </View>
                                {/* <TouchableOpacity style={styles.subCardView} onPress={() => checkPermission()}> */}
                                <TouchableOpacity style={styles.subCardView} onPress={() => Linking.openURL(item.src)}>
                                    <Entypo name="download" size={20} color="#a8329b" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })
            }


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    subText: {
        color: 'gray',
        fontSize: 12,
    },
    mainCardView: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: 'shadowColor',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 5,
        marginRight: 5,
    },
    subCardView: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'history_back',
        borderColor: '#a8329b',
        borderWidth: 1,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
})

export default memo(ReceiptsTab);
