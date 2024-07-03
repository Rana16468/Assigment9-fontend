'use client'
import { useDeletePetMutation, useGetAllPetsQuery } from "@/redux/api/petsApi";
import Image from "next/image";
import PetsUpdateModal from "./components/PetsUpdateModal";
import { useState } from "react";
import { toast } from "sonner";
import { genderOptions, sizeOptions, specialNeeds } from "@/utils/DemoData/DemoData";


const AllPets = () => {

    const {isLoading,data}=useGetAllPetsQuery({},{refetchOnMountOrArgChange:true});
    const [  deletePet]=useDeletePetMutation();
    const allpets=data?.data;
    const [petsId,setPetsId]=useState<string>(" ");
    const [search, setSearch] = useState('');
    const [filters, setFilters] = useState({
      size: '',
      gender: '',
      specialNeeds: '',
    });


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


            {/* pet searching */}

         <div className="container mx-auto p-4">
        <div className="flex justify-center items-center">
          <div className="m-1">
            <label className="block mb-2">Size</label>
            <select
              className="select select-bordered w-20"
              value={filters.size}
              onChange={(e) => setFilters({ ...filters, size: e.target.value })}
            >
                <option value="">All</option>
              {
                sizeOptions.map((size,index)=><option key={index} value={size}>{size}</option>
              )
              }
               
            </select>
          </div>
          <div className="m-1">
            <label className="block mb-2">Gender</label>
            <select
              className="select select-bordered w-20"
              value={filters.gender}
              onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
            >
              <option value="">All</option>
              {
                genderOptions?.map((gender,index)=><option key={index} value={gender}>{gender}</option>)
              }
            </select>
          </div>
          <div className="m-1">
            <label className="block mb-2">Special Needs</label>
            <select
              className="select select-bordered w-20"
              value={filters.specialNeeds}
              onChange={(e) => setFilters({ ...filters, specialNeeds: e.target.value })}
            >
              <option value="">All</option>
             {
                specialNeeds?.map((needs,index)=><option key={index} value={needs}>{needs}</option>)
             }
            </select>
          </div>

          <div className="flex justify-between items-center mt-9">
        <input
          type="text"
          placeholder="Search by pet type, breed, age, location..."
          className="input input-bordered w-full max-w-xs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
        </div>
        
        
      </div>
  

            
            {/* card  */}
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
                    {allpets?.filter((pet:any)=>{

                          const matchesSearch = search === '' || 
                          pet?.age?.toLowerCase().includes(search.toLowerCase()) || 
                           pet?.species?.toLowerCase().includes(search.toLowerCase()) || 
                          pet?.location?.toLowerCase().includes(search.toLowerCase()) || 
                          pet?.breed?.toLowerCase().includes(search.toLowerCase());

                         const matchesSize = filters.size === '' || pet?.size?.toLowerCase() === filters.size.toLowerCase();
                         const matchesGender = filters.gender === '' || pet?.gender?.toLowerCase() === filters.gender.toLowerCase();
                         const matchesSpecialNeeds = filters.specialNeeds === '' || pet?.specialneeds?.toLowerCase() === filters.specialNeeds.toLowerCase();

                return matchesSearch && matchesSize && matchesGender && matchesSpecialNeeds;
                    }).map((pet:any,index:number) => (
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