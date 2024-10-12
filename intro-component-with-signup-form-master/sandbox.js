let btn = document.querySelector("input.submit");
let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let inputs = document.querySelectorAll("input.text");
let errormsg = document.querySelectorAll("p.errormsg");
let email = document.querySelector("input.email"); 
let errormsgp = document.querySelector("p.email"); 

//I used Chatgpt to make my code neatier and modify the area that I was weak

function validateEverything(inputs) {
  inputs.forEach((input, index) => {
    if (input.value == "" || input.value == undefined) {
      input.classList.add("error");
      console.log(input.placeholder);

      // Access the corresponding error message paragraph by index
      if (errormsg[index]) {
        errormsg[index].innerHTML = `${input.placeholder} cannot be empty`;
        errormsg[index].classList.add("error");
      }
    } 
    
        else if(!email.value.match(validEmail)){
            errormsgp.classList.add("error");
            email.classList.add("error");
            errormsgp.innerHTML = "Looks like this is not a real email";
        }
    
    else {
      // If input is valid, remove the error class and clear the error message
      input.classList.remove("error");

      if (errormsg[index]) {
        errormsg[index].innerHTML = ""; // Clear the error message
        errormsg[index].classList.remove("error");
      }
    }
  });
}

// Event listener for form submission
btn.addEventListener("click", (e) => {
  e.preventDefault();
  validateEverything(inputs); // Call validation on button click
});




//Code that I plugged into chatGpt 

// let btn = document.querySelector("input.submit");
// let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// let inputs = document.querySelectorAll("input.text");
// let errormsg = document.querySelectorAll("p.errormsg"); 

// function validateEverything(inputs){

// inputs.forEach(input => {
    
// if(input.value == "" || input.value == undefined)
    
//     {

// input.classList.add("error");
// console.log(input.placeholder);

// errormsg.forEach(p => {

//     errormsg.innerHTML = "${input.placeholder} can not be empty";
//     p.classList.add("error");

// });
// });

// }



// else if( !input.email.value.match(validEmail)){

//     input.email.classList.add("error");


//     p.email.innerHTML = "Looks like this is not a valid email"


// }

// else{
//     input.classList.remove("error");
// // console.log (input.placeholder);

// errormsg.forEach(p => {

//     // errormsg.innerHTML = "${input.placeholder} can not be empty";
//     p.classList.remove("error");




//  });






// btn.addEventListener("click", (e) => {


// e.preventDefault();
// validateEverything(inputs);

// }); 