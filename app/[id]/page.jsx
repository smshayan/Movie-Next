import Image from "next/image"


export default async function detail({params}){
    const {id} = params
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.api_key}`)
    const res = await data.json()
    const defaultPath = "https://image.tmdb.org/t/p/original"
    
    return(
        <div className="mx-4">
            
            <h2>{res.title}</h2>
            <p>{`Movie detail : ${res.overview}`}</p>
            <Image
            src={ defaultPath + res.backdrop_path}
            width = {700}
            height = {500}
            />

        </div>
        
    )
}