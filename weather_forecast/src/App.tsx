import "./App.css";
import MyButton from "./Components/myButton";

function App() {
  return (
    <div>
      <MyButton onClick={() => alert("okay")} text="click me" />
    </div>
  );
}

export default App;
