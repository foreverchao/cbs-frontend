import axios from "axios";
import store from "@/store";
import { originalURL } from "@/API.config.js"

export const apiRoomsGet = () => axios.get(`${originalURL}/rooms`,{
    headers: {
        'Authorization': `Bearer ${store.state.token}`
    }
});

export const apiRoomsPost = (data) => axios.post(`${originalURL}/rooms`,data,{
    headers: {
        'Authorization': `Bearer ${store.state.token}`
    }
});
