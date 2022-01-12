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
    margin: "2% 0 0 22%",
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
      <Typography variant="h5" style={{ color: "#3f51b5" }}>
        Add User
      </Typography>
      <FormControl>
        <InputLabel>First Name</InputLabel>
        <Input
          onChange={(e) => handleChange(e)}
          required
          name="name"
          value={name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Last Name</InputLabel>
        <Input
          onChange={(e) => handleChange(e)}
          required
          name="username"
          value={username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => handleChange(e)}
          required
          name="email"
          value={email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Title</InputLabel>
        <Input
          onChange={(e) => handleChange(e)}
          required
          name="title"
          value={title}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Contact No</InputLabel>
        <Input
          onChange={(e) => handleChange(e)}
          required
          name="phone"
          value={phone}
        />
      </FormControl>
      <Button variant="contained" color="primary" onClick={() => addUserInfo()}>
        Add User
      </Button>
    </FormGroup>
  );
};

export default AddUser;
