var year = new Date().getFullYear();
var date = `&copy; Agustina Azcuy | ${year} | Colombia`;
document.getElementsByTagName('section')[0].innerHTML = date;


function lastEdit(){
var latestDate =  new Date(document.lastModified);
document.getElementById("lastModif").innerHTML = latestDate;}

function toggleMenu(){
    document.getElementsByClassName("nav-bar")[0].classList.toggle("responsive");
}