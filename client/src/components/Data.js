import React, { useState, useEffect } from "react";
import axios from "axios";

function Data() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const response = await axios.get(
      //   "https://jsonplaceholder.typicode.com/users"
      "http://localhost:4000/api/user"
    );
    setData(response.data);
  }, []);
  return (
    <div>
      <h1>Data</h1>
      <ul>
        {/* {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))} */}
        {console.log("FE" + data)}

        {/* {data.map((item) => (
          <li key={item.user.email}></li>
        ))} */}

        <li> {data}</li>
      </ul>
    </div>
  );
}

export default Data;
