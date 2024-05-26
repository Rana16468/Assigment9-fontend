import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"


///profile
const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    myprofile: build.query({
      query: () => ({
        url:"/user/profile/",
        method:"GET"
       
      }),
      providesTags:[tagTypes.profile]
      
    }),
    //update profile information 
    updateProfile: build.mutation({
        query: (data) => ({
          url:"/user/profile/",
          method:"PUT",
          contentType:"application/json",
          data:data
        }),
        invalidatesTags:[tagTypes.profile]
        
      }),

  }),
})

export const {useMyprofileQuery,useUpdateProfileMutation} =profileApi