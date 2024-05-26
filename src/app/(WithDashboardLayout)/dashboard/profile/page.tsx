"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import DeviceDetector from "device-detector-js";
import { GrDevice, GrDocumentUpdate } from "react-icons/gr";
import { MdOutlineSettingsSystemDaydream, MdOutlineSignalWifiStatusbar4Bar, MdOutlineSignalWifiStatusbarNull, MdSignalWifiStatusbarConnectedNoInternet } from "react-icons/md";
import { BsBrowserChrome } from "react-icons/bs";
import { PiTrainRegionalThin } from "react-icons/pi";
import { useMyprofileQuery, useUpdateProfileMutation } from "@/redux/api/profileApi";

import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
const UserProfile = () => {

    const [deviceInfo, setDeviceInfo] = useState<any>(null);
    const { data,isLoading}=useMyprofileQuery({},{refetchOnMountOrArgChange:true});
    const [ updateProfile, {isLoading:UpdateLoading}]=useUpdateProfileMutation()
    const { handleSubmit, register, reset} = useForm();
    useEffect(() => {
      const deviceDetector = new DeviceDetector();
      const userAgent = navigator.userAgent;
  
      const info = deviceDetector.parse(userAgent) as any;
      setDeviceInfo(info);
    }, []);

    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const distractName = userTimeZone.split("/")[1];

     const onSubmit=async(values:FieldValues)=>{

         try{

            const res=await updateProfile(values).unwrap();
            if(res?.id)
             {
                toast.success("Successfuly Updated Profile");
             }
             else{
                toast.error('Some Issues are There ');
             }

         }
         catch(error:any)
         {
            toast.error(error?.message);
         }
     }


 
    return (
        <>
            <div className=" h-full mt-36">
           <div className="border-b-2 block md:flex">
             <form
            
            className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8  shadow-md">
            <h1 className="text-center font-serif text-2xl m-3">
              User Profile
            </h1>
            <div className="avatar flex justify-center">
              <div className="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzF32lbq4BoRPJ3bZ4FrQiFe9uhw5tRZBqxzt7G00uhbmqTW3f-PeYpIMOUzFCsYpuOMI&usqp=CAU"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  name="photo"
                  className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                   hover:file:bg-violet-100"
                  required
                />
              </label>
            </div>

            <div className=" flex justify-center">
              <button
                type="submit"
                disabled={true}
                className="mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">
                <div className="flex justify-center">
                  Edit <GrDocumentUpdate className="text-xl ml-2" />
                </div>
              </button>
            </div>
          </form>

          {deviceInfo && (
            <div className="w-full max-w-md p-4 bg-white border border-gray-200  shadow sm:p-8 dark:bg-blue-900 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  User Infomation
                </h5>
                <a
                  href="..."
                  className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                  View all
                </a>
              </div>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <GrDevice className="text-xl bg-green-400 rounded" />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          <strong>Device Name:</strong>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold dark:text-white">
                        {deviceInfo.device.brand   || "common"}
                        {deviceInfo.device.model || 5100}
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <MdOutlineSettingsSystemDaydream className="text-xl bg-green-500" />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          <strong>OS:</strong>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold dark:text-white">
                        {deviceInfo.os.name} {deviceInfo.os.version}
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <BsBrowserChrome className="text-xl bg-orange-600 rounded" />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          <strong>Browser:</strong>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold dark:text-white">
                        {deviceInfo.client.name} {deviceInfo.client.version}
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <MdOutlineSignalWifiStatusbar4Bar className="text-xl bg-white rounded" />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          <strong>Active</strong>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold dark:text-white">
                        {navigator.onLine ? (
                          <p className="btn btn-success btn-sm">
                            {" "}
                            <MdOutlineSignalWifiStatusbarNull className="text-xl bg-white rounded" />{" "}
                            Active
                          </p>
                        ) : (
                          <p className="btn btn-error btn-sm">
                            <MdSignalWifiStatusbarConnectedNoInternet className="text-xl bg-red-900 rounded" />
                            In-Active
                          </p>
                        )}
                      </div>
                    </div>
                  </li>

                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <PiTrainRegionalThin className="text-xl rounded bg-white" />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          <strong>Continent:</strong>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold dark:text-white">
                        {userTimeZone}
                      </div>
                    </div>
                  </li>
                  <li>
                  <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <PiTrainRegionalThin className="text-xl rounded bg-white" />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          <strong>Distract Name:</strong>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold dark:text-white">
                        {distractName}
                      </div>
                    </div>
                  </li>

                 
                </ul>
              </div>
            </div>
          )}

         

          <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
            <div>
              <a
                title="Buy me a pizza"
                href="https://www.buymeacoffee.com/Dekartmc"
                target=""
                className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                <Image
                  className="object-cover object-center w-full h-full rounded-full"
                  src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png"
                  alt=""
                  width={50}
                  height={50}
                />
              </a>
            </div>
          </div>

          <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
            <div>
              <a
                title="Buy me a pizza"
                href="https://www.buymeacoffee.com/Dekartmc"
                target=""
                className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                <Image
                  className="object-cover object-center w-full h-full rounded-full"
                  src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png"
                  alt=""
                  width={50}
                  height={50}
                />
              </a>
            </div>
          </div>
        </div>
        <div>
            {/* form */}

          
       {
        !isLoading && <div className=" bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
                    <div>
                        <h1 className="text-2xl font-semibold">Update Profile Information</h1>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <form  onSubmit={handleSubmit(onSubmit)}  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
                                <input autoComplete="off"  {...register("email", { required: "Email Address is required" })}  defaultValue={data?.email} id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                               
                            </div>
                            <div className="relative">
                                <input autoComplete="off" {...register("name", { required: "name Address is required" })}  defaultValue={data?.name} id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                <label htmlFor="name"  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                            </div>
                            <div className="relative">
                                <input autoComplete="off" id="role" readOnly  defaultValue={data?.role} name="role" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                <label htmlFor="role" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Role</label>
                            </div>
                            <div className="relative">
                                <input autoComplete="off" id="createdAt" readOnly  defaultValue={data?.createdAt} name="createdAt" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                <label htmlFor="createdAt" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">createdAt</label>
                            </div>
                            <div className="relative">
                                <button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
       }
        </div>
      </div>
        </>
    );
};

export default UserProfile;