let index = 3; // geeft aan welke link actief moet zijn en welke inhoud moet worden voorgeschoven
let main = document.querySelector('.inhoud');
let deLinkjes = document.querySelectorAll('.nav__menuitem');
let alleLinkjesArr =[];
deLinkjes.forEach( (item) => {
  item.addEventListener('click', (e) => {
    index = alleLinkjesArr.indexOf(item);
    activeren(index);
  });
  alleLinkjesArr.push(item);
});

const activeren = (num) => {
  //verwijder eventuele actieve statussen van de de linkjes
  verwijderActief();
  // activeer de link num
  alleLinkjesArr[num].classList.add('nav--actief');
  // schuif inhoud num voor
  main.style.marginLeft = (-100*num) + 'vw';
}

const verwijderActie = () => {
  alleLinkjesArr.forEach( (item) => {
    item.classList.remove('nav--actief');
  })
}

//bij de start eerste item
activeren(index);
