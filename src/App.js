import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement, incrementByAmount } from "./redux/counterSlice";

function App() {
  //storeのcounterの値にアクセスする。
  const count = useSelector((state) => state.counter.value);
  //dispatch(Slicer)を呼び出す
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className="App">
      <h1>count: {count}</h1>
      <input
        onChange={(e) => setIncrementAmount(e.target.value)}
        value={incrementAmount}
      />
      <button onClick={() => dispatch(increment())}>＋</button>
      <button onClick={() => dispatch(decrement())}>−</button>
      <button
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
      >
        追加
      </button>
    </div>
  );
}

export default App;
