import { useState } from "react";

function App() {
  const [hold, setHold] = useState(0);

  const [startCountDownHold, setStartCountdownHold] = useState(0);

  const [startCountDownRest, setStartCountdownRest] = useState(0);

  const [rest, setRest] = useState(0);

  function handleAddHold() {
    setHold(hold + 3);
  }
  function handleSubtractHold() {
    if (hold != 0) {
      setHold(hold - 3);
    }
    return;
  }

  function handleAddRest() {
    setRest(rest + 3);
  }
  function handleSubtractRest() {
    if (rest != 0) {
      setRest(rest - 3);
    }
    return;
  }

  function handleStartCountdown() {
    let countHold = hold;
    let countRest = rest;
    function a() {
      setStartCountdownHold(countHold);
      if (countHold > 0) {
        countHold--;
      } else {
        setStartCountdownRest(countRest);
        if (countRest > 0) {
          countRest--;
        }
      }
      return;
    }
    setInterval(a, 1000);
  }
  function handleReset() {
    setStartCountdownHold(0);
    setStartCountdownRest(0);
    setHold(0);
    setRest(0);
  }

  return (
    <div>
      <Timer
        rest={rest}
        hold={hold}
        startCountDownHold={startCountDownHold}
        startCountDownRest={startCountDownRest}
      ></Timer>
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
      <Reset onReset={handleReset}></Reset>
    </div>
  );
}

export default App;
function Timer({ startCountDownHold, startCountDownRest }) {
  return (
    <div>
      <h3>hold for</h3>
      <h1>{startCountDownHold}</h1>
      <h3>rest for</h3>
      <h1>{startCountDownRest}</h1>
    </div>
  );
}
function Hold({ hold, onAddHold, onSubtractHold }) {
  return (
    <div className="hold">
      <h3>hold</h3>

      <Button onClick={onSubtractHold}>-3 sec</Button>
      {hold}
      <Button onClick={onAddHold}>+3 sec</Button>
    </div>
  );
}
function Rest({ rest, onAddRest, onSubtractRest }) {
  return (
    <div className="rest">
      <h3>rest</h3>

      <Button onClick={onSubtractRest}>-3 sec</Button>
      {rest}
      <Button onClick={onAddRest}>+3 sec</Button>
    </div>
  );
}
function Reps() {
  return (
    <div className="reps">
      <h3>reps</h3>
      <Button>-1</Button>0<Button>+1</Button>
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
function Reset({ onReset }) {
  return (
    <div>
      <Button onClick={onReset}>Reset</Button>
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
