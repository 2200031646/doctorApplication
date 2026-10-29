import { useState } from "react";
import DoctorCard from "./components/DoctorCard";
import AddDoctor from "./pages/AddDoctor";
import Home from "./pages/Home";


function App(){
  let [counter,setCounter]=useState(0)
  return(
    <>
      { /* <h1>Welcome to App Component</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={()=>setCounter(counter++)}>Plus</button>
      <button onClick={()=>setCounter(counter--)}>Minus</button>
      <button onClick={()=>setCounter(0)}>Reset</button> /*}
      {/*<DoctorCard name="Yasaswini" gender="female" age={21} salary={480000} specialization="ENT" />
      <DoctorCard name="Lasya" gender="female" age={23} />
      <DoctorCard />*/}
      {/* <AddDoctor/> */}
      <Home/>
    </>
  )
}

export default App;