'use client'
import { useDeletePetMutation, useGetAllPetsQuery } from "@/redux/api/petsApi";
import Image from "next/image";
import PetsUpdateModal from "./components/PetsUpdateModal";
import { useState } from "react";
import { toast } from "sonner";


const AllPets = () => {

    const {isLoading,data}=useGetAllPetsQuery({},{refetchOnMountOrArgChange:true});
    const [  deletePet]=useDeletePetMutation();
    const allpets=data?.data;
    const [petsId,setPetsId]=useState<string>(" ");

    const openModal = (id:string) => {
        const modal = document.getElementById('pet_update_modal') as HTMLDialogElement;
        if (modal) {
          modal.showModal();
          setPetsId(id)
          
         
        }
    }

    const handelPetsDelete=async(id:string)=>{

        const confirmation =window.confirm("Are You Sure , You Want Deeleted");
        if(confirmation)
        {
            try{
                const res=await deletePet(id).unwrap();
                console.log(res);
                  if(res.id)
                    {
                        toast.success("Successfully Deleted")
                    }
                    else{
                        toast.error("Some Issues are there");
                    }

            }
            catch(error:any){
                toast.error(error?.message);
            }
        }

    
    }


    return (
        <>
            {
                isLoading?<p>loading ...</p>: <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                       <th>No</th>
                      <th>Name</th>
                      <th>Photos</th>
                      <th>Description</th>
                      <th>Details</th>
                      <th>Health Status</th>
                      <th>Size</th>
                      <th>Location</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allpets?.map((pet:any,index:number) => (
                      <tr key={pet.id}>
                        <td>{index+1}</td>
                        <td>{pet.name}</td>
                        <td>
                          {pet.photos.map((photo:any) => (
                            <Image
                              key={photo.id}
                              src={photo.photo}
                              alt={pet.name}
                              className="w-16 h-16 rounded m-2"
                              width={50}
                              height={50}
                            />
                          ))}
                        </td>
                        <td>{pet.description}</td>
                        <td>
                          <p>Age: {pet.age}</p>
                          <p>Breed: {pet.breed}</p>
                          <p>Gender: {pet.gender}</p>
                          <p>Temperament:{pet.temperament}</p>
                          <p>MedicalHistory:{pet.medicalHistory}</p>
                        </td>
                        <td>{pet.healthstatus}</td>
                        <td>{pet.size}</td>
                        <td>{pet.location}</td>
                        <td>
                        
                         <div className="flex justify-end">
                         <button className="btn btn-primary btn-outline btn-sm" onClick={()=>openModal(pet.id)}>Edit</button>
                          <PetsUpdateModal petsId={petsId}/>
                          <button onClick={()=>handelPetsDelete(pet.id)} className="btn btn-error btn-outline btn-sm ml-2">Remove</button>
                         </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            }
        </>
    );
};

export default AllPets;