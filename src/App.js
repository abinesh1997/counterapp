import { useState } from "react";
// the usestate is a react hook that allows functional component to manage state. it 
// provide a way todelclare state variable 
const App =() => {
  const [number, setNumber] = useState(0);
  const incrementNumber=()=>{
    let updatedNumber = number + 1;
     setNumber(updatedNumber);
  }
  const decrementNumber=()=>{
    if(number>0){
    let updatedNumber = number - 1;
     setNumber(updatedNumber);
    }
  }
  const resetNumber=()=>{
    let updatedNumber = 0;
     setNumber(updatedNumber);
  }

  return (
    <div className="counter_container">
      <h1>Counter App Two</h1>
      <p>{number}</p>
      <div className="buttons">
        <button onClick={incrementNumber}>Increment</button>
        <button onClick={decrementNumber}>Decrement</button>
        <button onClick={resetNumber}>Reset</button>
      </div>

    </div>
  );

  }
export default App;
// jsx> it stands for js xml. it allows us to writr html in react or indise js file