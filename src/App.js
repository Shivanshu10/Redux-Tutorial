import './App.css';
import { increment, decrement, incrementByAmt } from './redux/counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        {count.value}
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <br />
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <br />
        <button onClick={() => dispatch(incrementByAmt(2))}>+2</button>
      </div>
    </div>
  );
}

export default App;
