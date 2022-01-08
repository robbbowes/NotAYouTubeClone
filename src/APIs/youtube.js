import axios from "axios"

const RESTRICTED_PUBLIC_KEY = 'AIzaSyDzSJqr0jjE2HEkf9yHOyEgkX3Ua6hTPKc'

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: RESTRICTED_PUBLIC_KEY
    }
})