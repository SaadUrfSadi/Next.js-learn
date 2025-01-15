"use client"
import React from 'react';
import { useRouter } from "next/navigation";

function page() {

    const router = useRouter();
  return (
   <>
    <div>about page</div>
    <button onClick={()=> router.push("/")}>Go to home page</button>
   </>
  )
}

export default page