import axios from "axios";
// import store from "@/store";
import { originalURL } from "@/API.config.js"

export const apiUserLogin = (data) => axios.post(`${originalURL}/login`, data);