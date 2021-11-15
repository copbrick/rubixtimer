import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "../config/BaseURL";

const getDBStorageValue = (key, defaultValue) => {
  // const body = { backgroundColor: value };
  axios
    .get(`${baseURL}/api/user/`)
    .then((res) => {
      return res.data.settings[0].backgroundColor;
    })
    .catch((err) => {
      console.log("useDBStorage useEffect Error: " + err);
    });
};

// function getStorageValue(key, defaultValue) {
//   //get from mongoDB
//   axios
//     .get(`${baseURL}/api/user/`)
//     .then((res) => {
//       console.log("Res data" + res.data);
//       // return res.body.backgroundColor;
//       return res.data;
//     })
//     .catch((err) => {
//       return ("err" + err);
//     });

//     // useEffect(() => {
//     //   axios
//     //     .get(`${baseURL}/api/user`)
//     //     .then((res) => {
//     //       return res.data;
//     //     })
//     //     .catch((err) => {
//     //       console.log(err);
//     //     });
//     // }, []);
// }

// export const useDBStorage = (key, defaultValue) => {
//   const [value, setValue] = useState(() => {
//     return getStorageValue(key, defaultValue);
//   });

//   const url = `${baseURL}/api/update/${key}`;
//   const body = { backgroundColor: value };
//   useEffect(() => {
//     axios
//       .post(url, { body })
//       .then((res) => {
//         console.log("post res" + res);
//       })
//       .catch((err) => {
//         console.log("post err" + err);
//       });
//   }, [key, value]);

//   return [value, setValue];
// };
