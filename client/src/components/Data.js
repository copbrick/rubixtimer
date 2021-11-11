import React, { useState, useEffect } from "react";
import axios from "axios";

// function Data() {
//   //fetch data from api with axios
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Data</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>
//             {item.name} - {item.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function Data() {
  //fetch data from api with axios
  const [data, setData] = useState('');
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/user")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // if (!data) return null;

  return (
    <div>
      <h1>Data</h1>
      <h2>Email: {data.email}</h2>
      <h2>ID: {data.client_id}</h2>
    </div>
  );
}

export default Data;
