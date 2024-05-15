import { API_URL } from "../../../(home)/page";

// fetch 할 함수(영화 id)
async function getMovie(id:string) {
    console.log(`Fetching movies: ${Date.now()}`);  
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`);
    return (
        response.json()  
    );                                                            
}

// fetch 할 함수(영화 video)
async function getVideos(id:string){
    console.log(`Fetching videos: ${Date.now()}`);  
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return (
        response.json()  
    );   
}

export default async function MovieDetail({params: {id}} : {params: {id: string}}){
    console.log('===============');
    console.log('start fetching');
    // Promise.all을 사용함으로써 하나씩 끝내고 그 결과값을 movie, videos에 순차적으로 넘겨준다
    // Promise.all([getMovie(id), getVideos(id)]);
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    console.log('end fetching');
    return(
        <h1>{movie.title}</h1>
    );
}