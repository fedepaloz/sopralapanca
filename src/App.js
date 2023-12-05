import { useState } from "react";

function App() {
  const [hold, setHold] = useState(0);
  function handleAddHold() {
    setHold(hold + 3);
  }
  function handleSubtractHold() {
    if (hold != 0) {
      setHold(hold - 3);
    }
    return;
  }

  const [rest, setRest] = useState(0);
  function handleAddRest() {
    setRest(rest + 3);
  }
  function handleSubtractRest() {
    if (rest != 0) {
      setRest(rest - 3);
    }
    return;
  }

  const [startCountDown, setStartCountdown] = useState("");
  function handleStartCountdown() {
    let count = hold;
    function a() {
      setStartCountdown(count);
      if (count > 0) {
        count--;
      }
      return;
    }
    setInterval(a, 1000);
    console.log(count);
  }

  return (
    <div>
      <Timer rest={rest} hold={hold} startCountDown={startCountDown}></Timer>
      <Hold
        hold={hold}
        onAddHold={handleAddHold}
        onSubtractHold={handleSubtractHold}
      ></Hold>
      <Rest
        rest={rest}
        onAddRest={handleAddRest}
        onSubtractRest={handleSubtractRest}
      ></Rest>
      <Reps></Reps>
      <Start onStartCountdown={handleStartCountdown} hold={hold}></Start>
    </div>
  );
}

export default App;
function Timer({ hold, startCountDown, rest }) {
  return (
    <div>
      <h3>hold for</h3>
      <h1>{hold}</h1>
      <h3>rest for</h3>
      <h1>{rest}</h1>
      <div>countdown: {startCountDown}</div>
    </div>
  );
}
function Hold({ hold, onAddHold, onSubtractHold }) {
  return (
    <div>
      <h3>hold</h3>
      <Button onClick={onSubtractHold}>-3 sec</Button>
      {hold}
      <Button onClick={onAddHold}>+3 sec</Button>
    </div>
  );
}
function Rest({ rest, onAddRest, onSubtractRest }) {
  return (
    <div>
      <h3>rest</h3>
      <Button onClick={onSubtractRest}>-3 sec</Button>
      {rest}
      <Button onClick={onAddRest}>+3 sec</Button>
    </div>
  );
}
function Reps() {
  return (
    <div>
      <h3>reps</h3>
      <Button>-1</Button>
      00
      <Button>+1</Button>
    </div>
  );
}
function Start({ onStartCountdown }) {
  return (
    <div>
      <Button onClick={onStartCountdown}>Start</Button>
    </div>
  );
}
function Button({ children, onClick, hold }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
