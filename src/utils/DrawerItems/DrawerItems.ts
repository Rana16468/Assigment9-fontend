


// import { FiHome, FiSettings } from 'react-icons/fi';
import { USER_ROLE } from "@/contant/role";
import { DrawerItem, UserRole } from '@/types/common';
export const drawerItem=(role:UserRole):DrawerItem[]=>{

    const roleMenus:DrawerItem[]=[];

    const defaultMenu=[
      {
        title:"Profile",
        path:`profile`,
        icon:''

      },
      {
        title:"Chnage Password",
        path:`change-password`,
        icon:''
      }
    ]

   
    switch(role)
    {
        
      
          case USER_ROLE.ADMIN:
            roleMenus.push(
              {
                title: "Dashboard",
                path: `${role}`,
                icon: '',
              },
              {
                title: "Create Pets Request",
                path: `${role}/createpets`,
                icon: '',
              },
              {
                title: "All Pets",
                path: `${role}/allpets`,
                icon: ''
              },
              {
                title: "All Adoption Request",
                path: `${role}/alladoption`,
                icon: '',
              },
              {
                title:"Create Admin",
                path:`${role}/createadmin`,
                icon: '',
              },
              {
                title:"User Management",
                path:`${role}/usermanagement`,
                icon: '',
              }
              
              
            );
            break;
      
          case USER_ROLE.USER:
            roleMenus.push(
             
              {
                title: "My Pets",
                path: `${role}/mypets`,
                icon:'',
              },
              {
                title:"All Pets",
                path:`${role}/AllPets`,
                icon:''
              },
             
            );
            break;
      
          default:
            break;   
    }



    return [...roleMenus,...defaultMenu];


}