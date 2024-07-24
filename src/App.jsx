import "./App.css";
import { Actions } from "./components/actions/actions.jsx";
import {UseHook} from "./components/useHook/UseHook.jsx";

function App() {
  return (
    <div className={"flex"}>
      {/*<Actions />*/}
      <UseHook />
    </div>
  );
}

export default App;
