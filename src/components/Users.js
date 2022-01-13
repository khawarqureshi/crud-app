import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import SaveIcon from "@material-ui/icons/Save";
import data from "../database/db.json";

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
      fontSize: 16,
    },
  },
  download: {
    float: "right",
    margin: "25px 88px",
    textDecoration: "none",
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
    <>
      <CSVLink data={data.users} className={classes.download}>
        <Button
          color="primary"
          startIcon={<SaveIcon />}
          variant="contained"
          title="click to export data in csv"
        >
          Export Data
        </Button>
      </CSVLink>
      {console.log("data", data.users)}
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>#</TableCell>
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
                  title="click to edit"
                >
                  Edit
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => deleteUserData(user.id)}
                  title="click to delete"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Users;
