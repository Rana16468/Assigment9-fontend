'use client'


import { useGetAllPetsQuery } from '@/redux/api/petsApi';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import AdoptationModel from './components/AdoptationModel';

const AllPets = () => {

     const {isLoading,data}=useGetAllPetsQuery({},{refetchOnMountOrArgChange:true});
     const [petId,setPetId]=useState("")

    console.log(isLoading);
     const allpets=data?.data as any;
     const meat=data?.meta;

     console.log(meat);

     const openModal = (id:string) => {
        const modal = document.getElementById('edit_chatbot') as HTMLDialogElement;
        if (modal) {
          modal.showModal();
          setPetId(id)
         
        }
    }
     

    return (
   
           <div className="container mx-auto p-4">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2">
        {isLoading?<p>loading</p>: <>
           {
            allpets.map((pet:any,index:number) =><div key={index} className="card w-full md:w-full bg-base-100 shadow-xl m-4">

            <figure>
            <Image
              src={pet.photos[0]?.photo}
              alt={`Image of ${pet.name}`}
              width={400}
              height={300}
              className="w-full h-96 object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pet Name: {pet.name}</h2>
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
          </div>
          <div className='flex justify-between'>
            <Link href={`/dashboard/user/${pet.id}`} className='btn btn-outline btn-primary btn-sm'> Details</Link>
            <button  className="btn btn-sm btn-outline btn-primary" onClick={()=>openModal(pet.id)}>Adoption Request  </button>
            <AdoptationModel petId={petId}/>
    
          </div>
            </div>)
           }
        </> }
      </div>
    </div>
           
       
    );
};

export default AllPets;