import axios from "axios";
import { useState, useEffect } from "react";

import Header from "../Header";

export default function TraditionalUsersList() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      <div>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          data.map((user) => <p key={user.id}>{user.name}</p>)
        )}
      </div>
    </div>
  );
}
