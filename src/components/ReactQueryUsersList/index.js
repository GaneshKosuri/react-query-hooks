import { useQuery } from "react-query";
import axios from "axios";

import Header from "../Header";

const fetchUsers = () => {
  return axios.get("http://localhost:4000/users");
};

export default function ReactQueryUsersList() {
  const { data, isLoading, isError, error } = useQuery("users", fetchUsers, {
    staleTime: 10000,
  });

  //   console.log({ isLoading, isFetching });
  return (
    <div>
      <Header />
      <div>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : isError ? (
          <h2>{error.message}</h2>
        ) : (
          data?.data.map((user) => <p key={user.id}>{user.name}</p>)
        )}
      </div>
    </div>
  );
}
