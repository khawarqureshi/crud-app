import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,
  makeStyles,
} from "@material-ui/core";
import { getUsers, deleteUser } from "../services/api";

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      fontSize: 20,
      background: "#3f51b5",
      color: "#FFFFFF",
    },
  },
  row: {
    "& > *": {
      fontSize: 18,
    },
  },
});

const Users = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  const getAllUsers = async () => {
    const res = await getUsers();
    console.log(res.data);
    setUsers(res.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>Id</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Contact No</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow className={classes.row} key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.title}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                color="primary"
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${user.id}`}
              >
                Edit
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => deleteUserData(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Users;
