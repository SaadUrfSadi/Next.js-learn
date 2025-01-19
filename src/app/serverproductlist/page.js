"use client"
import custom from "../custom.module.css";
import other from "@/style/other.module.css"

const productList = async () =>  {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products
}

export default async function Page(){
    let products = await productList();
    console.log(products)
    return(
        <>
         <main>
         <h1 className={custom.main}>Server Product List</h1>
         <button className={other.button} onClick={()=> alert("hello world")}>click here</button>
         <p className={other.hello}>other style module css</p>
         <span className={other.lfz}>fgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggghcgcgcnhhcnn fhfnfh nnvhjfhjfjh mnvjgvjmv jgvjmfvfkjfkjfjufujfjfjyfjufxfxfzrskkhkhhbbhcgxdtuyi,b,mjhfhy</span>
         </main>
        </>
    )
}