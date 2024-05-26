import { IMeta } from "@/types/common";
import { tagTypes } from "../tag-types"
import { baseApi } from "./baseApi"



const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
   createPetsRequest: build.mutation({
      query: (data) => ({
        url:"/pats/",
        method:"POST",
        contentType:"application/json",
        data:data
      }),
      invalidatesTags:[tagTypes.pets]
      
    }),
    // get my pets 
    getmyallpets:build.query({
        query:()=>({
            url:"/pats/mypets",
            method:"GET",

        }),
       providesTags:[tagTypes.pets]
    
    }),
    // get All Pets
    getAllPets:build.query({
        query:()=>{
            return {
                url:"/pats/",
                method:"GET",
            }
        },
        transformResponse: (response: [], meta: IMeta) => {
            return {
              data: response,
              meta,
            };
        },
        providesTags:[tagTypes.pets]
       
    }),
    // get specific pets information 
    getSpecificPets:build.query({
        query:(id)=>{
           
            return {
                url:`/pats/${id}`,
                method:"GET"
            }
        },
        providesTags:[tagTypes.pets]

    }),
    //update pets information
    updatePetsInfo:build.mutation({
        query:({petsId,updateData})=>{
         

            return {
                url:`/pats/${petsId}`,
                method:"PATCH",
                contentType:"application/json",
                data:updateData
            }

        },
        invalidatesTags:[tagTypes.pets]
    }),
    // delete pets 
    deletePet:build.mutation({
    
        query:(id)=>{
            console.log(id);
           return {
            url:`/pats/${id}`,
            method:"DELETE"

            }
        },
        invalidatesTags:[tagTypes.pets]
    })

  }),
  // delete pets
  

})

export const { useCreatePetsRequestMutation,useGetmyallpetsQuery,useGetAllPetsQuery,
useGetSpecificPetsQuery,useUpdatePetsInfoMutation,useDeletePetMutation
 } = authApi