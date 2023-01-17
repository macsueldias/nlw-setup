import "./App.css";
import { Habits } from "./components/Habits";
import './styles/global.css'

function App() {

  return (
    <>
      <Habits completed={3} />
      <Habits completed={1} />
      <Habits completed={4} />
      <Habits completed={5} />
    </>
  );
}

export default App;
