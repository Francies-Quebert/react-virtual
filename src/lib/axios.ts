import ax from "axios";

const axios = ax.create({
    baseURL: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/',
    timeout: 1000,
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RapidAPI_Key,
        'X-RapidAPI-Host': process.env.REACT_APP_RapidAPI_HOST
    }
});

export default axios;