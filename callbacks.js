//Example 1
function a(callback){
  // We simulate the waiting time for executing function A
    setTimeout( function(){
      console.log("Function A has been executed");
      callback();
    }, 1000 );
    
}
  
  function b(){
    console.log("Function b has been executed");
  }
  
  a(b);



//Example 2

function getUserName(callback){
  var name;
  $.get('https://randomuser.me/api/',  function(data) {
          name = data.results[0].name.first
                  + " " + data.results[0].name.last;
          callback(name);
  });
}
var username ;
function callback(res){
    username = res;
    document.write("Name: " + username);
}
getUserName(callback);


// Example 3
  var seconds = 20;
  function startCountDown(){
    setInterval(function(){
      seconds--;
      showSeconds();
    }, 1000);
  }
  function showSeconds(){
      console.log(seconds);
  }
  startCountDown();

// Example 4
  function doHomework(subject, callback) {
      alert(`Starting my ${subject} homework.`);
      callback();
    }
    
    doHomework('math', function() {
      alert('Finished my homework');
    });

  // Example 4 with Jquery
  $(document).ready(function(){
  $("button").click(function(){
      $("h4").toggle("slow", function(){
      console.log("Action with callback");
      });
  });
  });
  //Example 4 
  document.querySelector("button").onclick = function(){
      document.querySelector("h4").classList.toggle("hide");
          console.log("Callback Action");
  }

  //Example 5 
  function sayHi(callback) {
      callback('Hello!');
  }
  
  sayHi(function(settedValue){
      console.log(settedValue);
  })

