import { useQuery } from "react-query";
import { useState } from "react";
import UserInfo from "../UserDetails";
import axios from "axios";

const fetchUsers = () => {
  return axios.get("http://localhost:4000/users");
};

export default function UsersList() {
  const [id, setId] = useState(null);

  const { data, isLoading, isError, error } = useQuery("users", fetchUsers);

  return (
    <div className="App">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : isError ? (
        <h2>{error.message}</h2>
      ) : (
        data?.data.map((user) => (
          <p key={user.id} onClick={() => setId(user.id)}>
            {user.name}
          </p>
        ))
      )}
      {/* {id && <UserInfo id={id} />} */}
    </div>
  );
}
