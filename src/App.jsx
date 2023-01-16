import { useSelector,useDispatch } from "react-redux";
import { incr,decr,reset } from "./config/counterReducer";

function App() {
  const num = useSelector(state => state)
  console.log(num)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>{num}</p>
      <button onClick={()=>dispatch(incr())}>+</button>
      <button onClick={()=>dispatch(decr())}>-</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default App
