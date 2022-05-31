export function Config() {

    // let access = true;
    // let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyMTg2NTkzLCJqdGkiOiI1MTI0MDg4NzE2NDk0ODg5OTI3NzFkMTFiZWUxZmQwNyIsInVzZXJfaWQiOjR9.D7IFHw1MLTxxDtBC1s3PdJpi82PDBAYq-R1Ro297Wcc'

    const axiosInstance = {
        baseURL: 'http://127.0.0.1:8000/api/',
        timeout: 10000,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
        }
    }

    // if (access) {
    //     axiosInstance.headers['Authorization'] = 'JWT ' + token
    // }

    return axiosInstance;
}