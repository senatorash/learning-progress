import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { getAllUsers } from "../lib/apis/userApis";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const onGetAllUsers = async () => {
    const result = await getAllUsers();

    if (result.error) {
      return setErrorMessage(result.error);
    }

    if (result.length > 0) {
      return setUsers(result);
    }
  };

  useEffect(() => {
    onGetAllUsers();
  }, []);
  return (
    <div className="container">
      <h1 className="text-center">Users List </h1>
      <div className="row">
        {errorMessage && <h1>{errorMessage}</h1>}
        {users.length > 0 &&
          users.map((user) => {
            return (
              <UserCard
                key={user.id}
                name={user.name}
                phoneNumber={user.phone}
                email={user.email}
              />
            );
          })}
      </div>
      <UserCard />
    </div>
  );
};

export default Users;
