import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import SaveIcon from "@material-ui/icons/Save";
import data from "../database/db.json";

import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
  makeStyles,
} from "@material-ui/core";
import { getUsers, deleteUser } from "../services/api";
import FileReader from "./FileReader";

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

  // const [csvArray, setCsvArray] = useState([]);

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
  // function uploadFile(event) {
  //   var file = event.target.files[0];
  //   var reader = new FileReader();
  //   reader.onload = function (e) {
  //     // The file's text will be printed here
  //     console.log("e.target.result", e.target.result);
  //     console.log("reader", reader);
  //     setCsvArray(file);
  //   };

  //   console.log(reader);
  //   reader.readAsText(file);
  // }

  return (
    <>
      {/* <input type="file" onChange={uploadFile}></input> */}
      <FileReader />
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
              <TableCell>{user.firstname}</TableCell>
              <TableCell>{user.lastname}</TableCell>
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
      {/* {csvArray.length > 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact No</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {csvArray.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.firstname}</TableCell>
                <TableCell>{user.lastname}</TableCell>
                <TableCell>{user.title}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : null} */}
    </>
  );
};

export default Users;
