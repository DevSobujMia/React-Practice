import './App.css';
import Counter from './Counter';
import Friends from './Friends';
import Posts from './Posts';
import Team from './Team';
import Users from './Users';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  
  function handleClick(){
    alert('button click');
  }

  const handleClick2 = () =>{
    alert('click 2');
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button className='button' onClick={handleClick}>Click Me</button>
      <button className='button' onClick={handleClick2}>click me</button>
      <button className='button' onClick={() => addToFive()}>click</button>
      <Posts></Posts>
      
    </>
  )
}

export default App
