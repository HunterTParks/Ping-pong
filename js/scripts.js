var put_in_array = function(number){
  var array = [];

  for(var i = 0; i < number; i++){
    array.push(i + 1);
  }
  return array;
}

var divisible_by_three = function(array){
  for(var i = 0; i < array.length; i++){
    if(array[i] % 3 === 0){
      array[i] = "PING";
    }
  }
  return array;
}

var divisible_by_five = function(array){
  for(var i = 0; i < array.length; i++){
    if(array[i] % 5 === 0){
      array[i] = "PONG";
    }
  }
  return array;
}

var divisible_by_fiveteen = function(array){
  console.log(array.length);
  for(var i = 0; i < array.length; i++){
    if(array[i] % 15 === 0){
      array[i] = "PING-PONG";
    }
  }
  return array;
}


$(document).ready(function(){
  $("form#mainform").submit(function(event){
    event.preventDefault();
    var number = $("input#number").val()

    var array = put_in_array(number);
    array = divisible_by_fiveteen(array);
    array = divisible_by_five(array);
    array = divisible_by_three(array);

    for(var i = 0; i < array.length; i++){
      $("ul#output").append("<li> " + array[i] + " </li>");
    }

  });
});
