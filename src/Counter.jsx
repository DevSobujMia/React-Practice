import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const countReduce = () =>{
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div className="box">
          <h3>Counter: {count}</h3>
          <button className="button" onClick={handleAdd}>Add</button>
          <button onClick={countReduce}>Reduce</button>
        </div>
    )
}