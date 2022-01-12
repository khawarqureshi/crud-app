import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  navbarItems: {
    color: "#ffffff",
    marginRight: 25,
    textDecoration: "none",
    fontSize: 20,
  },
});

const Navbar = () => {
  const style = useStyle();
  return (
    <AppBar position="static">
      <Toolbar>
        <NavLink className={style.navbarItems} to="/">
          Crud Task
        </NavLink>
        <NavLink className={style.navbarItems} to="users">
          Users
        </NavLink>
        <NavLink className={style.navbarItems} to="adduser">
          Add User
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
