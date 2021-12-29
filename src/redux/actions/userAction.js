import axios from "axios"
import { API_URL } from "../../helper"

export const onLogin = (username, password) => {
    return async (dispatch) => {
        try {
            let res = await axios.get(`${API_URL}/users?username=${username}&password=${password}`)
            if (res.data.length > 0) {
                console.log("data",res.data)
                localStorage.setItem("data", JSON.stringify(res.data[0]))
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: res.data[0],
                })
                return { success: true }
            }
        }catch (err){
            console.log(err)
        }
    }
}

export const onRegis =(username,email,password)=>{
    return async(dispatch)=>{
        try {
            let res = await axios.post(`${API_URL}/users`,{
                username,
                email,
                password,
                role:"User",
                status:"Active",
                cart:[]
            })
            dispatch({
                type:"REGIS_SUCCESS",
                payload:res.data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export const onLogout = () => {
    return {
        type: "LOGOUT",
        
    }

}