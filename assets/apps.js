/************
 * VARIABLE *
 ************/
const genders = document.querySelectorAll(".genders");
const home = document.querySelector("#home");
let bgMale = ""
let bgFemale = ""

/*************
 * FUNCTIONS *
 *************/

//SAVE GENDER CHOOSEN IN LOCALSTORAGE
function fillLocalStorageGenderChoose(gender){
    localStorage.setItem('genderChoosen', gender);  
}


/***********
 * ACTIONS *
 ***********/

//SHOW HOME PAGE
genders.forEach((gender) => {
  gender.addEventListener("click", function () {
    fillLocalStorageGenderChoose(gender.dataset.gender)
    console.log(gender.dataset.gender);
    document.querySelector("#gender").style = "display:none;";
    document.querySelector("#home").style = "display:block";
    if(gender.dataset.gender=="male"){
      home.style="background:url(./img/fh.jpg)"
    }
    else {
      home.style="background:url(./img/ff.jpg)"
    }
  });
});

