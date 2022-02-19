import { useQuery } from "react-query";

const fetchUserDetails = async (id) => {
  const res = await fetch(`http://localhost:4000/users/${id}`);
  const users = await res.json();
  return users;
};

export default function UserInfo({ id }) {
  const { data, isLoading, isError, error } = useQuery(
    ["users", id],
    fetchUserDetails
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      <h4>{data.name}</h4>
      <h4>{data.email}</h4>
      <h4>{data.phone}</h4>
      <h4>{data.website}</h4>
    </div>
  );
}
