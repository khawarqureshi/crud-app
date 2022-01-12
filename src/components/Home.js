import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  homeContent: {
    top: "auto",
    bottom: 0,
    textAlign: "center",
    marginTop: 20,
    color: "#3f51b5",
  },
});
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeContent}>
      <Typography variant="h3">CRUD App</Typography>
      <Typography variant="h5">
        In this app, user info can be added. User info can be edited. And user
        can be deleted.
      </Typography>
    </div>
  );
};

export default Home;
