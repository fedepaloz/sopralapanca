import { useState } from "react";

function App() {
  const [hold, sethold] = useState(0);
  function handleAddHold() {
    sethold(hold + 30);
  }
  function handleSubtractHold() {
    sethold(hold - 30);
  }
  const [startCountDown, setStartCountdown] = useState(0);
  function handleStartCountdown() {
    setStartCountdown(hold - 1);
    console.log(startCountDown);
  }

  return (
    <div>
      <Timer hold={hold} startCountDown={startCountDown}></Timer>
      <Hold
        hold={hold}
        onAddHold={handleAddHold}
        onSubtractHold={handleSubtractHold}
      ></Hold>
      <Rest></Rest>
      <Reps></Reps>
      <Start onStartCountdown={handleStartCountdown} hold={hold}></Start>
    </div>
  );
}

export default App;
function Timer({ hold, startCountDown }) {
  return (
    <div>
      <h3>hold/rest for</h3>
      <h1>{hold}</h1>
      <div>countdown: {startCountDown}</div>
    </div>
  );
}
function Hold({ hold, onAddHold, onSubtractHold }) {
  return (
    <div>
      <h3>hold</h3>
      <Button onClick={onSubtractHold}>-30 sec</Button>
      {hold}
      <Button onClick={onAddHold}>+30 sec</Button>
    </div>
  );
}
function Rest() {
  return (
    <div>
      <h3>rest</h3>
      <Button>-30 sec</Button>
      00
      <Button>+30 sec</Button>
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
function Start({ hold, onStartCountdown }) {
  return (
    <div>
      <Button onClick={onStartCountdown}>Start</Button>
    </div>
  );
}
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
