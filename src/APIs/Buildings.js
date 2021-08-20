import axios from "axios";
import store from "@/store";
import { originalURL } from "@/API.config.js"

export const apiBuildsGet = () => axios.get(`${originalURL}/builds`,{
    headers: {
        'Authorization': `Bearer ${store.state.token}`
    }
});