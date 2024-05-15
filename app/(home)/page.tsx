"use client";
import { useEffect, useState } from "react";

// http://localhost:3000
// export const metadata = {
//     title: 'Home',
//     } // => client component에서는 metadata를 export할 수 없다.

export default function App(){
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies`);
        const json = await response.json();
        setMovies(json);
        setIsLoading(false);
    }
    useEffect(()=> {
        getMovies();
    }, []);

    return (
        <div>
            {isLoading ? "Loading.." : JSON.stringify(movies)}
        </div>
    );
}