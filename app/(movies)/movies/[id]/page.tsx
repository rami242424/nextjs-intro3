import { API_URL } from "../../../(home)/page";

// fetch 할 함수(영화 id)
async function getMovie(id:string) {
    console.log(`Fetching movies: ${Date.now()}`);  
    const response = await fetch(`${API_URL}/${id}`);
    return (
        response.json()  
    );                                                            
}

// fetch 할 함수(영화 video)
async function getVideos(id:string){
    console.log(`Fetching videos: ${Date.now()}`);  
    const response = await fetch(`${API_URL}/${id}/videos`);
    return (
        response.json()  
    );   
}

export default async function MovieDetail({params: {id}} : {params: {id: string}}){
    // console.log({params: {id}});
    console.log('start fetching');
    const movie = await getMovie(id);
    const video = await getVideos(id);
    console.log('end fetching');
    return(
        <h1>{movie.title}</h1>
    );
}