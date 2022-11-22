async function fetchGetData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  }
  
  async function fetchPostData(payload) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
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
      `https://jsonplaceholder.typicode.com/users/${payload.id}`,
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
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    });
  }
  
  export { fetchGetData, fetchEditData, fetchPostData, fetchDeleteData };
  