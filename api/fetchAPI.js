import url from "./url"

async function fetchGetData() {
    const response = await fetch(url);
    return response.json();
  }
  
  async function fetchPostData(payload) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return response.json();
  }
  
  async function fetchEditData(payload) {
    const response = await fetch(
      `${url}/${payload.id}`,
      {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    return response.json();
  }
  
  function fetchDeleteData(id) {
    return fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  }
  
  export { fetchGetData, fetchEditData, fetchPostData, fetchDeleteData };
  