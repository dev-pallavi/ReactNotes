import './App.css'
import { useReducer } from 'react'

function App() {

  // const [count, setCount] = useState(0);

  let initialState = 0;

  const reducer = (state, action) => {
    switch (action.type){
      case "INCREMENT" :
        return state + 1;
      case "DECREMENT" :
        return  state - 1;
      default:
        return state;
    }
  }

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={() => {dispatch({type : "INCREMENT"})}}>Add</button>
      <button onClick={() => {dispatch({type : "DECREMENT"})}}>Subtract</button>
    </>
  )
}

export default App
