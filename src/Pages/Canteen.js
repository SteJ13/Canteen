import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import axiosInstance from '../Service/AxiosInstance';
import UserProfileView from './Profile';

const Canteen = () => {

    const [user, setUser] = useState([]);
    const [regId, setRegId] = useState('');

    const regInputRef = useRef(null);

    let cancelToken;

    useEffect(() => {
        regInputRef.current.focus();
    }, []);

    const handleSearchChange = e => {
        setRegId(e);
        if (typeof cancelToken != typeof undefined) {
            cancelToken.cancel("Operation canceled due to new request.");
        }
        cancelToken = axios.CancelToken.source()
        if (regId?.length > 8) {
            try {
                axiosInstance(
                    `testing/?roll_no=${e}`,
                    {
                        method: "GET",
                        cancelToken: cancelToken.token
                    }).then(res => {
                        setUser(res?.data?.[0]);
                        setRegId('');
                        regInputRef.current.focus();
                    }).catch(err => { console.log('err : ', err); })
            } finally {
                return user
            }
        }
    }


    return (
        <View>
            <input
                placeholder="Registered ID..."
                onChangeText={handleSearchChange}
                value={regId}
                lightTheme
                round
                ref={regInputRef}
                onBlur={() => regInputRef.current.focus()}
            />
            <View>
                {
                    user && <UserProfileView user={user} />
                }
            </View>
        </View>
    );
};

export default Canteen;