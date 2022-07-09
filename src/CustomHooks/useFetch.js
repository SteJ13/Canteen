import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../App";

function useFetchApi({
    url
}) {

    const { appConfig } = useContext(AuthContext);
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    async function fetchApi() {
        try {
            await axios.get(`${appConfig.url}api/${url}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*',
                },
                timeout: 10000,
            })
                .then(res => {
                    setData(res?.data);

                })
                .catch(err => {
                    console.log('err: ', err);
                    setError(err);
                })
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchApi();
        // eslint-disable-next-line
    }, [url])

    return {
        data,
        error,
        loading,
    }
}

export default useFetchApi;
