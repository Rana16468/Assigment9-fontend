

"use server"
import { cookies } from "next/headers"


export const deleteCookis=(keys:string[])=>{

    keys.forEach((key)=>{
        console.log(key);
        cookies().delete(key);
    });
}