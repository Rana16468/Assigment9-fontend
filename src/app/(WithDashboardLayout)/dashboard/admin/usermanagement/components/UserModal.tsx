import { useUpdateUserStatusMutation } from "@/redux/api/userApi";
import { userStatus } from "@/utils/DemoData/DemoData";
import { toast } from "sonner";

const UserModal = () => {

    const [ updateUserStatus]=useUpdateUserStatusMutation();

    const handelUserStatus=async(event:any)=>{

        event.preventDefault();
        const element = event.target;
        const status=element.status.value;
        
        try{

            const res=await  updateUserStatus({status:status}).unwrap();
            if(res.id){
                toast.success('Successfuuly Update Status');
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
              <div className="flex justify-center items-center text-black">
        <dialog id="userstatus_update_modal" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm bg-green-500 btn-circle absolute right-2 top-2">
                ✕
              </button>
              <h3 className=" font-bold text-2xl font-seri">
              User Status
              </h3>
            </form>

             <div>
             <form  onSubmit={handelUserStatus}  className="grid grid-cols-1 gap-3 mt-10">
           
             <div className="col-span-6 sm:col-span-3">
                 <label htmlFor="date" className="text-sm font-medium text-gray-900 block mb-2">Date</label>
                 <input type="text"  defaultValue={new Date().toString()}   name="age"  id="age" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Age" />
             </div>
             <div className="col-span-6 sm:col-span-3">
             <label htmlFor="status" className="text-sm font-medium text-gray-900 block mb-2">Status</label>
                 <select name="status"   className="select select-info w-full max-w-full" >
                 <option disabled >Status</option>
                  {
                   userStatus.map((v:string,index:number)=> <option key={index}>{v}</option>)
                  }
                
               </select>
             </div>
         
               
 
                 
                 <div className="p-6 border-t border-gray-200 rounded-b">
                    <button   className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Update Status</button>
                 </div>
             
             </form>
            </div> 
          </div>
        </dialog>
      </div>
        </>
    );
};

export default UserModal;