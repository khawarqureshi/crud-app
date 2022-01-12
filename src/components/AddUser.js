import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../services/api";

const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const initialState = {
  name: "",
  username: "",
  title: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setUser] = useState(initialState);
  const { name, username, title, email, phone } = user;
  const classes = useStyle();
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserInfo = async () => {
    await addUser(user);
    navigate("/users");
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="name" value={name} />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(e) => handleChange(e)}
          name="username"
          value={username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="email" value={email} />
      </FormControl>
      <FormControl>
        <InputLabel>Title</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="title" value={title} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="phone" value={phone} />
      </FormControl>
      <Button variant="contained" color="primary" onClick={() => addUserInfo()}>
        Add User
      </Button>
    </FormGroup>
  );
};

export default AddUser;
