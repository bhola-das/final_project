import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Linkdin() {
const data=useLoaderData()
    //const [data,setdata]=useState([])
    //useEffect(() => {
    // fetch('https://api.github.com/users/bhola-das')
    // .then(response=>response.json())
    // .then(data => {
    //    console.log(data);
    //    setdata(data)
    // })
    //}, [])
    
  return (
    <div className='bg-slate-700 text-center text-[white] text-3xl p-3 
    flex justify-center items-center gap-6'>Github Followers:{data.followers}
   
    <img src={data.avatar_url} alt="Git Picture" className=' w-20 h-20  rounded-full ' />   
    </div>
  )
}

export default Linkdin

export const getloader=async()=>{
  const response= await fetch('https://api.github.com/users/bhola-das')
  return response.json()
}