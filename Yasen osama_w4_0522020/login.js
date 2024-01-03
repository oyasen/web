var loginn = document.getElementById('login');
var signup = document.getElementById('signup');
var forget = document.getElementById('forget');
var users = [
  {username:"user1" , password:"Password@1"},
  {username:"user2" , password:"Password@2"},
  {username:"user3" , password:"Password@3"},
  {username:"user4" , password:"Password@4"}
];
function logn(){
  loginn.classList.remove('hidden');
  signup.classList.add('hidden');
  forget.classList.add('hidden');
}
function sign(){
  loginn.classList.add('hidden');
  signup.classList.remove('hidden');
  forget.classList.add('hidden');
}
function forg(){
  loginn.classList.add('hidden');
  signup.classList.add('hidden');
  forget.classList.remove('hidden');
}
function login(){ 
  var usr = document.getElementById('luser').value;
  var pass = document.getElementById('lpass').value;
  for(var i = 0 ; i < users.length;i++){
    if(users[i].username == usr && users[i].password == pass){
      alert("login successfuly");
      document.location = 'reveiw.html';
      return true;
    }
  }
  alert("try again");
}
function signupp(){
  var usr = document.getElementById('suser').value;
  var pass = document.getElementById('spass').value;
  var age = document.getElementById('sage').value;
  var phone = document.getElementById('sphone').value
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_]).{8,}$/
  if( usr.length>10 || usr.length<5){
    alert("username must be between 5 and 10");
    return false;
  }
  for(var i = 0 ; i < users.length;i++){
    if(users[i].username == usr ){
      alert("username already exist");
      return false;
    }
  }
  if(!regex.test(pass)){
    alert("week password")
    return false;
  }
  if(age < 18 || age > 60 || age == ""){
    alert("age must be between 18 and 60");
    return false;
  }
  try{
    var gender = document.querySelector('input[name="gender"]:checked').value
  }
  catch{
    alert("choose you gender");
    return false;
  }
  if(phone.length != 11){
    alert("phone number must be 11 numbers");
    return false;
  }
  var user = {username: usr , password: pass};
  users.push(user);
  alert("signup successfuly");
  console.log(users);
  logn();
  

}
function forgett(){ 
  var usr = document.getElementById('fuser').value;
  var pass = document.getElementById('fpass').value;
  for(var i = 0 ; i < users.length;i++){
    if(users[i].username == usr){
      users[i].password = pass;
      alert("updated successfuly");
      logn();
      return true;
    }
  }
  alert("try again");
}