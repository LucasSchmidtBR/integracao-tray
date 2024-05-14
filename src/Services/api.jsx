import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost/eletrocan/api/",
    timeout: 5000,
})

const fetch = async( )=>{
    try {
        const response = await api.get("products/all")
        if(response.data){
            return response
        }else{
            return[
                {
                    message: "nenhum produto a ser atualizado"
                }
            ]
        }
    } catch (error) {
        console.log(error)
    }
}


export const {data} = await fetch()


