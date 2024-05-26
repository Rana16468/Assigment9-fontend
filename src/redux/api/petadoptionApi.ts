import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"



const petsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    requestPetAdoption: build.mutation({
      query: (data) => ({
        url:"/adoption/",
        method:"POST",
        contentType:"application/json",
        data:data
      }),
      invalidatesTags:[tagTypes.adoption]
      
    }),
    // get all adoption 
    getAllPetsAdoption:build.query({
      query:()=>({
        url:"/adoption/",
        method:"GET"
      }),
      providesTags:[tagTypes.adoption]
    }),
    // update Status 
    updateAdoptionStatus:build.mutation({
      query:({id,updateStatus})=>{

        return {
          url:`/adoption/${id}`,
          method:"PUT",
          contentType:"application/json",
          data:updateStatus
        }
      },
      invalidatesTags:[tagTypes.adoption]
    }),
    // delete Adoption Requested
    deleteAdoptionRequest:build.mutation({
      query:(id)=>{
        console.log(id);
        return {
          url:`/adoption/${id}`,
          method:"DELETE",
          
        }
      },
      invalidatesTags:[tagTypes.adoption]
    })

  }),
 
})

export const { useRequestPetAdoptionMutation,useGetAllPetsAdoptionQuery,useUpdateAdoptionStatusMutation,
  useDeleteAdoptionRequestMutation
 } =petsApi