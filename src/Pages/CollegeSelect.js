import { Button } from '@rneui/base';
import React, { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, View, Image } from 'react-native';
import Dropdown from '../Components/Dropdown';
import { AuthContext } from '../../App';
import axios from 'axios';


const CollegeSelect = ({ navigation }) => {

    const data = [
        { name: 'Don Bosco College, Yelagiri Hills', id: 1, 'url': 'http://localhost:8000/' },
        { name: 'St. Annes College', id: 2, 'url': 'https://ssac.higrade.live/' },
    ];

    const { setAppConfig } = useContext(AuthContext);

    const [selected, setSelected] = React.useState(null);

    const handleSubmit = async () => {
        if (selected) {
            await AsyncStorage.setItem('hgp_selected_college', JSON.stringify(
                data.filter(item => item.id === selected)[0]
            ));
            let url = data.filter(item => item.id === selected)[0].url;
            axios.defaults.baseURL = `${url}api/`;
            // axios.defaults.headers.common['Authorization'] = `Bearer ${config.token}`;
            axios.defaults.headers.common['Accept'] = '*/*';
            axios.defaults.headers.common['Content-Type'] = 'application/json';
            setAppConfig(data.filter(item => item.id === selected)[0]);
            navigation.navigate('Login');
        }
    }

    return (
        <View style={[styles.container]}>
            <Image source={require('../assets/images/hgp_logo.png')} style={styles.image} />
            <View style={styles.dropdown}>
                <Dropdown data={data} handleChange={(item) => setSelected(item)} value={selected} />
            </View>
            <Button
                size="sm"
                disabled={!selected ? true : false}
                disabledStyle={{ backgroundColor: '#766eff' }}
                containerStyle={{ borderRadius: 5 }}
                onPress={handleSubmit}
            >Get In</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#04bfc2'

    },
    image: {
        width: '100%',
        height: 70,
    },
    dropdown: {
        marginTop: 20,
        width: '80%',
        height: 50,
    }
});

export default CollegeSelect;


