const url = `https://jsonplaceholder.typicode.com/users`;
const request = new XMLHttpRequest();

function xhrGetData() {
    return new Promise((resolve, reject) => {
      request.open("GET", url);
      request.responseType = "json";
      request.onload = function () {
        if (request.readyState == 4 && request.status == 200) {
          resolve(request.response);
        } else if (http.readyState == 4 && http.status > 399) {
          reject(request.response);
        }
      };
      request.send();
    });
  }
  function xhrPostData(payload) {
    return new Promise((resolve, reject) => {
      request.open("POST", url);
      request.setRequestHeader("Content-type", "application/json");
      request.responseType = "json";
      request.onload = function () {
        if (request.readyState == 4 && request.status < 300) {
          resolve(request.response);
        } else if (request.readyState == 4 && request.status > 399) {
          reject(request.response);
        }
      };
      request.send(JSON.stringify(payload));
    });
  }
  function xhrEditData(payload) {
    return new Promise((resolve, reject) => {
      request.open("PUT", `${url}/${payload.id}`);
      request.setRequestHeader("Content-type", "application/json");
      request.responseType = "json";
      request.onload = function () {
        if (request.readyState == 4 && request.status == 200) {
          resolve(request.response);
        } else if (request.readyState == 4 && request.status > 399) {
          reject(request.response);
        }
      };
      request.send(JSON.stringify(payload));
    });
  }
  
  function xhrDeleteData(id) {
    return new Promise((resolve, reject) => {
      request.open("DELETE", `${url}/${id}`);
      request.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      request.responseType = "json";
      request.onload = function () {
        if (request.readyState == 4 && request.status == 200) {
          resolve(request);
        } else if (request.readyState == 4 && request.status > 399) {
          reject(request.response);
        }
      };
      request.send();
    });
  }
  
  export { xhrGetData, xhrEditData, xhrPostData, xhrDeleteData };
  