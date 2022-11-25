# jsonplaceholder-nextjs
JSON Placeholder with Next JS with axios, fetch &amp; xhr request

    Pada XHR 
    GET:
        untuk melakukan request GET dengan xhr, konfigurasi dilakukan dengan 
         1. Inisialisasi 
            ``` const request = new XMLHttpRequest(); ```
         2. Konfigurasi open menggunakan "GET" pada parameter methode
            ``` request.open("GET", URL) ```
            di bagian ini konfigurasi request dibuat, tetapi untuk melakukan panggilan koneksi network tetap menggunakan request.send() 
         3. Kali ini parameter send dibiarkan kosong karena request saat ini tidak memerlukan payload.
            ``` request.send() ```
         4. Gunakan response.type untuk set property response sesuai kebutuhan, kali ini di project sy menggunkan response type jsoon.
            ``` request.responseType = "json" ```
         4. Setelah koneksi terbentuk, response api akan diterima pada request.response()
            ``` request.response() ```
    POST: 
         1. Untuk melakukan request POST dengan xhr, konfigurasi dilakukan sama seperti GET, 
            yaitu melalui proses Inisialisasi, namun pada konfigurasi open, menggunakan methode POST.
            ``` request.open("POST", URL) ```
         2. Konfigurasi selanjutnya ada pada payload dan headers yang digunakan. Kali ini menggunakan header dengan content-type application/json
            ``` request.setRequestHeader("Content-type", "application/json"); ```
         3. Karena POST membutuhkan payload, parameter send() akan berisi payload yang akan dikirim.
            ``` request.send(JSON.stringify(payload)) ```
            Payload tidak bisa dikirim dalam bentuk object, jadi kita menggunakan JSON.stringify() pada payload terlebih dahulu untuk mengonversi object menjadi string.  
         4. Untuk mendapatkan response apinya sama seperti GET, kita dapat set response propertynya seperti apa dan dapat menerima response pada 
            request.response()
            ``` request.response() ```
    PUT: 
        1. Untuk melakukan request PUT dengan xhr, konfigurasi dilakukan seperti GET/POST.
           Yaitu melalui proses inisialisasi, kemudian pada konfigurasi open, mengunakan methode PUT.
            ``` request.open("PUT", URL) ```
        2. Seperti POST, kita juga harus inisiasi request header sesuai dengan kebutuhan dan api yang digunakan
            ``` request.setRequestHeader("Content-type", "application/json"); ```
        3. Namun untuk metode PUT, kita harus tau data yang akan kita edit karena itu dibutuhkan id pada url untuk memberikan payload yg spesifik pada id    
           tertentu
    DELETE:
        1. Untuk melakukan request delete menggunakan 
            ``` request.open("DELETE", URL) ```
        2. Tambahkan request header content type & application json
        3. Dan terakhir karena delete memiliki response yang kosong, kita hanya terima response status replied dengan meresolve request langsung.
           ```  resolve(request); ```
   Pada Fetch
      GET.
         untuk melakukan GET dengan fetch() API, dapat langsung dilakukan dengan
          ``` fetch(`URL`) ```
         syntax tersebut akan me-return data dalam bentuk promise dan dapat diresolve dengan menggunakan async await.
         sebelum direturn, response dari fetch url dapat dikonversi menjadi file json dengan .json();
         ``` 
         const response = await fetch("https://jsonplaceholder.typicode.com/users");
         return response.json(); 
         ```
         Berbeda dengan xhr, promise yang direturn fetch tidak akan mereject http error status, namun
         akan mendapatkan response normal dengan property response diset false. Fetch hanya akan mereject jika terjadi network failure/ hal yang menginterupsi request. (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
         
      POST. 
         dalam post, set konfigurasi & headers fetch seperti contoh berikut
         ``` 
         const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
            "Content-type": "application/json; charset=UTF-8",
            },
         });
         ```
         Konfigurasi method request dengan mengubah value "method:" menjadi POST/PUT/DELETE.
         headers berisi content type atau credentials 
         body berisi payload yang akan dikirim ke URL, kali ini untuk mengirim object json pastikan dikonversi menggunakan JSON.stringify(payload);
`     PUT 
         Untuk put, gunakan "PUT" pada konfigurasi method dan payload sama seperti pada konfigurasi POST, dan menambahkan payload.id pada URL jika dibutuhkan  
      DELETE 
         Untuk delete gunakan "DELETE" pada method dan sesuaikan kebutuhan URL pada API yang dituju 
   
   Pada Axios
         pada Axios untuk melakukan request "GET", "PUT", "POST", dan "DELETE" dilakukan dengan format yang sama yaitu
         dengan cara mengubah method sesuai permintaan seperti code berikut
         ```
         axios.get(URL, payload, {config})   
         ```
         headers diubah di dalam config, headers bisa berupa content-type, credentials dll

         payload yang dikirim tidak perlu dikonversi seperti fetch API, payload dapat berupa Object/string, tergantung kebutuhan dari API.
         response axios berupa promise yang ketika resolve akan otomatis berbentuk json. 
         Jadi dapat mudah diresolve dengan await pada responsenya 
 
Scope (Global, Local, Block)

   1.Global
      scope global adalah ketika variabel disimpan diluar function (tidak di dalam manapun), dimana variabel dapat diakses darimanapun dalam keseluruhan file.
      ```
      const username = "test123"
      
      function testing(){
         console.log(username) 
       }

      testing() // "test123"
      ```
   2.Local 
      adalah ketika variable dideklarasi didalam function yang menyebabkan variabel tersebut menjadi local pada function tersebut. 
      Local function dibuat ketika function tersebut dipanggil dan didelet ketika function berakhir. Jadi variable hanya dapat diakses di dalam function tsb.
      ``` 

      const testing = () => {
         const user = "agus";
         console.log(user); 
      }
      testing() // will show "agus"
      console.log(user) // will be error user is not defined
      ``` 
   3.Block 
      block adalah ketika variable yang dideklarasi berada dalam {} tidak dapat diakses dari luar block tsb. 
      Block dapat digunakan dengan deklarasi LET dan CONST karena berdasarkan update ES6, let dan const saja yang memiliki sifat block ini.
      var tidak memiliki sifat block.

      ```
      {
         let user = "agus"
      }
       //user cannot be accessed from here except the declaration is using var
      ```
Closures
   Closures adalah kondisi dimana suatu function dapat mengakses referensi pada variabel dalam function lain, walaupun variable yang diakses diluar dari scope variable tersebut.
   ```
   function factoryName(name){
      let myName = name;
      return {
         setName: (newName) =>(MyName = newName),
         getName: ()=> myName
      } 
   }

   const person = factoryName("Bams");
   console.log(person.getName()) // "Bams";
   person.setName("Bams Bang");
   console.log(person.getName()) // "Bams Bang"

   ```

Hoisting
   adalah behaviour atau proses dimana deklarasi functions, variabel, atau class dibaca menjadi deklarasi terlebih dahulu sebelum execution/proses pemanggilan data tsb terjadi. 
   
   Berikut adalah contoh behaviour hoisting 
      1. Dapat memanggil/menggunakan functions sebelum melewati line deklarasi functions yang tersebut. Behavior ini terjadi pada deklarasi functions.
         ```
         names(); // "hey my name is..."
         function names(){
            console.log("hey my name is...");
         }
         ```
      2. Variabel (var) dapat dipanggil sebelum dideklarasi. Return undefined tetapi tidak menyebabkan error. 
          ```
         console.log(x) // undefined 
         var x = 10;
            
         ```
      3. Non-hoisting (let/const), Variabel akan return error jika dipanggil sebelum dideklarasi 

          ```
         console.log(x) // ReferenceError: Cannot access 'x' before initialization 
         const x = 10;
            
         ```
