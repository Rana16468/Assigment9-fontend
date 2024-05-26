
import { UserRole } from "@/types/common";
import { drawerItem } from "@/utils/DrawerItems/DrawerItems";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SideBarItem from "./SideBarItem";
import { getUserInfo } from "@/services/AuthService/auth.services";



const SideBar = () => {
    const [userrole,setUserRole]=useState("");
    useEffect(()=>{
       const {role}=getUserInfo();
        setUserRole(role);

    },[]);
  
    return (
        <>
            <div className="w-full">
         <div className="flex items-center justify-center py-4 mt-2 gap-2">
           <Link href="/" passHref>
          <div className="flex items-center gap-2">
            <Image src="https://cdn-icons-png.flaticon.com/512/3047/3047928.png" alt="logo" width={40} height={40} />
            <h1 className="text-xl font-semibold cursor-pointer">Pets Health Care</h1>
          </div>
        </Link>
      </div>
       <ul className="list-none p-0">
        {drawerItem(userrole as UserRole).map((item, index) => (
          <SideBarItem key={index} item={item} />
        ))}
      </ul> 
    </div> 
        </>
    );
};

export default SideBar;