//for button counter

var button = document.getElementById('counter');
button.onclick = function(){
    //create a req
    var request = new XMLHttpRequest();
    
    //store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }    
    };
    // make the request
    request.open('GET','http://nikildevikumar.imad.hasura-app.io/counter',true);
    request.send(null);
    
};

//submit name

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  //make req to server and send name
  //capture list of names and render it
  var names = ['name1','name2','name3'];
  var list ='';
  for (var i=0; i<names.length; i++){
      list += '<li>' + names[i] + '</li>';
  }
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
};