"use client"
export default function Leacture({params}){
    console.log(params)
    return(
        <>
        <div>
            <h1>{params.leacture[0]}</h1>
            <p>{params.leacture[0]}</p>
        </div>
        </>
    )
}