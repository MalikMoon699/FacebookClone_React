import { useState, useEffect } from "react";
import Account from "./components/Account";
import Main from "./components/Main";
import Loader from "./components/Loader";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("Nowuser"));
    if (storedUser) setUser(storedUser);
  }, []);

  return <>{user ? <Main /> : <Account setUser={setUser} />}</>;
};

export default App;
