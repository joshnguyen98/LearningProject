import { useEffect, useState } from "react";
import { getUsers } from "./api.ts";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li key={user["id"]}>{user["username"]}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
