import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"



const  userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
   userRegistertion: build.mutation({
      query: (data) => ({
        url:"/user/register",
        method:"POST",
        contentType:"application/json",
        data:data
      }),
      invalidatesTags:[tagTypes.user]
    }),
    // get all user
    getAllUser:build.query({
        query:()=>({
            url:"/user/alluser",
            method:"GET"
        }),
        providesTags:[tagTypes.user]
    }),
    //update user status 
    updateUserStatus:build.mutation({
        query:(data)=>({
            url:"/user/mystatus",
            method:"PATCH",
            contentType:"application/json",
            data:data
        }),
        invalidatesTags:[tagTypes.user]
    })


  }),
})

export const { useUserRegistertionMutation,useGetAllUserQuery,useUpdateUserStatusMutation} =   userApi 





