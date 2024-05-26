import { authKey } from "@/contant/authkey"
import { getFromLocalStorage, removeFromLocalStorage, setLocalStorage } from "@/utils/LocalStore/LocalStore"
import { decodedToken } from "@/utils/jwt";
import { instance as axiosInstance  } from "@/helpers/axios/axiosInstance"



export const storeUserInfo=({accessToken}:{accessToken:string})=>{

    return setLocalStorage(authKey,accessToken);
 }

 export const getUserInfo=()=>{

    const authToken=getFromLocalStorage(authKey);
     if(authToken)
      {
          const decodedData:any=decodedToken(authToken);
          return {
              ...decodedData,
              role:decodedData?.role?.toLowerCase()
          }
  
      } 
  }

  export const  isLoggedIn=()=>{

    const authToken=getFromLocalStorage(authKey);
    if(authToken)
        {
            return !!authToken
        }
      return false
}

export const getNewAccessToken=async()=>{
    return await axiosInstance({

      
      url:"https://level2-assigment9.vercel.app/api/v1/auth/refreshToken",
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      withCredentials:true
    })
  }

export const removeUser=()=>{

    return removeFromLocalStorage(authKey);
}
