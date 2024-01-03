function nav(index){
  document.getElementById('products').style.transform = `translateX(${index * -100}vw)`;
}
function login(){
  document.location = 'login.html';
}