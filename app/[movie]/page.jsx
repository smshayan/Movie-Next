import Image from "next/image"

export async function generateStaticParams(){
        
        const api_key = "9c59ed71f2da2adb78cd50e18d341989"
        const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
        const res = await data.json()

        return res.results.map((movie =>(
            {
            movie: toString(movie.id),}
        )))
    }

export default async function detail({params}){
    const {movie} = params
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.api_key}`)
    const res = await data.json()
    const defaultPath = "https://image.tmdb.org/t/p/original"
    
    return(
        <div className="mx-4">
            
            <h2>{res.title}</h2>
            <p>{`Movie detail : ${res.overview}`}</p>
            <Image
            src={ defaultPath + res.backdrop_path}
            width = {1000}
            height = {1000}
            priority
            className="my-12 full"
            />

        </div>
        
    )
}