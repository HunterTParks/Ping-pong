var putInArray = function(number){
  var array = [];

  for(var i = 0; i < number; i++){
    array.push(i + 1);
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

var divisibleByFive = function(array){
  for(var i = 0; i < array.length; i++){
    if(array[i] % 5 === 0){
      array[i] = "PONG";
    }
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

var modulus = function(array, i){
  test = ((array[i] % 15) + 15) % 15
  console.log("I EQUALS " + i + "TEST EQUALS " + test);
  return test;
}

$(document).ready(function(){
  $("form#mainform").submit(function(event){
    event.preventDefault();

    var number = $("input#number").val()
    var array = putInArray(number);
    array = divisibleByFiveteen(array);
    array = divisibleByFive(array);
    array = divisibleByThree(array);

    $("ul#output").empty();
    $(".picture").hide();
    //$("#pingpong").remove();
    for(var i = 1; i < array.length; i++){
      $("ul#output").append("<li> " + array[i] + " </li>");

      if(i === 14){
        $("#pingpong").show();
      }
      if(i === 29){
        $("#pingpong2").show();
      }
      if(i === 44){
        $("#pingpong3").show();
      }

      // if(array.length < 15){
      //   $("midColumn").empty();
      // }
    }
  });
});
