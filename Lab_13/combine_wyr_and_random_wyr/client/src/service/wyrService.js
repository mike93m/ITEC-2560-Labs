export default {
    getRandomWYR() {
        return fetch('/wyr').then((response) => {
            return response.json()
        })
    }
}