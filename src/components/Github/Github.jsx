import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  // this is made with basic useeffect
  // const [data,setData]=useState([])
  // useEffect(()=>{
  //   fetch("https://api.github.com/users/Istekhar-Arkam")
  //   .then(response=>response.json())
  //   .then(data=>{
  //     console.log(data)
  //     setData(data)
  //   })
  // },[])
  return (
    <div className="p-2 mt-10 rounded-lg sm:max-w-2xl md:ml-96">
      <div className="p-10 text-3xl font-semibold text-center text-white bg-gray-500">
        Github Followers : {data.followers}
        <img
          src={data.avatar_url}
          alt="github Picture"
          width={300}
          className="rounded-lg "
        />
      </div>
    </div>
  );
};

export default Github;
// this is made of router
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Istekhar-Arkam");
  return response.json();
};
