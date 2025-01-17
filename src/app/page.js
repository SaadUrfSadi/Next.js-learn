"use client"
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const navigate = (name) => {
    router.push(name)
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>state , useState </h1>
        <button onClick={()=> alert("hello world")}>click</button>
        <Link href="/login">
          go to login page
        </Link>
        <button onClick={()=> navigate("/login")}>go to login page</button>
        <button onClick={()=> navigate("/about")}>go to about page</button>
        <Link href="/productlist">Go to product list page</Link>
      </main>
     
    </div>
  );
}
