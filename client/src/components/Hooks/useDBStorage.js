import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "../../config/BaseURL";

function getStorageValue(setValue) {
  axios
    .get(`${baseURL}/api/user`)
    .then((res) => {
      if (!(res.data.settings[0])) {
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
    let body;
    if (key === "color") {
      body = { backgroundColor: newValue.backgroundColor };
    }
    axios.post(url, body).catch((err) => {
      console.log("post err" + err);
    });
  };
  useEffect(() => {}, [key, value]);

  return [value, set];
};
