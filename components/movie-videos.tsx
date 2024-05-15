// server component

import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
    console.log(`Fetching videos: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    throw new Error('something broken');
    // const response = await fetch(`${API_URL}/${id}/videos`);
    // return response.json();
  }

// video 에 관한 ui만 가지기
export default async function MovieVideos({id}: {id:string}){
    const videos = await getVideos(id);
    return (
        <h6>{JSON.stringify(videos)}</h6>
    );
}