"use client"


import DashboardDrawer from "@/components/Dashboard/DashboardDrawer/DashboardDrawer";
import { useRouter } from "next/navigation";


const DashboardLayout = ({children}:{children:React.ReactNode}) => {
  const router=useRouter();

   return <DashboardDrawer> {children}</DashboardDrawer>
};

export default DashboardLayout;