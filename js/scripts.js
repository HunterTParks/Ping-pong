var putInArray = function(number){
  var array = [];

  for(var i = 0; i < number; i++){
    array.push(i + 1);
  }
  return array;
}

var divisibleByThree = function(array){
  for(var i = 0; i < array.length; i++){
    if(array[i] % 3 === 0){
      array[i] = "PING";
    }
  }
  return array;
}

var divisibleByFive = function(array){
  for(var i = 0; i < array.length; i++){
    if(array[i] % 5 === 0){
      array[i] = "PONG";
    }
  }
  return array;
}

var divisibleByFiveteen = function(array){
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

    var array = putInArray(number);
    array = divisibleByFiveteen(array);
    array = divisibleByFive(array);
    array = divisibleByThree(array);

    for(var i = 0; i < array.length; i++){
      $("ul#output").append("<li> " + array[i] + " </li>");
    }

  });
});
