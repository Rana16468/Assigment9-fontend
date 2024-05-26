
'use client'

import { useGetAllUserQuery } from "@/redux/api/userApi";
import UserModal from "./components/UserModal";


const Usermanagement = () => {
    const {data, isLoading}=useGetAllUserQuery({},{refetchOnMountOrArgChange:true});
    
    const openModal = () => {
        const modal = document.getElementById('userstatus_update_modal') as HTMLDialogElement;
        if (modal) {
          modal.showModal();
          
          
         
        }
    }



    return (
        <>
            {
                isLoading?<p>loading ...</p>:<>
                 <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((user:any) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.status}</td>
                            <td>
                            <button className="btn btn-primary btn-outline btn-sm mr-2" onClick={()=>openModal()}>Change Status</button>
                                < UserModal/>
                               
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
                </>
            }
        </>
    );
};

export default  Usermanagement;