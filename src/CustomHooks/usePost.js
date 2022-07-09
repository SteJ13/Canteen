import { useCallback, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../App";

const usePost = ({ url, data }) => {
    const { appConfig } = useContext(AuthContext);

    const [pdata, setData] = useState(null);
    const [perror, setError] = useState(null)
    const [ploading, setLoading] = useState(false)
    let headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*',
    };

    const callAPI = useCallback(() => {
        setLoading(true);
        axios.post(`${appConfig.url}api/${url}`, data, headers
        ).then(res => {
            setData(res.data);
        }).catch((error) => {
            setError(error);
        }).finally(() => setLoading(false));
    }, [url, data])
    return [pdata, perror, ploading, callAPI];
}

export default usePost;