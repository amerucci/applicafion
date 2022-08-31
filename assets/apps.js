/************
 * VARIABLE *
 ************/
const genders = document.querySelectorAll(".genders");
const home = document.querySelector("#home");
let bgMale = "";
let bgFemale = "";
const image_input = document.querySelector("#upload");
const shareAss = document.querySelector(".shareAss");

/*************
 * FUNCTIONS *
 *************/

//SAVE GENDER CHOOSEN IN LOCALSTORAGE
function fillLocalStorageGenderChoose(gender) {
  localStorage.setItem("genderChoosen", gender);
}

/***********
 * ACTIONS *
 ***********/

//SHOW HOME PAGE
genders.forEach((gender) => {
  gender.addEventListener("click", function () {
    fillLocalStorageGenderChoose(gender.dataset.gender);
    console.log(gender.dataset.gender);
    document.querySelector("#gender").style = "display:none;";
    document.querySelector("#home").style = "display:block";
    if (gender.dataset.gender == "male") {
      home.style = "background:url(./img/fh.jpg)";
    } else {
      home.style = "background:url(./img/ff.jpg)";
    }
  });
});

//UPLOAD AND DISPLAY IMG
image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector(
      "#display-image"
    ).style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);

  //CHANGING BUTTON IF IMAGE CHOOSEN
  document.querySelector(".takeAPicture").style = "display:none;";
  let send = document.createElement("div");
  send.style =
    "display: inline-block; background-color: #2e2e2e; color: white; padding: 0.5rem; font-family: sans-serif; border-radius: 0.3rem; cursor: pointer; margin-top: 1rem; position: relative; width: 100px; height: 100px; border-radius: 50%; display: flex; align-items: center; justify-content: center; left: 50%; transform: translate(-50%, 0);";
  let roundInner = document.createElement("div");
  roundInner.className = "roundInner";
  send.className = "test";
  send.innerHTML =
    '<span class="material-symbols-outlined cameraBtn">send</span>';
  send.appendChild(roundInner);
  shareAss.appendChild(send);
  send.addEventListener("click", function () {
    location.href =
      "sms:0637630998;&body=Hey j'ai trouvé un p'tit cul, regarde moi ça. http://127.0.0.1:5500/SANDBOX/APPLICAFION/look.html?ptitcul=test";
    document.querySelector(".takeAPicture").style = "display:block;";
    shareAss.removeChild(send);
    document.querySelector("#display-image").style = "";
    document.querySelector(".cameraBtn").style = "position:absolute; lleft:50%; top:50%; transform:translate(-50%, -50%)";
  });
});
