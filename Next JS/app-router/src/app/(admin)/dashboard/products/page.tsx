'use client';

import { useState } from "react";

export default function AdminPageProduct() {
    const [status, setStatus] = useState("");
    const revalidate = async () => {
        const res = await fetch('http://localhost:3000/api/revalidate?tag=products&secret=12345678', 
        { 
        method: 'POST'
        }
    );
    if(!res.ok) {
        setStatus('Revalidate Failed');
    } else {
        const response = await res.json();
        if(response.revalidate) {
            setStatus('Revalidate Success');
        } 
    }
    
    };

    return (
        <div>
            <button 
            className="bg-blue-700 p-2 mx-auto mt-4"
            onClick={() => revalidate()}>Revalidate</button>
        </div>
    );
}