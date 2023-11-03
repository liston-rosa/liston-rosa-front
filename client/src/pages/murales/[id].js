import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ArtWork from '@/components/ArtWork';
import Header from '@/components/Header';
import { fetchSingleArtWork } from '@/utils/fetchs';



export default function details (){
    const [details, setDetails] = useState({});
    const [error, setErrorState] = useState(false);
    const router= useRouter();
    const {id} = router.query;

        useEffect(()=> {
            const fetchData = async ()=>{
                const data = await fetchSingleArtWork(id);
                const [error, obj] = data;
                error ? setErrorState(true) : setDetails(obj)
            };
            fetchData()
        }, [])

    return(
        <div>
            <div className='header'>
            <Header />
            </div>
            <div className='back'> 
            <button type='button' onClick={()=> router.back()}>back</button>
            </div>
            <ArtWork 
            id={details._id}
            comments={details.comments}
            description={details.description}
            image={details.image}
            name={details.name}
            place={details.place}

            />
        </div>
    )
}