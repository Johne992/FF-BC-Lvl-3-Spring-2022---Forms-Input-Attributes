const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const address = document.getElementById('address');
const email = document.getElementById('email');
const comment = document.getElementById('comment');
const opsys = document.getElementById('opsys');
const reader = document.getElementById('reader');



function userInput(){
 let user = {
  firstname : fname.value,
  lastname  : lname.value,
  address   : address.value,
  email     : email.value,
  comment   : comment.value,
  opsys     : opsys.value
 }
 console.log(user);
}

//getting check box values 
function readerFun() {
  var checks = document.querySelectorAll('[type="checkbox"]');
  var i;
  for (i = 0; i < checks.length; i++) {
    if (checks[i].checked) {
    
    }
  }
  document.getElementById("order").value = "You ordered a coffee with: " + txt;
}