export default function MovieDetail({params: {id}} : {params: {id: string}}){
    console.log({params: {id}});
    return(
        <h1>Movie detail {id}</h1>
    );
}