"use client";

import { getUserInfo, isLoggedIn } from "@/services/AuthService/auth.services";
import logoutUser from "@/services/action/logoutUser";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";




/*
 const userInfo=  getUserInfo();
    // console.log("isLoggedIn",isLoggedIn());
    // console.log(userInfo);
    const router=useRouter();
    const handelLogOut=()=>{
       

        logoutUser(router);
    }
    
    return (
        <>
             {
            userInfo?.email ? <Button  onClick={handelLogOut}  color="error">LogOut</Button>:<Button component={Link} href="/login">Login</Button>
        }
        </>
    );


*/

const Navbar = () => {

  const userInfo=  getUserInfo();
  const router=useRouter();
  const handelLogOut=()=>{

    logoutUser(router);


  }

  const isLogin=isLoggedIn();
    return (
        <>
          <div className="navbar bg-base-100">
          <div className="navbar-start">
        <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Service</a></li>

            {
              isLogin ? <><li><Link href="/dashboard">Dashboard</Link></li></>:<>
                 <li><Link href="/login">Login</Link></li>
                 <li><Link href="/register">Register</Link></li>
              </>
          }
            
            
       
      </ul>
    </div>
    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLkNs_q-8DSZJkK-19clLgd1NowvAh8fZe_z-1ATBUcRpSQZRXXmZ_W-VzZLxZ0xAQzPA&usqp=CAU" alt="" width={50} height={50}></Image>
    <a className="btn btn-ghost text-xl">Pet Adoptation</a>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/common/about">About</Link></li>
      <li><Link href="/common/service">Service</Link></li>
      {
              isLogin ? <><li><Link href="/dashboard">Dashboard</Link></li></>:<>
                 <li><Link href="/login">Login</Link></li>
                 <li><Link href="/register">Register</Link></li>
              </>
       }
      
    </ul>
  </div>
  <div className="navbar-end">
    

           {
            userInfo?.email ? (
              <button onClick={handelLogOut} className="btn btn-error">
                LogOut
              </button>
            ) : (
              <Link href="/login" passHref>
                <div className="btn btn-primary">Login</div>
              </Link>
            )
          }
         
    <div className="avatar">
  <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ml-3">
    <Image src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" width={14} height={14} alt=".." />
  </div>
</div>
  </div>
</div>
        </>
    );
};

export default Navbar;