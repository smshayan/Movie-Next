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
  
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.api_key}`)
  const res = await data.json()
  
  console.log(res)
 
  return (
    <main>
      <h1 className='text-lg'>Most Popular Movies Out Rn </h1>
      <div className="grid gap-16 grid-cols-fluid m-40">
        {res.results.map( (movies)=> (
          <Movie 
          
          id = {movies.id}
          title={movies.title}
          poster_path={movies.poster_path}
          release_date={movies.release_date}        />
        ))}
      </div>
    </main>
  )
}
