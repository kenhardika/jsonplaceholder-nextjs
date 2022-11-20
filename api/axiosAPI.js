import axios from "axios";

function axiosGetData() {
  return axios.get(`https://jsonplaceholder.typicode.com/users/`);
}

function axiosPostData(payload) {
  return axios.post("https://jsonplaceholder.typicode.com/users", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function axiosDeleteData(payload) {
  return axios.delete(`https://jsonplaceholder.typicode.com/users/${payload}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function axiosEditData(payload) {
  return axios.put(
    `https://jsonplaceholder.typicode.com/users/${payload.id}`,
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export { axiosGetData, axiosPostData, axiosDeleteData, axiosEditData };
