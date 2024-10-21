import { Link, useLoaderData, useParams } from "react-router-dom";
// import Navbar from "../../shared/Navbar/Navbar";
import { useEffect, useState } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "flowbite-react";
import useSuccessStory from "../../hooks/useMenu/useSuccessStory";

const BlogDetails = () => {
  const data = useParams()
  const blogpost = useSuccessStory(data.id)
  const {
    _id,
    title,
    image,
    shortDescription,
    longDescription,
  } = blogpost;
  // const { user } = useContext(AuthContext);
  // const { email, photoURL, displayName } = user;

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <img className="w-full max-h-[600px] mx-auto" src={image} alt="" />
          <div className="space-y-5">
            <h3 className="text-3xl bg-opacity-20 p-6 bg-black">{title}</h3>
            <p className="text-xl">{shortDescription}</p>
            <p>{longDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;




// import React from 'react'
// import { useParams } from 'react-router-dom'
// import useSuccessStory from '../../hooks/useMenu/useSuccessStory'

// export default function BlogDetails() {
//   const data = useParams()
//   const blogpost = useSuccessStory(data.id)
//   console.log(blogpost)
//   return (
//     <div className='min-h-screen pt-20'>
//       <h1>BlogDetails {data.id}</h1>
//       <p>{blogpost.title}</p>
//     </div>
//   )
// }
