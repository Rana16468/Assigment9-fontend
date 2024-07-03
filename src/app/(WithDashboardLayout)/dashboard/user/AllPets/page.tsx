'use client'


import { useGetAllPetsQuery } from '@/redux/api/petsApi';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import AdoptationModel from './components/AdoptationModel';
import { genderOptions, sizeOptions, specialNeeds } from '@/utils/DemoData/DemoData';

const AllPets = () => {

     const {isLoading,data}=useGetAllPetsQuery({},{refetchOnMountOrArgChange:true});
     const [petId,setPetId]=useState("");
     // seraching 
     const [search, setSearch] = useState('');
     const [filters, setFilters] = useState({
       size: '',
       gender: '',
       specialNeeds: '',
     });


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
  
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2">
     

            
            {/* card  */}


        {isLoading?<p>loading</p>: <>
           {
            allpets?.filter((pet:any)=>{

              const matchesSearch = search === '' || 
                pet?.age?.toLowerCase().includes(search.toLowerCase()) || 
                pet?.species?.toLowerCase().includes(search.toLowerCase()) || 
                pet?.location?.toLowerCase().includes(search.toLowerCase()) || 
                pet?.breed?.toLowerCase().includes(search.toLowerCase());
          
              const matchesSize = filters.size === '' || pet?.size?.toLowerCase() === filters.size.toLowerCase();
              const matchesGender = filters.gender === '' || pet?.gender?.toLowerCase() === filters.gender.toLowerCase();
              const matchesSpecialNeeds = filters.specialNeeds === '' || pet?.specialneeds?.toLowerCase() === filters.specialNeeds.toLowerCase();
          
              return matchesSearch && matchesSize && matchesGender && matchesSpecialNeeds;
            }).map((pet:any,index:number) =><div key={index} className="card w-full md:w-full bg-base-100 shadow-xl m-4">

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