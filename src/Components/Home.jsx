import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
// import "../App.css"

const Home = ({search}) => {
//   const[search,setSearch]=useState("");
  const [data,setData]=useState([]);

//   function getInput(e){
//     setSearch(e.target.value);
//     // console.log(search);
//   }

  useEffect(()=>{
    async function fetchData(){
      const response=await fetch("https://fakestoreapi.com/products");
      const json=await response.json();
      setData(json);
      // console.log(data);
    }
    fetchData();
  },[])
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-4 p-4 ">
    
      {
        data?.filter((row)=>{
              if(search===""){
                return row;
              }
              else if(row.title.toLowerCase().includes(search.toLowerCase())){
                return row;
              }
            })
            .map((row,i)=>{
              return   <div className=' h-[300px] mb-4
               relative overflow-hidden group transition' key={i}> 
               <div className='w-full h-full flex justify-center items-center flex-col '>
                    <div className='w-[300px] mx-auto flex  justify-center items-center'>
                      <img src={row.image} alt="image" className='max-h-[160px]  group-hover:scale-105 transition duration-300' />
                     
                    </div>
                    <div className='mt-2 mb-2 text-center'>
                    <h1 className='font-semibold'>{row.title.substring(0,20)}</h1>
                    <h2 className='capitalize text-gray-500'>{row.category}</h2>
                    <p className='font-bold'>${row.price.toFixed(2)}</p>
                    </div>
                    <div  className='bg-[green] p-2'>
                     <Link to={`/products/${row.id}`}> <button className='text-white font-serif' >ADD TO CART</button></Link>  
                    </div>
                    
                </div>
                   
              </div>
            })   
      }
    </section>
  )
}

export default Home;