import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  navbarItems: {
    marginRight: 25,
  },
});

const Navbar = () => {
  const style = useStyle();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={style.navbarItems} component="h2">
          Crud Task
        </Typography>
        <Typography className={style.navbarItems} component="h2">
          Users
        </Typography>
        <Typography className={style.navbarItems} component="h2">
          Add User
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
