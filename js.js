let startMenu = document.getElementById("start");
let body = document.getElementById("body");

let mySheet = `<div class="myNewSheet" style="position: absolute;
                    z-index: 417047847385;
                    left: 0%;
                    top: 0%;
                    background-color: var(--hovColor);
                    height: 100vh;
                    width: 100%;
                    backdrop-filter: blur(5px);
                    ">
                    <div class="sheetMsg" style="position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    height: 15%;
                    width: 35%;
                    text-align: center;
                    background-color: rgba(38, 38, 38, 0.866);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 12px;
                    color: var(--textColor);">
                        <p>En mantenimiento, proximamente!</p>
                    </div>
                    </div>
                            `;

let myNewSheet = document.getElementById("myNewSheet");

startMenu.addEventListener("click", function () {
  document.querySelector(".popup").classList.toggle("popActive");
  document.querySelector(".clicked").classList.toggle("hovActive");
});

let search = document.getElementById("search-box");
search.addEventListener("input", function () {
  let searched = search.value;
  let apps = document.getElementsByClassName("appImg");
  Array.from(apps).forEach(function (button) {
    let appName = button.getElementsByClassName("recAppName")[0].innerText;
    if (appName.includes(searched)) {
      button.style.display = "flex";
    } else {
      button.style.display = "none";
    }
  });
});

let notApps = document.querySelectorAll(".easyDoesIt");
notApps.forEach(function (el) {
  el.addEventListener("click", function () {
    myNewSheet.innerHTML = mySheet;

    body.appendChild(myNewSheet);

    setTimeout(() => {
      myNewSheet.innerHTML = "";
    }, 2000);
  });
});

let powerBtn = document.getElementById("p-btn");
powerBtn.addEventListener("click", function () {
  document.querySelector(".power-menu").classList.toggle("power-menu-vis");
});

let nada = document.querySelectorAll(".nada");
nada.forEach(function (el) {
  el.addEventListener("click", function () {
    myNewSheet.innerHTML = `<div class="myNewSheet" style="position: absolute;
        z-index: 417047847385;
        left: 0%;
        top: 0%;
        background-color: var(--hovColor);
        height: 100vh;
        width: 100%;
        backdrop-filter: blur(5px);
        ">
        <div class="sheetMsg" style="position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 10%;
        width: 25%;
        background-color: rgba(38, 38, 38, 0.866);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        color: var(--textColor);">
            <p>En mantenimiento, proximamente!</p>
        </div>
        </div>
                `;

    body.appendChild(myNewSheet);

    setTimeout(() => {
      myNewSheet.innerHTML = "";
    }, 1500);
  });
});
