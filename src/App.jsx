import {useState} from "react";
function App(){
  const [name, setName] = useState("Deepthi");
  return(
    <div>
      <h3>Before click name of the employee is: {name}</h3>
      <button onClick={()=>setName("Chebolu Sai Deepthi")}>Click Me</button>
    </div>
  )
}
export default App;