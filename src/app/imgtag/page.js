import Image from "next/image"
import Profile from "../../../public/next.svg"

export default function ImageTag(){
    console.log(Profile)
    return(
        <>
        <h1>Image tag</h1>
        {/* <Image src={Profile}/>
        <img src={Profile.src}/> */}
        <Image 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qWeJ9DQ4StXfgD4do9HP3zzbiQvT5Py9zw&s"
        width={200}
        height={200}
        />
        </>
    )
}