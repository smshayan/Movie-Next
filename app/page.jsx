import Image from 'next/image'
// import { Poppins } from '@next/font/google'
import styles from './page.module.css'
import Movie from './movies'

//const inter = Inter({ subsets: ['latin'] })
// const poppins = Poppins(
//   {
//     subsets : ["devanagari"],
//     weight : ['200']
//   }
// )


export default async function Home() {
  
  const api_key = "9c59ed71f2da2adb78cd50e18d341989"
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
  const res = await data.json()
  
  console.log(res)
 
  return (
    <main>
      <div className="">
      <h1 className='text-lg m-auto font-bold	text-3xl my-10'>Most Popular Movies Out Rn </h1>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map( (movies)=> (
          <Movie 
          
          id = {movies.id}
          title={movies.title}
          poster_path={movies.poster_path}
          release_date={movies.release_date}   
               />
        ))}
      </div>
      </div>
    </main>
  )
}
