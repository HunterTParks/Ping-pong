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

// FRONT END UI BELOW
$(document).ready(function(){

  // Submit function used to call form
  $("form#mainform").submit(function(event){
    event.preventDefault();

    // Declaration of variables and functions below
    var number = $("input#number").val()
    var array = putInArray(number);
    array = divisibleByFiveteen(array);
    array = divisibleByFive(array);
    array = divisibleByThree(array);

    // Functions used to hide previous work and pictures
    $("ul#output").empty();
    $(".picture").hide();

    // Declaration of variable that has the value of the RADIO input
    var inputCheck = ($("input:radio[name=order]:checked").val());

    // If statement saying it will pass through if the user wanted the
    // range to be in the correct order IE: 1, 2, 3, 4, 5
    if(inputCheck === "ordered"){
      $("ul#output").empty();
      for(var i = 0; i < array.length; i++){
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
      }
    }
    else if(inputCheck === "reverse"){
      console.log(inputCheck);
      // Else if statement saying it will pass through if the user wanted
      // the range to be in reverse order IE: 5, 4, 3, 2, 1
      $("ul#output").empty();
      for(var i = array.length - 1; i >= 0; i--){
        console.log(array[i]);
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
      }
    }
  });
});
