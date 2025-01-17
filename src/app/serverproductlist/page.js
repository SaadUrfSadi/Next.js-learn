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
         <h1>Server Product List</h1>
         </main>
        </>
    )
}