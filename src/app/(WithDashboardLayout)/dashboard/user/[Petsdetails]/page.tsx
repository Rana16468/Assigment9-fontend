'use client'

import { useGetSpecificPetsQuery } from "@/redux/api/petsApi";
import Image from "next/image";
import { useRouter } from "next/navigation";



type Petsdetails ={
    params:{
        Petsdetails:string
    }
}


const Petsdetails = ({params}:Petsdetails) => {

   
   const router=useRouter();
   const {isLoading,data:pet}=useGetSpecificPetsQuery(params.Petsdetails,{refetchOnMountOrArgChange:true});
   
  

    return (
        <>
        <button onClick={()=>router.push("/dashboard")} className="btn btn-outline btn-sm btn-primary">Dashboard</button>
        {
            isLoading?<p>loading...</p>:<>
            
            <div className="card w-full md:w-1/2 bg-base-100 shadow-xl mx-auto my-4">
      <div className="carousel w-full">
        { pet.photos.map((photo:any, index:number) => (
          <div key={photo.id} /*id={`slide${index}`} className="carousel-item relative w-full"*/>
            <Image
              src={photo.photo}
              alt={`Image of ${pet.id}`}
              width={600}
              height={400}
              className="w-full h-96 object-cover"
            />
          </div>
        ))}
      </div>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{pet.name}</h2>
        <p><strong>Species:</strong> {pet.species}</p>
        <p><strong>Breed:</strong> {pet.breed}</p>
        <p><strong>Age:</strong> {pet.age}</p>
        <p><strong>Size:</strong> {pet.size}</p>
        <p><strong>Location:</strong> {pet.location}</p>
        <p><strong>Description:</strong> {pet.description}</p>
        <p><strong>Temperament:</strong> {pet.temperament}</p>
        <p><strong>Medical History:</strong> {pet.medicalHistory}</p>
        <p><strong>Adoption Requirements:</strong> {pet.adoptionRequirements}</p>
        <p><strong>Health Status:</strong> {pet.healthstatus}</p>
        <p><strong>Special Needs:</strong> {pet.specialneeds}</p>
        <p><strong>Contact Number:</strong> {pet.contractNumber}</p>
        <p><strong>Gender:</strong> {pet.gender}</p>
        <p><strong>Created At:</strong> {new Date(pet.createdAt).toLocaleString()}</p>
        <p><strong>Updated At:</strong> {new Date(pet.updatedAt).toLocaleString()}</p>
      </div>
    </div>
            </>
        }
        </>
    );
};

export default Petsdetails;