import { useState } from "react";
import Counter from "./Components/Counter";
import UserList from "./Components/UserList";
import { data } from "./Data";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(!show);
  };
  return (
    <div>
      <button onClick={showHandler}> {show ? "Hide" : "Show"} UsersList</button>
      {show && <UserList data={data} />}
      <Counter/>
    </div>
  );
}

export default App;