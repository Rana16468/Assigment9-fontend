
'use client'

import { useDeleteAdoptionRequestMutation, useGetAllPetsAdoptionQuery } from "@/redux/api/petadoptionApi";
import { useState } from "react";
import AdoptationModal from "./components/AdoptationModal";
import { toast } from "sonner";


const AllAdoptation= () => {

    const {data, isLoading}=useGetAllPetsAdoptionQuery({},{refetchOnMountOrArgChange:true});
    const [ deleteAdoptionRequest]= useDeleteAdoptionRequestMutation();
    const [adoptionId,setAdoptionId]=useState("");
    const handelDeleteAdoptiomRequest=async(id:string)=>{

        const confirmation=window.confirm("Are You Sure You Want  To delete");
        if(confirmation){
            try{

                const res=await deleteAdoptionRequest(id).unwrap();
                if(res.id){
                    toast.success('Successfully Deleted');
                }
                else{
                    toast.error("Some Issues Are There");
                }


            }
            catch(error:any){
                toast.error(error?.message);
            }
        }
    }
   

    const openModal = (id:string) => {
        const modal = document.getElementById('adoption_update_modal') as HTMLDialogElement;
        if (modal) {
          modal.showModal();
          setAdoptionId(id);
          
         
        }
    }
    return (
        <>
           
           {
            isLoading ? <p>isloading ...</p> : <div className="container mx-auto p-4">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Phone Number</th>
                    <th>Pet Ownership Experience</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item:any,index:number) => (
                    <tr key={item.id}>
                      <td>{index +1}</td>
                      <td>{item.user.name}</td>
                      <td>{item.user.email}</td>
                      <td>{item.status}</td>
                      <td>{item.phonenumber}</td>
                      <td>{item.petOwnershipExperience}</td>
                      <td>
                       <div className="flex justify-center ">
                       <button className="btn btn-primary btn-outline btn-sm mr-2" onClick={()=>openModal(item.id)}>Adoption Request</button>
                       < AdoptationModal adoptionId={adoptionId}/>
                        <button onClick={()=>handelDeleteAdoptiomRequest(item.id)} className="btn btn-error btn-sm">Delete</button>
                       </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
           }
          
        </>
    );
};

export default  AllAdoptation;