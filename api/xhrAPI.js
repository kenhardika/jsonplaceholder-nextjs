function xhrGetData(){
    const request = new XMLHttpRequest();
    const url = `https://jsonplaceholder.typicode.com/users`;
    return new Promise((resolve, reject) => {
        request.open('GET', url);
        request.responseType ='json';
        request.onload = function() {
            if (request.readyState == 4 && request.status == 200) {
                resolve(request.response.data);
            }
            else if(http.readyState == 4 && http.status > 399){
                reject(request.response);
            }
        };
        request.send();
        });
}
function xhrPostData(data){
    const request = new XMLHttpRequest();
    const url = `https://jsonplaceholder.typicode.com/users`;
    let formBody = [];
    for (let property in data) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return new Promise((resolve, reject) => {
        request.open('POST', url);
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.responseType= 'json';
        request.onload = function() {
            if(request.readyState == 4 && request.status == 200) {
                resolve(request.response.data);
            }
            else if(request.readyState == 4 && request.status > 399){
                reject(request.response);
            }
        }
        request.send(formBody);
    });
}
function xhrEditData(payload){
    const request = new XMLHttpRequest();
    const url = `https://jsonplaceholder.typicode.com/users/${payload.id}`;

    return new Promise((resolve, reject) => {
        request.open('PUT', url);
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.responseType= 'json';
        request.onload = function() {
            if(request.readyState == 4 && request.status == 200) {
                resolve(request.response.data);
            }
            else if(request.readyState == 4 && request.status > 399){
                reject(request.response);
            }
        }
        request.send(payload);
    });
}


function xhrDeleteData(id){
    const request = new XMLHttpRequest();
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    return new Promise((resolve, reject) => {
        request.open('DELETE', url);
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.responseType= 'json';
        request.onload = function() {
            if(request.readyState == 4 && request.status == 200) {
                resolve(request.response);
            }
            else if(request.readyState == 4 && request.status > 399){
                reject(request.response);
            }
        }
        request.send();
    });
}

export { xhrGetData, xhrEditData, xhrPostData, xhrDeleteData }