function getresult(){
  var yes = 0;
  var no = 0;
  for(var i = 0 ; i < 3 ; i++){
try{
    var answer = document.querySelector(`input[name="q${i+1}"]:checked`).value;

    if(answer == "yes"){
      yes++;
    }
    else{
      no++;
    }
  }
  catch{
    alert("choose all radio buttons");
    return false;
}
}

    alert(`yes:${yes} no:${no}`);
    document.location = 'home.html'

  }

