import axios from "axios"


export const api = axios.create({
    baseURL: "http://moubra.web15f98.uni5.net/eletrocan/apiphp/",
    timeout: 5000,
})



