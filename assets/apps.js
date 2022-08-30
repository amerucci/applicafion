/************
 * VARIABLE *
 ************/
const genders = document.querySelectorAll("section");

/*************
 * FUNCTIONS *
 *************/

/***********
 * ACTIONS *
 ***********/

//SHOW HOME PAGE
genders.forEach((gender) => {
  console.log("gender");
  gender.addEventListener("click", function () {
    document.querySelector("#gender").style = "display:none;";
    document.querySelector("#home").style = "display:block";
  });
});
