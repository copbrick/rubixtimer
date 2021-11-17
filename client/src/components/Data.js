import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../config/BaseURL.js";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

function Data() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${baseURL}/api/user`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
