import axios from "axios";
import { useEffect } from "react";
import { baseURL } from "../config/BaseURL";

export const useDBStorage = (key, value) => {
  const url = `${baseURL}/api/update/${key}`;
  console.log(url);
  const body = { newBackgroundColor: value };

  useEffect(() => {
    axios
      .post(url, { body })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [value]);
};
