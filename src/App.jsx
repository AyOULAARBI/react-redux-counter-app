import './App.css'
import { useSelector,useDispatch } from "react-redux";
import { incr,decr,reset } from "./config/counterReducer";

function App() {
  const num = useSelector(state => state)
  console.log(num)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2 style={{color: num>0?'cyan':num==0?'black':'red'}}>{num}</h2>
      <span>
      <button onClick={()=>dispatch(incr())}>Increment</button>
      <button onClick={()=>dispatch(decr())}>Decrement</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
      </span>
    </div>
  )
}

export default App
