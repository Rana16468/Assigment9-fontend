"use client"


import { useChnagePasswordMutation } from "@/redux/api/authApi";
import Image from "next/image";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";


const  ChangePassword = () => {

    const { handleSubmit, register, reset} = useForm();

    const [chnagePassword]=useChnagePasswordMutation()
 

    // password Chnage
      const onSubmit=async(values:FieldValues)=>{
        console.log(values)
      
        if (values.newpassword.length < 6) {
            
            toast.error("Min 6 Digit Password Needed")
            return 
          }
      
          if (values.newpassword!== values?.confirmpassword) {
            toast.error("Password Not Match");
            return
          }

          try {
            const res=await chnagePassword({currentpassword:values.currentpassword,newpassword:values.newpassword}).unwrap();
            if(res?.id)
            {
              toast.success("Password Chnage Successfully");
              reset();
            }
            else{
                toast.error("Some Issues are There");
            }
          }
          catch(error:any){
            toast.error(error?.message);
          }

      }
    return (
        <>
          

           <div
          className="w-full px-4 py-2 md:w-full  lg:w-full  "
          style={{ backgroundImage: `url("")` }}>
        
          <div className=" flex items-center justify-center h-screen">
            <div className=" bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
              <div className="flex items-center space-x-2 mb-6">
                <Image
                  src="https://unsplash.it/40/40?image=883"
                  alt="Lock Icon"
                  className="rounded-full"
                  width={50}
                  height={50}
                />
                <h1 className="text-xl font-semibold">Change Password</h1>
              </div>
              <p className="text-sm text-gray-600 mb-6">
                Update password for enhanced account security.
              </p>
              <form
               onSubmit={handleSubmit(onSubmit)}
                id="changePasswordForm"
                className="space-y-6">
                <div>
                  <label
                    htmlFor="currentPassword"
                    className="text-sm font-medium text-gray-700 block mb-2">
                    Current Password *
                  </label>
                  <input
                    type="password"
                    id="currentpassword"
                    {...register("currentpassword", { required: "currentpassword is required" })}
                    className="input input-bordered w-full max-w-full"
                    required
                  />
                 
                </div>
                <div>
                  <label
                    htmlFor="newPassword"
                    className="text-sm font-medium text-gray-700 block mb-2">
                    New Password *
                  </label>
                  <input
                    type="password"
                    id="newpassword"
                    {...register("newpassword", { required: "newpassword is required" })}
                    className="input input-bordered w-full max-w-full"
                    required
                  />
                  
                </div>
                <div>
                  <label
                    htmlFor="confirmpassword"
                    className="text-sm font-medium text-gray-700 block mb-2">
                    Confirm New Password *
                  </label>
                  <input
                    type="password"
                    id="confirmpassword"
                    {...register("confirmpassword", { required: "confirmpassword  is required" })}
                    className="input input-bordered w-full max-w-full"
                    required
                  />
                  <button
                    type="button"
                     onClick={()=>reset()}
                    className="text-xs text-blue-600 hover:underline mt-1">
                    Clear
                  </button>
                </div>
                <div id="passwordCriteria" className="text-sm space-y-2">
                  <p className="text-red-500">Weak password. Must contain:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>At least 1 uppercase</li>
                    <li>At least 1 number</li>
                    <li>At least 8 characters</li>
                  </ul>
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                   
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:border-blue-300">
                    Discard
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">
                    Apply Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </>
    );
};

export default ChangePassword ;