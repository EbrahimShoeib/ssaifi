import { BASE_URL } from "@/constants/api";
import { getToken } from "./authServices";

export const httpPostFormDataService = async (url:string,body:any) =>  {
    const token = getToken() as string
    
    try {

        const response = await fetch(`${BASE_URL}${url}`, {
            //mode: 'no-cors',

            headers: {
                'token': token
            },
            method: "POST",
            body
        });
 
        const res = await response.json()
        
        return res

    }catch (error) {
        return {status:"error",error:error,data:null}

    }
}

