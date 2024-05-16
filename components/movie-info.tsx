// server component
import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

async function getMovie(id:string) {
    console.log(`Fetching movies: ${Date.now()}`);  
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`);
    return (
        response.json()  
    );                                                            
}

// Movie 에 관한 ui만 가지기
export default async function MovieInfo({id}: {id:string}){
    const movie = await getMovie(id);
    return (
        <div className={styles.container}>
            <img src={movie.poster_path} className={styles.poster} />
            <div className={styles.info}>
                <h3>Release Date : {movie.release_date}</h3>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐️{movie.vote_average.toFixed(0)}</h3>
                <h4>Company : {movie.production_companies[0].name} [{movie.production_companies[0].origin_country}]</h4>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target={"_blank"}>Home &rarr;</a>
            </div>
        </div>
    );
}