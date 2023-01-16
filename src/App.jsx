import { useSelector,useDispatch } from "react-redux";
import { actions } from "./config/counterReducer";

function App() {
  const num = useSelector(state => state)
  console.log(num)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>{num}</p>
      <button onClick={()=>dispatch(actions.incr())}>+</button>
      <button onClick={()=>dispatch(actions.decr())}>-</button>
    </div>
  )
}

export default App
