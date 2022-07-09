export function Config() {

    var envType = process.env.NODE_ENV;
    var session_id = {};
    if (envType === "development") {
        session_id = { 'X-Openerp-Session-Id': "293a45aa430bf5cf4017c26382a5abc271c76889" }
    }

    const axiosInstance = {
        timeout: 10000,
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json, text/plain, */*',
            'Access-Control-Allow-Origin': 'http://localhost:8000',
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            ...session_id
        }
    }
    return axiosInstance;
}