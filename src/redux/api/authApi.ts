import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"



const  authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
   useLogin: build.mutation({
      query: (data) => ({
        url:"/auth/login",
        method:"POST",
        contentType:"application/json",
        data:data
      }),
      invalidatesTags:[tagTypes.auth]
      
    }),
    //chnage password

    chnagePassword:build.mutation({
      query:(data)=>({
        url:"/auth/chnage-password",
        method:"POST",
        contentType:"application/json",
        data:data
      }),
      invalidatesTags:[tagTypes.auth]
    })
  }),

 
})

export const { useUseLoginMutation,useChnagePasswordMutation } = authApi





