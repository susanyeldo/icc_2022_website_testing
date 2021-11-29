let regform = document.getElementById("regform");
let reghover = document.getElementById("reghover");
let footer = document.getElementById("footcontainer");
let typecontainer = document.getElementById("typecontainer");
let modalcontainer = document.getElementById("modalcontainer");
let arrowanim = document.getElementById("arrowdown");
let inputfields = document.getElementsByClassName("inputfields");
let teaminput = document.getElementById("teamname");
let arrowanim2 = document.getElementById("arrowdown2");
let contactfade = document.getElementById("contactfade");

function contact()
{
    reghover.style.zIndex = "-1";
    footz.style.zIndex = "-5";
    typecontainer.style.zIndex = "-5";
    modalcontainer.style.zIndex = "-5";
    arrowanim.style.zIndex = "-2";
    arrowanim2.style.zIndex = "-2";
    regform.style.zIndex = "-5";
    inputfields.style.zIndex = "-5";
    teamname.style.zIndex = "-5";
    contactfade.style.zIndex = "10";
}
function revert()
{
    reghover.style.zIndex = "0";
    footz.style.zIndex = "0";
    typecontainer.style.zIndex = "0";
    modalcontainer.style.zIndex = "0";
    arrowanim.style.zIndex = "0";
    arrowanim2.style.zIndex = "0";
    regform.style.zIndex = "0";
    teamname.style.zIndex = "0";
    contactfade.style.zIndex = "0";
}
