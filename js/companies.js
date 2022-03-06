const requestURL = 'https://raw.githubusercontent.com/aazcuy/Chamber/main/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  
        const business = jsonObject['business'];
        business.forEach(displayBusiness);
    });


function displayBusiness(business) {
  
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let logo = document.createElement('img');
    

    
    h2.innerHTML = `${business.company}`;
    p.innerHTML = `Address: ${business.address} 
    <br>Phone Number: ${business.phone}
    <br>Website: ${business.website}`;
    
    
    logo.setAttribute('src', business.image);
    logo.setAttribute('alt', `Logo for  ${business.company}`);
    logo.setAttribute('loading', 'lazy');

    card.appendChild(logo);
    card.appendChild(h2);
    card.appendChild(p);
    
    

    
    cards.appendChild(card);
}

var elements = document.getElementsByClassName("cards");


var i;

function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

function cardView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}