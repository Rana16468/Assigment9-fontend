
'use client'

import { useGetmyallpetsQuery } from "@/redux/api/petsApi";
import Image from "next/image";

const MyPets = () => {

    const {data,isLoading}=useGetmyallpetsQuery({},{refetchOnMountOrArgChange:true});
 
    return (
        <>
        {
            isLoading && <span className="loading loading-bars loading-lg"></span>
        }
              <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
             
              <th>Role</th>
              <th>Password Change</th>
          
              <th className="bg-green-400">Adoption Requests</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading && data.map((user:any,index:number) => (
              <tr key={user.id}>
                <td>{index+1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.needPasswordChange ? 'Yes' : 'No'}</td>
                
                <td>
                  <table className="table w-full mt-2">
                    <thead>
                      <tr>
                        <th>Request ID</th>
                        <th>Pet ID</th>
                        <th>Status</th>
                        <th>Experience</th>
                        <th className="bg-blue-400">Pet Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user.adoptionRequests.map((request:any) => (
                        <tr key={request.id}>
                          <td>{request.id}</td>
                          <td>{request.petId}</td>
                          <td>{request.status}</td>
                          <td>{request.petOwnershipExperience}</td>
                          
                          <td>
                            <table className="table w-full mt-2">
                              <thead>
                                <tr>
                                  <th>Pet Name</th>
                                  <th>Species</th>
                                  <th>Breed</th>
                                  <th>Age</th>
                                  <th>Size</th>
                                  <th>Location</th>
                                  <th>Description</th>
                                  <th>Temperament</th>
                                  <th>Medical History</th>
                                  <th>Adoption Requirements</th>
                                  <th>Health Status</th>
                                  <th>Special Needs</th>
                                  <th>Contact Number</th>
                                  <th>Gender</th>
                                  <th>Photos</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>{request.pet.name}</td>
                                  <td>{request.pet.species}</td>
                                  <td>{request.pet.breed}</td>
                                  <td>{request.pet.age}</td>
                                  <td>{request.pet.size}</td>
                                  <td>{request.pet.location}</td>
                                  <td>{request.pet.description}</td>
                                  <td>{request.pet.temperament}</td>
                                  <td>{request.pet.medicalHistory}</td>
                                  <td>{request.pet.adoptionRequirements}</td>
                                  <td>{request.pet.healthstatus}</td>
                                  <td>{request.pet.specialneeds}</td>
                                  <td>{request.pet.contractNumber}</td>
                                  <td>{request.pet.gender}</td>
                                  <td>
                                    <table className="table w-full mt-2">
                                      <thead>
                                        <tr>
                                          <th>Photo</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          {request.pet.photos.map((photo:any) => (
                                            <td key={photo.id}>
                                              <Image src={photo?.photo} width={50} height={50} alt={`Pet ${request.pet.name}`} className="w-16 h-16 object-cover" />
                                            </td>
                                          ))}
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        </>
    );
};

export default MyPets;