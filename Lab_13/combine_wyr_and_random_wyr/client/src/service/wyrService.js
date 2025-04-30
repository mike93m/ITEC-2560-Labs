// This file contains the service for the WYR API
// It fetches the WYR data from the server and returns it as a JSON object
export default {
    getRandomWYR() {
        return fetch('/wyr').then((response) => {
            return response.json()
        })
    }
}