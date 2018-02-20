//for button counter
var counter = 0;
var button = document.getElementById('counter');
button.onclick = function(){
    //should make a req to the counter end point
    
    //store it in a variable
    
    //render the variable
    counter = counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};