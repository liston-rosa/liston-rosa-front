import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';



export default function details (){
    const router= useRouter();
    const {id} = router.query;

    return(
        <div>
            <h1>details</h1>
            <p>{id}</p>
            <button type='button' onClick={()=> router.back()}>back</button>
        </div>
    )
}