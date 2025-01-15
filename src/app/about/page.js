"use client"
import React from 'react';
import { useRouter } from "next/navigation";
import Link from 'next/link';

function page() {

    const router = useRouter();
  return (
   <>
    <div>about page</div>
    <button onClick={()=> router.push("/")}>Go to home page</button>
    <Link href={"/about/aboutcollege"}>Go to about college page</Link>
    <br />
    <br />
    <Link href={"/about/aboutstudent"}>Go to about student page</Link>
   </>
  )
}

export default page