import { useEffect, useState } from "react";
import Friend from "./Friend";

export default function Friends(){

    const [friends, setFriends] = useState([]);

    useEffect(() =>{
        const url = 'https://jsonplaceholder.typicode.com/users';

        fetch(url)
        .then(res => res.json())
        .then(data => setFriends(data))

    }, [])


    return (
        <div className="box">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}