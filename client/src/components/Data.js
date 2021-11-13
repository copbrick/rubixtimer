import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Data() {
  //fetch data from api with axios
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/user")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // if (!data) return null;

  return (
    <div>
      <br />
      {isLoading ? (
        <div>
          <Spinner animation="border" role="status" variant="info">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div>
          <h1>Data</h1>
          <h2>Email: {data.email}</h2>
        </div>
      )}
    </div>
  );
}

export default Data;
