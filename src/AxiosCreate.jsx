import { useEffect, useState } from "react";
import axios from "axios";

function AxiosCreate() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUser(res.data));
  });
  return (
    <div className="App">
      {user.map((e, item) => (
        <div key={item}>
          <h3>{e.name}</h3>
          <p>UserName: {e.username}</p>
          <p>Email: {e.email}</p>
          <p>Phone Number: {e.phone}</p>
          <p>User Website: {e.website}</p>
        </div>
      ))}
    </div>
  );
}
export default AxiosCreate;