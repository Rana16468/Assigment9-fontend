import { useRequestPetAdoptionMutation } from "@/redux/api/petadoptionApi";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";


const AdoptationModel = ({petId}:{petId:string}) => {

  const { handleSubmit, register, reset ,formState:{errors}} = useForm();
  const [requestPetAdoption,{isLoading}]=useRequestPetAdoptionMutation()

  const onSubmit=async(values:FieldValues)=>{
    

    try{

     const res=await requestPetAdoption({petId,...values}).unwrap();
  
     if(res?.id)
      {
        toast.success("Successfuly Recorded Your Request");
      }
      else{
        toast.error("Some Isuues are there");
      }

    }
    catch(error:any)
    {
      toast.error(error?.message);
    }

  }
    return (
        <>
             <div className="flex justify-center items-center text-black">
        <dialog id="edit_chatbot" className="modal">
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
            <form onSubmit={handleSubmit(onSubmit)}    className="grid grid-cols-1 gap-3 mt-10">
              
              <input
                {...register("petOwnershipExperience", { required: "petOwnershipExperience" })}
                type="text"
                placeholder="petOwnershipExperience"
                className="input input-bordered w-full "
                required
              />
              {errors.petOwnershipExperience && <p role="alert">petOwnershipExperience Field Issues</p>}
              <input
                type="text"
                name="release_date"
                defaultValue={new Date().toString()}
                readOnly
                className="input input-bordered w-full "
              />

                <input
                {...register("phonenumber", { required: "phonenumber" })}
                type="text"
                placeholder="phonenumber"
                className="input input-bordered w-full "
                required
              />
               {errors.phonenumber&& <p role="alert">phonenumber Field Issues</p>}
              <br />
              {
                !isLoading?<input
                className="w-full btn-sm  btn bg-blue-900 btn-outline text-white"
                type="submit"
                value="Requested"
              />:<p>loading...</p>
              }
            </form>
          </div>
        </dialog>
      </div>
        </>
    );
};

export default AdoptationModel;