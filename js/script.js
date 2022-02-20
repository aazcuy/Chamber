var year = new Date().getFullYear();
var date = `&copy; Agustina Azcuy | ${year} | Colombia`;
document.getElementsByTagName('section')[0].innerHTML = date;


function lastEdit(){
var latestDate =  new Date(document.lastModified);
document.getElementById("lastModif").innerHTML = latestDate;}

function toggleMenu(){
    document.getElementsByClassName("nav-bar")[0].classList.toggle("responsive");
}



    var now = new Date();
    var dayOfWeek = now.getDay();
    
    if (dayOfWeek == 1 || dayOfWeek == 2) {
        alert("Come join us for the chamber meet and greet Wednesday at 7:00 p.m!");}



    
    

   
