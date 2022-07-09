import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import CandidateProfile from './CandidateProfile';

const Canteen = () => {

    const [user, setUser] = useState([]);
    const [loader, setLoader] = useState(false);

    const [searchTerm, setSearchTerm] = useState('')

    const regInputRef = useRef(null);

    let cancelToken;

    useEffect(() => {
        regInputRef.current.focus();
    }, []);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (typeof cancelToken != typeof undefined) {
                cancelToken.cancel("Operation canceled due to new request.");
            }
            cancelToken = axios.CancelToken.source()
            if (searchTerm?.length > 0) {
                try {
                    axios.get(
                        `testing/?roll_no=${searchTerm}`,
                        {
                            cancelToken: cancelToken.token
                        }).then(res => {
                            setUser(res?.data?.[0]);
                            setSearchTerm('');
                            regInputRef.current.focus();
                        }).catch(err => { console.log('err : ', err); })
                } finally {
                    setLoader(false);
                    return user
                }
            }
        }, 1000)
        if (searchTerm?.length > 0) setLoader(true);
        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])

    return (
        <View style={styles.container}>
            <View style={styles.rollInputContainer}>
                <input
                    value={searchTerm}
                    ref={regInputRef}
                    onBlur={() => regInputRef.current.focus()}
                    type='text'
                    autoComplete='off'
                    className='live-search-field'
                    placeholder='Search here...'
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ height: 5, borderRadius: 10, padding: 15 }}
                />
            </View>
            <View>
                {
                    user && <CandidateProfile user={user} loader={loader} />
                }
            </View>
        </View>
    );
};

export default Canteen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#DCDCDC"
    },
    rollInputContainer: {
        margin: 10
    }
})