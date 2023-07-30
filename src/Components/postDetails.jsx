import { useState,useEffect } from "react";
import axios from "axios";

const PostDetails = ()=>{

    const [responseDetails , setResponseDetails] = useState([]);  
    useEffect(()=>{
        const api_url = "https://jsonplaceholder.typicode.com/posts";
        axios.get(api_url).then((response)=>{
            setResponseDetails(response.data);
        }).catch((error)=>{
            console.log(error)
        })

    })

    return(

        <div>
            <h1 >Post Details</h1>
            <table border={1}>
                <tr>
                <th>UserId</th>
                <th> ID </th>
                <th>Title</th>
                <th>Body</th>
                </tr>
                
                {
                    responseDetails.map((row)=>(
                            <tr>
                                <th>{row.userId}</th>
                                <th>{row.id}</th>
                                <th>{row.title}</th>
                                <th>{row.body}</th>

                            </tr>
                    ))
                    
                }
            </table>
        </div>
    )
}

export default PostDetails;