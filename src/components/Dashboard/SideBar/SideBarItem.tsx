import { DrawerItem } from "@/types/common";
import Link from "next/link";
import { usePathname } from "next/navigation";

type IProps={
    item:DrawerItem
   
}

const SideBarItem = ({item}:IProps) => {

    const linkPath=`/dashboard/${item?.path}`;
    const pathName=usePathname();
    const isActive = pathName === linkPath;
    console.log(isActive);

    return (
        <>
              <Link href={linkPath} passHref>
      <div
        className={`flex items-center p-4 hover:bg-gray-100 ${
          isActive ? 'border-r-4 border-blue-500 text-blue-500 mb-1' : ''
        }`}
      >
         {item?.icon && <item.icon className={`mr-3 ${isActive ? 'text-blue-500' : 'text-gray-600'}`} />}
         <span>{item.title}</span>
      </div>
    </Link> 
        </>
    );
};

export default SideBarItem;