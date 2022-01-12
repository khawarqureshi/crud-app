import React, { useEffect } from "react";
import { getUsers } from "../services/api";

const Users = () => {
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const res = await getUsers();
    console.log(res);
  };

  return <div>User Component</div>;
};

export default Users;
