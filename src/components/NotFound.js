import notFound from "../assets/images/NotFound.jpg";
import { Link } from "react-router-dom";
import { makeStyles, Button } from "@material-ui/core";

const useStyle = makeStyles({
  imgStyle: {
    width: "30%",
    margin: "80px 0 0 35%",
  },
  linkStyle: {
    margin: "auto ",
    marginLeft: "46%",
    textDecoration: "none",
  },
});

const NotFound = () => {
  const style = useStyle();
  return (
    <>
      <img className={style.imgStyle} src={notFound} alt="not found" />
      <div>
        <Link to="/" className={style.linkStyle}>
          <Button color="primary" title="click to go home" variant="contained">
            Home
          </Button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
