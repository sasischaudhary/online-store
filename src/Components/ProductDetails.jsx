import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const[detail,setDetail]=useState({});
    const params=useParams();

    useEffect(()=>{
        const getData=async()=>{
            const response=await fetch(`https://fakestoreapi.com/products/${params.id}`);
            const json=await response.json();
            setDetail(json);
            
        }
        
        getData();
    },[])
  return (
    <section className='flex justify-center items-center p-10 gap-14'>
       <div className="w-[300px] h-[300px] ">
            <img src={detail.image} alt={detail.title} />
       </div>
        <div className="flex flex-col justify-center  gap-5 ">
            
            <h1 className='text-2xl font-bold'>{detail.title}</h1>
            <h2 className='text-xl capitalize text-[gray]'>{detail.category}</h2>
            <p>{detail.description}</p>
            <p className='text-xl font-semibold'>Price : ${detail.price}</p>
        </div>
    </section>
  )
}

export default ProductDetails;