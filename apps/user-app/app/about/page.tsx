"use client"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";


export default function () {
    const session = useSession()
    console.log(session);

    if(session.status === "authenticated") {
        return (
            <div>
                About Page
            </div>
        )
    }  else {
         return redirect("/api/auth/signin")
    } 
   
}