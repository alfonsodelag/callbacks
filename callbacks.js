function a(callback){
    // Simulamos un tiempo de espera en la ejecución de la función a
    setTimeout( function(){
      console.log("Se ha ejecutado la función a");
      callback();
    }, 1000 );
    
}
  
  function b(){
    console.log("Se ha ejecutado la función b");
  }
  
  a(b);


//CALLBACK EXAMPLE
//   Example 1

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


    // Example 2
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

    // Example 3
    function doHomework(subject, callback) {
        alert(`Starting my ${subject} homework.`);
        callback();
      }
      
      doHomework('math', function() {
        alert('Finished my homework');
      });

    // Example 4 JQUERY VERSION
    $(document).ready(function(){
    $("button").click(function(){
        $("h4").toggle("slow", function(){
        console.log("Action with callback");
        });
    });
    });
    //Example 4 JavaScript Example
    document.querySelector("button").onclick = function(){
        document.querySelector("h4").classList.toggle("hide");
            console.log("Actionw with callback");
    }

    //Example 5 
    function hagoAlgo(callback) {
        callback('Hola Anexsoft !!');
    }
    
    hagoAlgo(function(valorQueMeSetearon){
        console.log(valorQueMeSetearon);
    })

