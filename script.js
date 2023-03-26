var isDate = function (input) {
  if(input === new Date()){
	  return true;
  }else{
	  return false;
  }
};

// Do not change the code below.
 const input = prompt("Enter Date.");
alert(isDate(input));
