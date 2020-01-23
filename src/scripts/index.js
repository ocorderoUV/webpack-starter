 let form = document.getElementById('user-form');

 form.addEventListener('submit',event=> {
    let user = form.elements['user'];
    let userError = document.getElementById('user-error');
   
    userError.textContent = 'Invalid Entry';
    userError.style.color = 'red';
    user.style.borderColor = 'red';
    user.focus();
    
    event.preventDefault();
 });

//JQUERY
/* 
import $ from 'jquery';

let user ={
    name: 'Ximena',
    avatar: 'ximena.jpg'
};

let promise = $.post("http://5e29ef4e92edd600140de144.mockapi.io/api/v1/users/users",user);

promise.then(
    data => console.log('success: ', data),
    error => console.log('error: ',error)
);
*/

// HTTP
/* 
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 &&  this.status == 200){
        console.log(this.responseText);
    }
};

xhttp.open("GET", "http://5e29ef4e92edd600140de144.mockapi.io/api/v1/users/users","true");

xhttp.send();
*/