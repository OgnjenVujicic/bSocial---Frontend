var element = document.getElementById("email-signup");
element.addEventListener("submit", function(event) {
  event.preventDefault();

let url = 'http://localhost:5000/login';
let username = document.getElementById("email").value;
let password = document.getElementById("password").value;

let headers = new Headers();

headers.append('Content-Type', 'text/json');
headers.set('Authorization', 'Basic ' + window.btoa(username + ":" + password));

fetch(url, {method:'GET',
        headers: headers,
        //credentials: 'user:passwd'
       })
.then(response => response.json())
.then(json => console.log(json));



})