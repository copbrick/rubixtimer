import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL } from "../../config/BaseURL";

function getStorageValue(key, setValue) {
  axios
    .get(`${baseURL}/api/user`)
    .then((res) => {
      if (!res.data.times) {
        console.log("no settings found");
      } else {
        console.table(res.data.times);
        console.log("in get req: " + res.data.times);
        setValue(res.data.times);
      }
    })
    .catch((err) => {
      return "err" + err;
    });
}

export const useTimeStorage = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    getStorageValue(key, setValue);
  }, []);

  const set = (newValue) => {
    setValue(newValue);
    const url = `${baseURL}/api/update/times`;
    let body = { [key]: newValue };
    axios.post(url, body).catch((err) => {
      console.log("post err" + err);
    });
  };
  useEffect(() => {}, [key, value]);

  return [value, set];
};
