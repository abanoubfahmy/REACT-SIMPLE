import './App.css';
import { useState } from 'react';
import './theme.css'

function App() {
  const [person, setPerson] = useState("ABANOUB");
  const [age, setAge] = useState("28");
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("");

  const changeAge = () => {
    setAge(21);
  };

  return (
    <div className={`App ${theme}`}>
      
<div>
<button onClick={()=>{
  setTheme("light");
}} style={{marginRight:"36px"}}> Light</button>
 
 <button  onClick={()=>{
  setTheme("dark");
}} style={{marginRight:"36px"}}>Dark</button>
 
 <button   onClick={()=>{
  setTheme("grey");
}}style={{marginRight:"36px"}}>Gery</button>
 
 <button  onClick={()=>{
  setTheme("pink");
 }}>Pink</button>
</div>

       <br />
       <br />
        <br />
       <h2>My name is {person}</h2>
      <button style={{marginBottom:"60px"}} onClick={() => setPerson("John Doe")}>
        Change Name
      </button>
      <br />
      <br />
      <br />
      <h2>My Age is {age}</h2>
      <button style={{ color: "red" }} onClick={changeAge}>
        Change Age
      </button>
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>
        Count {count}
      </button>
    </div>
  );
}

export default App;
