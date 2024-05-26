'use client'
import { useCreatePetsRequestMutation } from "@/redux/api/petsApi";
import { genderOptions, healthStatus, sizeOptions, specialNeeds, speciesOptions } from "@/utils/DemoData/DemoData";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const CreatePetsRequest = () => {

    const { handleSubmit, register, reset ,formState:{errors}} = useForm();

    const [ createPetsRequest]=useCreatePetsRequestMutation();

    const onSubmit=async (values:FieldValues)=>{

        const {photo,...data}=values;

      /*  const files = values.photo;
        console.log(values);

        if (files.length === 0) {
            toast.error("No files selected");
            return;
        }

        const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_KEY}`;

        for (let i = 0; i < files.length; i++) {
            const formData = new FormData();
            formData.append('image', files[i]); // Ensure the key matches the server-side expectation

            try {
                const res = await fetch(url, {
                    method: "POST",
                    body: formData,
                });

                if (!res.ok) {
                    throw new Error("API ERROR");
                }

                const imgData = await res.json();
              
                console.log(imgData?.data?.url);
            } catch (error) {
                console.log(error);
                toast.error("Failed to upload image");
            }
        }*/

        const files = photo;
        const url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_KEY}`;
    
        const uploadedPhotos = await Promise.all(
          Array.from(files).map(async (file) => {
            const formData = new FormData();
            formData.append('image', file as any);  // Make sure to use 'image' as the key if that is what the API expects
    
            const response = await fetch(url, {
              method: "POST",
              body: formData,
            });

            
    
            if (!response.ok) {
              throw new Error("API ERROR");
            }
    
            const imgData = await response.json();
            return { photo: imgData.data.url }; // Store the photo URL in the format you need
          })
        );

        const createPost={
            ...data,
            photos:uploadedPhotos

        }

        if(!uploadedPhotos?.length)
        {
            toast.error("Image Uploding Issues");
        }
        try{
            const res=await createPetsRequest(createPost).unwrap();
            if(res.count)
            {
              toast.success("Successfuly Pet Quested Created");
              reset();
            }
        }
        catch(error:any)
        {
            toast.error(error?.message);
        }
        
      }
    return (
        <>
          <div className=" mt-20 ">
          <div className="bg-white border  rounded-lg shadow relative">

            <div className="flex items-start justify-between p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold">
                  Pets Request
                 </h3>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
          </div>

<div className="p-6 space-y-6">
    <form onSubmit={handleSubmit(onSubmit)} >
        <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Pet Name</label>
                <input type="text"  {...register("name", { required: "name is required" })} name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="name" required/>
                {errors.name && <p role="alert">name Field Issues</p>} {errors.name && <p role="alert">Name Field Issues</p>}
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="species" className="text-sm font-medium text-gray-900 block mb-2">Species</label>
                <select {...register("species", { required: "species is required" })} className="select select-info w-full max-w-full" required>
                <option disabled selected>Select Species</option>
                 {
                    speciesOptions.map((v:string,index:number)=> <option key={index}>{v}</option>)
                 }
               
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="breed" className="text-sm font-medium text-gray-900 block mb-2">Breed</label>
                <input type="text" {...register("breed", { required: "breed is required" })} name="breed"  id="breed" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Breed" required/>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="age" className="text-sm font-medium text-gray-900 block mb-2">Age</label>
                <input type="text"  {...register("age", { required: "age is required" })} name="age"  id="age" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Age" required/>
            </div>
            <div className="col-span-6 sm:col-span-3">
            <label htmlFor="size" className="text-sm font-medium text-gray-900 block mb-2">Size</label>
                <select {...register("size", { required: "size is required" })} className="select select-info w-full max-w-full" required>
                <option disabled selected>Select Size</option>
                 {
                    sizeOptions.map((v:string,index:number)=> <option key={index}>{v}</option>)
                 }
               
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="location"  className="text-sm font-medium text-gray-900 block mb-2">Location</label>
                <input type="text" {...register("location", { required: "location is required" })} name="location" id="location" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="location" required/>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="temperament" className="text-sm font-medium text-gray-900 block mb-2">Temperament</label>
                <input type="text" {...register("temperament", { required: "temperament is required" })} name="temperament" id="temperament" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="temperament" required/>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="medicalHistory" className="text-sm font-medium text-gray-900 block mb-2">Medical History</label>
                <input type="text" {...register("medicalHistory", { required: "medicalHistory is required" })} name="medicalHistory" id="medicalHistory" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="medicalHistory" required/>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="adoptionRequirements" className="text-sm font-medium text-gray-900 block mb-2">Adoption Requirements</label>
                <input type="text" {...register("adoptionRequirements", { required: "adoptionRequirements is required" })} name="adoptionRequirements" id="adoptionRequirements" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="adoptionRequirements" required/>
            </div>
            <div className="col-span-6 sm:col-span-3">
               <label htmlFor="healthstatus" className="text-sm font-medium text-gray-900 block mb-2">Health Status</label>
                <select {...register("healthstatus", { required: "healthstatus is required" })} className="select select-info w-full max-w-full" required>
                <option disabled selected>Select healthstatus</option>
                 {
                   healthStatus.map((v:string,index:number)=> <option key={index}>{v}</option>)
                 }
               
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="specialneeds" className="text-sm font-medium text-gray-900 block mb-2">Special Needs</label>
                <select {...register("specialneeds", { required: "specialneeds is required" })} className="select select-info w-full max-w-full" required>
                <option disabled selected>Select Special Needs</option>
                 {
                   specialNeeds.map((v:string,index:number)=> <option key={index}>{v}</option>)
                 }
               
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
            <label htmlFor="gender" className="text-sm font-medium text-gray-900 block mb-2">Gender</label>
                <select {...register("gender", { required: "gender is required" })} className="select select-info w-full max-w-full" required>
                <option disabled selected>Select Special Needs</option>
                 {
                    genderOptions.map((v:string,index:number)=> <option key={index}>{v}</option>)
                 }
               
              </select>
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label htmlFor="contractNumber" className="text-sm font-medium text-gray-900 block mb-2">Contract Number</label>
                <input type="text"  {...register("contractNumber", { required: "contractNumber is required" })} name="contractNumber" id="contractNumber" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Contract Number" required/>
            </div>
            <div className="col-span-full">
                    <label htmlFor="description"  className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                    <textarea id="description" {...register("description", { required: "description is required" })} rows={6} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="description" required></textarea>
                </div>
            
            <div className="col-span-full">
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 "
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true">
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="photo"
                            className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span className="">Upload a Photo</span>
                            <input
                              id="photo"
                              required
                              type="file"
                               {...register("photo", {
                                 required: "'photo is required",
                               })}
                              multiple
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1 ">or drag and drop</p>
                        </div>
                        <p className="text-xs ">PNG, JPG, GIF up to 800kb</p>
                      </div>
                    </div>
            </div>
        </div>
        <div className="p-6 border-t border-gray-200 rounded-b">
         <button   className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Save all</button>
</div>
    </form>
</div>



</div>
          </div>
        </>
    );
};

export default CreatePetsRequest;