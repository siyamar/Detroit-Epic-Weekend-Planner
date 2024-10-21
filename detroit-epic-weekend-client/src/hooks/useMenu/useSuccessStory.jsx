import { useEffect, useState } from "react";

// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../useAxiosPublic";

const useSuccessStory =(id) =>{
    // const axiosPublic = useAxiosPublic();
    const [successStory, setsuccessStory] = useState([])
    // const [loading, setLoading] = useState(true)

    if(id){

        useEffect(()=>{
            fetch(`https://detroit-epic-weekend-server.vercel.app/successStory/${id}`)
            .then(res=> res.json())
            .then(data=> {
                setsuccessStory(data)
                setLoading(false)
            })
        },[])
    }
    else{

        useEffect(()=>{
            fetch('https://detroit-epic-weekend-server.vercel.app/successStory')
            .then(res=> res.json())
            .then(data=> {
                setsuccessStory(data)
                setLoading(false)
            })
        },[])
    }


    // const {data: menu=[], isPending: loading, refetch} = useQuery({
    //     queryKey: ['menu'],
    //     queryFn: async()=>{
    //         const res = await axiosPublic.get('/menu');
    //         return res.data;
    //     }
    // })

    return successStory
    // return [menu, loading, refetch]
}

export default useSuccessStory;