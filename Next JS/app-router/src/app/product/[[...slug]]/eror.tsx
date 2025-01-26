'use client'

import { useEffect } from "react"

export default function Eror({
    eror, reset}: 
    {eror: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.log(eror);
    }, [eror]);

    return(
        <div>
            <h2>Something Went Wrong</h2>
            <button onClick={() => reset()}>Try Again</button>
        </div>
    )
}