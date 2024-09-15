"use client"
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Logout(){
    const cookies = useCookies()
    const router = useRouter()
    useEffect(()=>{
        cookies.remove('authToken')
        router.push('/')
    },[])
    return <></>
}