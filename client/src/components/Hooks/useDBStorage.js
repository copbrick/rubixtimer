import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "../../config/BaseURL";

function getStorageValue(setValue) {
  //get from mongoDB
  axios
    .get(`${baseURL}/api/user`)
    .then((res) => {
      console.log("res data from get " + res.data.settings[0].backgroundColor);
      if (res.data.settings[0].backgroundColor === null) {
        console.log("its null");
      } else {
        setValue(res.data.settings[0].backgroundColor);
      }
    })
    .catch((err) => {
      return "err" + err;
    });
}

export const useDBStorage = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    getStorageValue(setValue);
  }, []);

  const set = (newValue) => {
    setValue(newValue);
    const url = `${baseURL}/api/update/settings`;
    const body = { backgroundColor: newValue };
    axios
      .post(url, body)
      .then((res) => {
        console.log("post res" + res);
      })
      .catch((err) => {
        console.log("post err" + err);
      });
  };
  useEffect(() => {}, [key, value]);

  return [value, set];
};
