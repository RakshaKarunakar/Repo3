const prompt = require('prompt');
function add(){
  prompt.start();

  prompt.get(['num1', 'num2'], 
  function(err, res){
      if(err){
          console.log(err);
      }
      else{
          var add = parseFloat(res.num1) + parseFloat(res.num2);
          console.log("Addition : " +add)
          var sub = parseFloat(res.num1) - parseFloat(res.num2);
          console.log("Subtraction : " +sub)
          var mul = parseFloat(res.num1) * parseFloat(res.num2);
          console.log("Multiplication : " +mul)
          var div = parseFloat(res.num1) / parseFloat(res.num2);
          console.log("Division : " +div)
      }
    })
}
add();