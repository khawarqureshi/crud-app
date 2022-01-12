import notFound from "../assets/images/NotFound.jpg";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  imgStyle: {
    width: "30%",
    margin: "80px 0 0 35%",
  },
});

const NotFound = () => {
  const style = useStyle();
  return (
    <>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
      <img className={style.imgStyle} src={notFound} alt="not found" />;
    </>
  );
};

export default NotFound;
