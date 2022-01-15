import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, getUsers } from "../services/api";

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
  firstname: "",
  lastname: "",
  title: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const [user, setUser] = useState(initialState);
  const { firstname, lastname, title, email, phone } = user;
  const { id } = useParams();
  const classes = useStyle();
  const navigate = useNavigate();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const res = await getUsers(id);
    setUser(res.data);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserInfo = async () => {
    await editUser(id, user);
    navigate("/users");
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>First Name</InputLabel>
        <Input
          onChange={(e) => handleChange(e)}
          name="firstname"
          value={firstname}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Last Name</InputLabel>
        <Input
          onChange={(e) => handleChange(e)}
          name="lastname"
          value={lastname}
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
        <InputLabel>Contact No</InputLabel>
        <Input onChange={(e) => handleChange(e)} name="phone" value={phone} />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={() => editUserInfo()}
      >
        Update User
      </Button>
    </FormGroup>
  );
};

export default EditUser;
