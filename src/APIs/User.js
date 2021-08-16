import axios from "axios";
import store from "@/store";
import { originalURL } from "@/API.config.js"

export const apiUserGet = (id) => axios.get(`${originalURL}/user/${id}`,{
    headers: {
        'Authorization': `Bearer ${store.state.token}`
    }
});

