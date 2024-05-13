"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/appbar";
import { Button } from "@repo/ui/button";
import Link from "next/link";
import { getServerSession } from "next-auth";

export default  function  Page(): JSX.Element {
  const session =  useSession();
  console.log(session , "session");
  
  return (
   <div>
    <Link href="/about">About</Link>
      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
   </div>
  );
}
