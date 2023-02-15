import Link from "next/link"
import Image from "next/image"

export default function Movie({ title ,id,  release_date, poster_path }){
   
    const defaultPath = "https://image.tmdb.org/t/p/original"
    
    return (
        <div>
            <h1>{title}</h1>
            <h2>{release_date}</h2>
            <Link href={`/${id}`}>
            <Image src={defaultPath + poster_path}
            width= {600}
            height= {800}
             />
             </Link>
            
        </div>
    )
}