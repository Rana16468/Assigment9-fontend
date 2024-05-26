import { useGetSpecificPetsQuery, useUpdatePetsInfoMutation } from "@/redux/api/petsApi";
import { genderOptions, healthStatus, sizeOptions, specialNeeds, speciesOptions } from "@/utils/DemoData/DemoData";
import { toast } from "sonner";


const PetsUpdateModal = ({petsId}:any) => {

    console.log(petsId);

    const {data, isLoading}=useGetSpecificPetsQuery(petsId,{refetchOnMountOrArgChange:true});
    const [updatePetsInfo,{isLoading:UpdateLoading}]=useUpdatePetsInfoMutation();
   

    const onSubmit=async(event:any)=>{

        event.preventDefault();
        const element = event.target;
        const name=element.name.value;
        const species=element.species.value;
        const breed=element.breed.value;
        const age=element.age.value;
        const size=element.size.value;
        const location=element.location.value;
        const temperament=element.temperament.value;
        const medicalHistory=element.medicalHistory.value;
        const adoptionRequirements=element.adoptionRequirements.value;
        const healthstatus=element.healthstatus.value;
        const specialneeds=element.specialneeds.value;
        const gender=element.gender.value;
        const contractNumber=element.contractNumber.value;
        const description= element.description.value;

        const updateData={
            name,
            species,
            breed,
            age,
            size,
            location,
            temperament,
            medicalHistory,
            adoptionRequirements,
            healthstatus,
            specialneeds,
            gender,
            contractNumber,
            description
        }
       
        try{
            const res=await updatePetsInfo({petsId,updateData}).unwrap();

               if(res?.id)
                {
                  toast.success("Successfully Updated")
                }
                else{
                    toast.error("Some Issues are there");
                }

        }
        catch(error:any)
        {
            toast.error(error?.message);
        }









     
        

    }
    return (
        <div className="flex justify-center items-center text-black">
        <dialog id="pet_update_modal" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm bg-green-500 btn-circle absolute right-2 top-2">
                ✕
              </button>
              <h3 className=" font-bold text-2xl font-seri">
               Adoption Request
              </h3>
            </form>

             <div>
             <form onSubmit={onSubmit}     className="grid grid-cols-1 gap-3 mt-10">
              

              <div className="col-span-6 sm:col-span-3">
                 <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Pet Name</label>
                 <input type="text"   defaultValue={data?.name} name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="name" />
                 
             </div>
             <div className="col-span-6 sm:col-span-3">
                 <label htmlFor="species" className="text-sm font-medium text-gray-900 block mb-2">Species</label>
                 <select name="species"   className="select select-info w-full max-w-full" >
                 <option disabled>Select Species</option>
                 <option disabled selected className="text-lime-400">{data?.species}</option>
                  {
                     speciesOptions.map((v:string,index:number)=> <option key={index}>{v}</option>)
                  }
                
               </select>
             </div>
             <div className="col-span-6 sm:col-span-3">
                 <label htmlFor="breed" className="text-sm font-medium text-gray-900 block mb-2">Breed</label>
                 <input type="text" defaultValue={data?.breed}   name=""  id="breed" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Breed" />
             </div>
             <div className="col-span-6 sm:col-span-3">
                 <label htmlFor="age" className="text-sm font-medium text-gray-900 block mb-2">Age</label>
                 <input type="text"  defaultValue={data?.age}   name="age"  id="age" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Age" />
             </div>
             <div className="col-span-6 sm:col-span-3">
             <label htmlFor="size" className="text-sm font-medium text-gray-900 block mb-2">Size</label>
                 <select name="size"   className="select select-info w-full max-w-full" >
                 <option disabled >Select Size</option>
                 <option disabled selected className="text-lime-400">{data?.size}</option>
                  {
                     sizeOptions.map((v:string,index:number)=> <option key={index}>{v}</option>)
                  }
                
               </select>
             </div>
             <div className="col-span-6 sm:col-span-3">
                 <label htmlFor="location"  className="text-sm font-medium text-gray-900 block mb-2">Location</label>
                 <input type="text"  defaultValue={data?.location}   name="location" id="location" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="location" />
             </div>
             <div className="col-span-6 sm:col-span-3">
                 <label htmlFor="temperament" className="text-sm font-medium text-gray-900 block mb-2">Temperament</label>
                 <input type="text"  defaultValue={data?.temperament} name="temperament" id="temperament" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="temperament" />
             </div>
             <div className="col-span-6 sm:col-span-3">
                 <label htmlFor="medicalHistory" className="text-sm font-medium text-gray-900 block mb-2">Medical History</label>
                 <input type="text" defaultValue={data?.medicalHistory}  name="medicalHistory" id="medicalHistory" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="medicalHistory" />
             </div>
             <div className="col-span-6 sm:col-span-3">
                 <label htmlFor="adoptionRequirements" className="text-sm font-medium text-gray-900 block mb-2">Adoption Requirements</label>
                 <input type="text"  defaultValue={data?.adoptionRequirements}  name="adoptionRequirements" id="adoptionRequirements" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="adoptionRequirements" />
             </div>
             <div className="col-span-6 sm:col-span-3">
                <label htmlFor="healthstatus" className="text-sm font-medium text-gray-900 block mb-2">Health Status</label>
                 <select name="healthstatus"  defaultValue={data?.healthstatus}  className="select select-info w-full max-w-full" >
                 <option disabled >Select healthstatus</option>
                  <option disabled selected className="text-lime-400">{data?.healthstatus} </option>
                  {
                    healthStatus.map((v:string,index:number)=> <option key={index}>{v}</option>)
                  }
                
               </select>
             </div>
             <div className="col-span-6 sm:col-span-3">
                 <label htmlFor="specialneeds" className="text-sm font-medium text-gray-900 block mb-2">Special Needs</label>
                 <select name="specialneeds"   className="select select-info w-full max-w-full" >
                 <option disabled >Select Special Needs</option>
                 <option disabled selected className="text-lime-400"> {data?.specialneeds}</option>
                  {
                    specialNeeds.map((v:string,index:number)=> <option key={index}>{v}</option>)
                  }
                
               </select>
             </div>
             <div className="col-span-6 sm:col-span-3">
             <label htmlFor="gender" className="text-sm font-medium text-gray-900 block mb-2">Gender</label>
                 <select name="gender"  className="select select-info w-full max-w-full" >
                 <option disabled>Select Special Needs</option>
                 <option selected className="text-lime-400">{data?.gender}</option>
                  {
                     genderOptions.map((v:string,index:number)=> <option key={index}>{v}</option>)
                  }
                
               </select>
             </div>
             <div className="col-span-6 sm:col-span-3">
                 <label htmlFor="contractNumber" className="text-sm font-medium text-gray-900 block mb-2">Contract Number</label>
                 <input type="text"   defaultValue={data?.contractNumber} name="contractNumber" id="contractNumber" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Contract Number" />
             </div>
                <div className="col-span-6 sm:col-span-3">
                     <label htmlFor="description"  className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                     <textarea id="description" name="description"   defaultValue={data?.description} rows={6} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="description" ></textarea>
                 </div>
 
                 
                 {
                    !UpdateLoading? <div className="p-6 border-t border-gray-200 rounded-b">
                    <button   className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Update</button>
                 </div>:<p>Loading</p>
                 }
             
             </form>
            </div> 
          </div>
        </dialog>
      </div>
    );
};

export default PetsUpdateModal;