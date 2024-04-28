import { useEffect, useState } from "react";
import Post from "./Post";

export default function Posts(){
    
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')

                if(!response.ok){
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setPosts(data);
                console.log(data);
                
            }

            catch(error){
                console.error('Error fetching data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {posts.length === 0 ? (<p>Loading...</p>) : ( <div>
                <h3>Posts: {posts.length}</h3>
            </div> )}
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
}