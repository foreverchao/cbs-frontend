import axios from "axios";
import store from "@/store";
import { originalURL } from "@/API.config.js"

export const apiUserGet = (id) => axios.get(`${originalURL}/user/${id}`,{
    headers: {
        'Authorization': `Bearer ${store.state.token}`
    }
});

export const apiUserPost = (data) => axios.post(`${originalURL}/add`,data,{
    headers: {
        'Authorization': `Bearer ${store.state.token}`
    }
});

export const apiUserLoginCheck = (data) => axios.post(`${originalURL}/userlogin`, data);

