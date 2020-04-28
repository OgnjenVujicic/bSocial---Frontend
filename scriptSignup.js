var element = document.getElementById("email-signup");
element.addEventListener("submit", function(event) {
  event.preventDefault();
let data="{ ";
for(let i=0;i<element.getElementsByTagName("input").length;i++){
if(i!==element.getElementsByTagName("input").length-1){
data += '"' + element.getElementsByTagName("input")[i].name + '" : "' + element.getElementsByTagName("input")[i].value + '", ';
}else{
data += '"' + element.getElementsByTagName("input")[i].name + '" : "' + element.getElementsByTagName("input")[i].value + '"';
}
}
data += " }"
console.log(data);

  fetch("http://localhost:5000/register", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: data
  }).then((res) => {
    if (res.ok){ alert('OK!') }else{ res.json().then(function(data) {
        document.body.innerHTML+=JSON.stringify(data);
      });


 }
  })
})
