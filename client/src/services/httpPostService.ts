import { BASE_URL } from "@/constants/api"
import { getToken } from "./authServices";

export const httpPostService = async (url:string,body:any) => {
    
    const token = getToken() as string
    
    try {
        const response = await fetch(`${BASE_URL}${url}`, {
            //mode: 'no-cors',

            headers: {
                'Content-Type': 'application/json',
                'token': token
            },
            method: "POST",
            body
        });
 
        const res = await response.json()
        
        
        return res

    }catch (error) {
        
        return {status:"error",error:error,data:undefined}

    }
}