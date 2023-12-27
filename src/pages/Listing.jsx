import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';

export default function Listing() {
    SwiperCore.use([Navigation]);
    const params= useParams();
    const [listing,setListing]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError] = useState(false);
    useEffect(()=>{
     
        const fetchListing = async()=>{
            try {
                setLoading(true);
                const res = await fetch(`/api/listing/get/${params.listingId}`);
                const data = await res.json();
                if(data.success === false)
                {
                    console.log(data.message);
                    setError(true);
                    setLoading(false);
                    return;
                    
                }
                setListing(data);
                setLoading(false);
                setError(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            } 


        }
        fetchListing();

    },[params.listingId])
  return (
    <main> 

       {
        loading && <p className='text-center my-7 text-2xl '>Loading</p>
       } 
       {
        error && <p className=' text-center my-7 text-2xl'>Some Error Occured . Sorry for the inconvenience !!</p>
       }

       {
         listing && !loading && !error && 
         (
                 <>
                 <Swiper navigation>
                    {listing.imageUrls.map((url)=>{
                        return (
                            <SwiperSlide key={url}>
                                <div className="h-[500px] " style = {{background : `url(${url}) center no-repeat  `,backgroundSize:'cover' }}></div>
                            </SwiperSlide>
                        )
                    })}
                 </Swiper>
                 </>
         )
       }
     </main>
  )
}
