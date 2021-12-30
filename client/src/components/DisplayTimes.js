import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../config/BaseURL.js";
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
            <h2>Loading times...</h2>
        </div>
      ) : (
        <div>
          <h1>Times</h1>
          <ul>
            {data.times.map((time) => {
              return (
                <div>
                  <li>{time}</li>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Data;
