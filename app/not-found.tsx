import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Not Fouud",
}


export default function NotFound(){
    return (
        <div>
            <h1>Not Found</h1>
        </div>
    );
}