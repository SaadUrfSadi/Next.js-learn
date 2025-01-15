"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function layout({ children }) {
  const path = usePathname();
  console.log(path);
  return (
    <>
     <div>
     {
        path !== "/about/aboutstudent" ?
        <ul>
        <li>
          <Link href="/about">about main</Link>
        </li>
        <li>
          <Link href="/about/aboutcollege">about college</Link>
        </li>
        <li>
          <Link href="/about/aboutstudent">about student</Link>
        </li>
      </ul>
      :
      null
     }
      {children}
     </div>
    </>
  );
}
