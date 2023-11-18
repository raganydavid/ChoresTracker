const loginBtn = document.getElementById("loginBtn");
const popupWindow = document.getElementById("popup");


loginBtn.addEventListener('click', otto);

function otto(){
    popupWindow.style.display= "flex";
}