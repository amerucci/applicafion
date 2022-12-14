<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Applicafion</title>
    <meta
      name="description"
      content="T'as trouvé un p'tit cul à matter vas-y fait tourner"
    />
    <link rel="stylesheet" href="./assets/style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />

  </head>
  <body>
    <section id="gender">
      <div class="prefer">
        <div class="logo">
            <img src="./img/logo.png" alt="l'applicafion">
            <span>l'applicafion</span>
        </div>
        <div class="preferTitle">Tu préfères</div>
        <div class="preferChoice">
            <div class="col50 male genders" data-gender='male'>
                <span class="material-symbols-outlined"> male </span>
                <span class="genderIndication">les hommes</span>
            </div>
            <div class="col50 femal genders" data-gender='female'>
                <span class="material-symbols-outlined"> female </span>
                <span class="genderIndication">les femmes</span>
            </div>
        

         
        </div>
      </div>
    </section>
    <section id="home" style="display:none">


     

      <div class="shareAss">
        <div id="display-image"></div>
        <span>T'as trouvé un p'tit cul à matter, vas-y fait tourner</span>
        <span class="material-symbols-outlined straight">
          straight
          </span>
          <form id="selectAnAss">
          <input type="file" id="upload" hidden accept="image/*" capture name="image" />
          </form>
        
<label for="upload" class="takeAPicture"><span class="material-symbols-outlined cameraBtn">
  photo_camera
  </span>
  <div class="roundInner"></div>
  </label>
      </div>


    </section>
    <script src="./assets/apps.js"></script>
  </body>
</html>
