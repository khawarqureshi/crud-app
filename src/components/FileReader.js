import { useState } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  makeStyles,
} from "@material-ui/core";

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
});

export default function CsvReader() {
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);

  const classes = useStyles();

  const processCSV = (str, delim = ",") => {
    const headers = str.slice(0, str.indexOf("\n")).split(delim);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    const newArray = rows.map((row) => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {});
      return eachObject;
    });

    setCsvArray(newArray);
  };

  const submit = () => {
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = function (e) {
      const text = e.target.result;
      console.log(text);
      processCSV(text);
    };

    reader.readAsText(file);
  };

  return (
    <form id="csv-form">
      <input
        type="file"
        accept=".csv"
        id="csvFile"
        onChange={(e) => {
          setCsvFile(e.target.files[0]);
        }}
      ></input>
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          if (csvFile) submit();
        }}
      >
        Submit
      </button>
      <br />
      <br />
      {csvArray.length > 0 ? (
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.thead}>
              <TableCell>#</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact No</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {console.log("hi", csvArray)} */}
            {csvArray.map((user, i) => (
              <>
                {/* {console.log("i", csvArray[i]['"email"'])} */}
                {/* {console.log("usersss", `${user}["\"name\""]`)} */}
                <TableRow
                  className={classes.row}
                  key={JSON.parse(user['"id"'])}
                >
                  <TableCell> {JSON.parse(user['"id"'])}</TableCell>
                  <TableCell>{JSON.parse(user['"firstname"'])}</TableCell>
                  <TableCell>{JSON.parse(user['"lastname"'])}</TableCell>
                  <TableCell>{JSON.parse(user['"title"'])}</TableCell>
                  <TableCell>{JSON.parse(user['"email"'])}</TableCell>
                  <TableCell>{JSON.parse(user['"phone"'])}</TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      ) : null}
    </form>
  );
}
