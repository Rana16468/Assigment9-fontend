"use client"
import Image from "next/image";
import { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMenu } from 'react-icons/fi'
import SideBar from "../SideBar/SideBar";
import Link from "next/link";

const DashboardDrawer = ({children}:{children:React.ReactNode}) => {

    const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };



  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

 // const isLoading=false
 //md:w-[calc(100%-240px)]
    return (
        <>
        <div className="flex">
        <div className="fixed w-full  ml-auto border-b border-lightgray shadow-none">
        <div className="flex items-center justify-between p-4">
          <button
            className="mr-2 md:hidden text-primary-main"
            onClick={handleDrawerToggle}
          >
             <FiMenu size={24} />
          </button>
          
          <div className="flex items-center justify-around w-full">
            
          <p className="text-red-300">Hi, User</p>
         <p className="text-primary-main">Welcome To Pets Adoption  Center!</p>
            
          
          </div>
          <div className="flex items-center gap-3">
        
            <div className="relative">
          <div className="flex">
               <Link href="/" className="btn btn-primary btn-sm">Home</Link>
                 <button className="bg-white p-2 rounded-full">
                 <IoMdNotificationsOutline size={24} className="text-gray-600" /> 
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary" />
              </button>
             </div>
            </div>
            <Image
              className="w-8 h-8 rounded-full"
              src=""
              alt=""
              width={40}
              height={50}
            />
             
            {/* <AccountMenu /> */}
          </div>
        </div>
      </div>
      <div className="md:flex-shrink-0 md:w-[240px]">
        <nav
          className={`${
            mobileOpen ? 'block' : 'hidden'
          } md:block fixed top-0 left-0 h-full w-[240px] bg-white shadow-md`}
          onTransitionEnd={handleDrawerTransitionEnd}
        >
            <SideBar /> 
        </nav>
      </div>
      <main className="flex-grow p-3 md:ml-[200px]  ">
        <div  className="mt-20">
            {children}
        </div>
      </main>
       </div>
        </>
    );
};

export default DashboardDrawer;