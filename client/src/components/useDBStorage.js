import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "../config/BaseURL";

function getStorageValue() {
  //get from mongoDB
  axios
    .get(`${baseURL}/api/user/`)
    .then((res) => {
      console.log("res data from get " + res.data.settings[0].backgroundColor);
      return res.data.settings[0].backgroundColor;
    })
    .catch((err) => {
      return ("err" + err);
    });
}

export const useDBStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    console.log("line 20 get storage val " + getStorageValue());
    return getStorageValue();
  });

  const url = `${baseURL}/api/update/settings`;
  const body = { backgroundColor: value };
  useEffect(() => {
    axios
      .post(url,  body)
      .then((res) => {
        setValue(res.data.backgroundColor);
        console.log("post res" + res);
      })
      .catch((err) => {
        console.log("post err" + err);
      });
  }, [key, value]);

  return [value, setValue];
};
