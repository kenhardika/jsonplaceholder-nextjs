import axios from "axios";
import url from "./url";

function axiosGetData() {
  return axios.get(url);
}

function axiosPostData(payload) {
  return axios.post(url, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function axiosDeleteData(payload) {
  return axios.delete(`${url}/${payload}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function axiosEditData(payload) {
  return axios.put(
    `${url}/${payload.id}`,
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export { axiosGetData, axiosPostData, axiosDeleteData, axiosEditData };
