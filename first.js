function fn() {
  let fname = document.getElementById('fname').value;
  if (fname.length == 0 ) {
    document.querySelector('.error1').style.display = 'block';
  }
  else {
    document.querySelector('.error1').style.display = 'none';
  }
}

function ln() {
  let lname = document.getElementById('lname').value;
  if (lname.length == 0 ) {
    document.querySelector('.error2').style.display = 'block';
  }
  else {
    document.querySelector('.error2').style.display = 'none';
  }
}

function email() {
  let email = document.getElementById('emailid').value;
  if (email.length == 0 || !email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)) {
    document.querySelector('.error3').style.display = 'block';
  }
  else {
    document.querySelector('.error3').style.display = 'none';
  }
}

function cpcheck() {
  let password = document.getElementById('password').value;
  let confirmpassword = document.getElementById('confirmpassword').value;
  if (confirmpassword.length == 0 || password != confirmpassword) {
    document.querySelector('.error5').style.display = 'block';
  }
}
function savedata() {

  let signupfname = document.getElementById('fname').value;
  let signuplname = document.getElementById('lname').value;
  let signupemail = document.getElementById('emailid').value;
  let signuppassword = document.getElementById('password').value;

  var re = /\S+@\S+\.\S+/;
  
  if(signupfname.length != 0){
      if(signuplname.length != 0){
        if(re.test(signupemail)){
          if(signuppassword.length != 0){
            var mycontent3 = document.getElementById("emailid").value;
            localStorage.setItem("data3", mycontent3);
            var mycontent7 = document.getElementById("password").value;
            localStorage.setItem("data7", mycontent7);
        
            window.location.href = 'login.html';
          }else{
            // alert('please fill the password');
          document.querySelector('.error4').style.display = 'block';

          }
        }else{
          // alert('please fill the mail');
          document.querySelector('.error3').style.display = 'block';

        }

      }else{
        // alert('please fill the last name');
        document.querySelector('.error2').style.display = 'block';

      }

  } else{
    // alert('please fill the first name');
    document.querySelector('.error1').style.display = 'block';

  }
  
  // if (fname.length == 0 || lname.length == 0 || email.length == 0 || password.length == 0 || confirmpassword.length == 0) {
  //   alert(' *Please fill all the Input fields');
  // } else  {

  //   var mycontent3 = document.getElementById("emailid").value;
  //   localStorage.setItem("data3", mycontent3);
  //   var mycontent7 = document.getElementById("password").value;
  //   localStorage.setItem("data7", mycontent7);

  //   window.location.href = 'login.html';
  // }


}

function loaddata() {
  var getdata1 = localStorage.getItem("data1")
  document.getElementById('finput').innerHTML = getdata1;
  var getdata2 = localStorage.getItem("data2")
  document.getElementById("linput").innerHTML = getdata2;
  var getdata3 = localStorage.getItem("data3")
  document.getElementById("einput").innerHTML = getdata3;
  var getdata4 = localStorage.getItem("data4")
  document.getElementById("dinput").innerHTML = getdata4;
  var getdata5 = localStorage.getItem("data5")
  document.getElementById("ginput").innerHTML = getdata5;
  var getdata6 = localStorage.getItem("data6")
  document.getElementById("passinput").innerHTML = getdata7;
}
function emailLogin() {

  var emailcompare = localStorage.getItem("data3");

  let email_login = document.getElementById('email_login').value;
  if (email_login.length == 0 || emailcompare != email_login) {
    document.querySelector('.errEmailLin').style.display = 'block';
  }
  else {
    document.querySelector('.errEmailLin').style.display = 'none';
  }
}
function passwordLogin() {

  var passcompare = localStorage.getItem("data7")
  let pass_login = document.getElementById('pass_login').value;
  if (pass_login.length == 0 || passcompare != pass_login) {
    document.querySelector('.errPassLin').style.display = 'block';
  }
  else {
    document.querySelector('.errPassLin').style.display = 'none';
  }
}

function login() {
  var emailcompare = localStorage.getItem("data3")
  let email_login = document.getElementById('email_login').value;
  var passcompare = localStorage.getItem("data7")
  let pass_login = document.getElementById('pass_login').value;
 
  if (email_login.length != 0  ) {
    if(pass_login.length != 0){
      if (emailcompare == email_login && passcompare == pass_login) {
        document.querySelector('.errEmailLin').style.display = 'none';
        document.querySelector('.errPassLin').style.display = 'none';
        window.location.href = 'home.html';
      }
  }else{
    document.querySelector('.errPassLin').style.display = 'block';
  }

  }else{
    document.querySelector('.errEmailLin').style.display = 'block';

  } 

  
}
function addtask() {
  let task = document.getElementById("task").value;
  if (task.length == 0) {
    document.querySelector(".errTodo").style.display = "block";
  }
  else {
    document.querySelector(".errTodo").style.display = "none";
    let newtask = document.getElementById("newtask");
    let tr = document.createElement('tr');
    tr.textContent = task;

    let a = document.createElement('a');
    a.textContent = "X";
    a.style.textAlign = 'center';
    a.style.color = 'red';
    a.style.textDecoration = 'none';
    a.style.marginLeft = '20px';
    a.style.cursor = 'pointer';
    newtask.appendChild(tr);
    tr.appendChild(a);
  }
  document.getElementById("task").value = "";
}


let btn = document.querySelector('#newtask'); 
function logout() {
  window.location.href = 'login.html';
}