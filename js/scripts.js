var put_in_array = function(number){
  var array = [];
  
  for(var i = 0; i < number; i++){
    array.push(i + 1);
  }
  return array;
}

$(document).ready(function(){
  $("form#mainform").submit(function(event){
    event.preventDefault();
    var number = $("input#number").val()

    var array = put_in_array(number);
  });
});
