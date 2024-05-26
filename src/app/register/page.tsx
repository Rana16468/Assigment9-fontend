'use client'
import { useUserRegistertionMutation } from "@/redux/api/userApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";


const RegisterPage = () => {

	const { handleSubmit, register, reset ,formState:{errors}} = useForm();

	const [userRegistertion,{isLoading}]=useUserRegistertionMutation();
	const router=useRouter();

	const onSubmit=async(values:FieldValues)=>{

		console.log(values);
		if (values.password.length < 6) {
			toast.error("Password should be 6 characters or more.");
			return;
		  }
	  
		  if (values?.password !== values?.confirmpassword) {
			toast.error("Your Password did not match");
			return;
		  }

		  const registerData={
			name:values?.name,
			email:values?.email,
			password:values?.password,
			role:"USER"

		  }
		  try{

            const res=await userRegistertion(registerData).unwrap();
			if(res.id){
				toast.success("Successfully Create Your Account");
				router.push("/login");
			}
			else{
				toast.error("Some Issues Are There");
			}
		  }
		  catch(error:any){
			toast.error(error?.message);
		  }
		  


		  
		  

		 

	}



    return (
        <>
         
   <div className="h-screen md:flex">
	<div
		className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
		<div>
            <Image className="rounded-lg border-red-900" src="https://www.heart.org/-/media/Healthy-Living-Images/Healthy-Lifestyle/Pets/puppy-kitten-heart.jpg" alt=".." width={600} height={500}></Image>
			<h1 className="text-white font-bold text-4xl font-sans">GoFinance</h1>
			<p className="text-white mt-1">The most popular peer to peer lending at SEA</p>
			<button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
		</div>
		<div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form  onSubmit={handleSubmit(onSubmit)} className="bg-white">
			<h1 className="text-gray-800 font-bold text-2xl mb-1">Hello User!</h1>
			<p className="text-sm font-normal text-gray-600 mb-7">Welcome Back Our Pat Room</p>
			<div className="flex items-center border-2 py-2 px-11 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clipRule="evenodd" />
				</svg>
				<input className="pl-2 outline-none border-none"  {...register("name", { required: "Name  is required" })} type="text" name="name" id="name" placeholder="Full name" required />
				{errors.name && <p role="alert">name Field Issues</p>}
                </div>
				
					<div className="flex items-center border-2 py-2 px-11 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round"  strokeLinejoin="round" strokeWidth="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input className="pl-2 outline-none border-none"  {...register("email", { required: "email  is required" })} type="email" name="email" id="email" placeholder="Email Address" required />
                    </div>
						<div className="flex items-center border-2 py-2 px-11 rounded-2xl mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fillRule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clipRule="evenodd" />
							</svg>
							<input className="pl-2 outline-none border-none" {...register("password", { required: "password  is required" })} type="password" name="password" id="password" placeholder="Password" required />
                        </div>
                        <div className="flex items-center border-2 py-2 px-11 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fillRule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clipRule="evenodd" />
							</svg>
							<input className="pl-2 outline-none border-none" {...register("confirmpassword", { required: "confirmpassword  is required" })}  type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" />
                        </div>
							{
								!isLoading?<button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">User Registration</button>:<p>loading...</p>
							}
							
							
							<span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
		       </form>
	       </div>
      </div>
        </>
    );
};

export default RegisterPage;