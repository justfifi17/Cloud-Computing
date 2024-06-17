// function to display clicked buttons' characters or calculation outputs
function appendToScreen(value) {
   document.getElementById("screen").value += value;
  }

// function to calculate the arithmetic operations given 
  function calculateResult() {
   var screen = document.getElementById("screen");
   screen.value = eval(screen.value); // uses built in eval() javascript function to handle the operations
  }

  //function to clear/empty the screen 
  function clearScreen() {
   document.getElementById("screen").value = '';
  }