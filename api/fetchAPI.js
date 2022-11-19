
async function fetchGetData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
}

async function fetchPostData(payload){
   const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    });
   return response.json(); 
}
// payload post =>
// title: 'foo',
//     body: 'bar',
//     userId: 1,

async function fetchEditData(payload){
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${payload.id}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
});
 return response.json();
}
// payload put =>
    // id: 1,
    // title: 'foo',
    // body: 'bar',
    // userId: 1,

async function fetchDeleteData(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
    });
    return response.json();
}

export {fetchGetData, fetchEditData, fetchPostData, fetchDeleteData}