import axios from "axios";

const  baseUrl = `http://localhost:2000/api/v1`;



export const loginUser = (apiData) =>{

    return new Promise(async(resolve,reject)=>{
        try {
            const res = await axios.post(`${baseUrl}/login`,apiData)
          return  resolve(res.data);
        } catch (error) {
            reject(error)
        }
    })

} 

export const signupUser = (apiData) => {
return new Promise(async(resolve,reject) => {
    try {
        const res = await axios.post(`${baseUrl}/register`,apiData)
        return resolve(res.data)
    } catch(error) {
        reject(error)
    }
})
}