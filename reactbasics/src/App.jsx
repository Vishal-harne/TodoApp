import { useState } from 'react';
import './App.css';

// Define CustomButton with proper capitalization
function CustomButton(props) {
  function onclickHandler() {
    props.setCount(props.count + 1);
  }

  return (
    <button onClick={onclickHandler}>
      Counter {props.count}
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount} />
    </div>
  );
}

export default App;
