import "./App.css";
import { UpdateName } from "./components/UpdateName.jsx";

function App() {
  return (
    <div className={"flex"}>
      <div className={"w-28 h-36 px-2 pt-1 pb-2 border-2"}>
          <p>Actions!</p>
        <UpdateName />
      </div>
    </div>
  );
}

export default App;
