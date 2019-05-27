var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 400) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

//Prikazivanje i sklanjanje menija
document.getElementById('toggle').addEventListener('click', function () {
  let menu = document.querySelector('.showmenu');
  if (menu.style.display == '') {
    menu.style.display = 'block';
  }
  else {
    menu.style.display = '';
  }
});

//Mijenjanje aktivnog linka
let item = null;
document.querySelector('.list').addEventListener('click', function (e) {
  item = e.target;
  let list = document.querySelector('.list');
  let items = document.querySelectorAll('.list__item__link');
  items.forEach(function (item) {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
  });
  item.classList.add('active');

  //Zatvaranje menija nakon klika na neki od linkova
  let menu = document.querySelector('.showmenu');
  menu.style.display = '';
});

//Vracanje na pocetak web stranice
let buttonReturn = document.querySelector('#button');
buttonReturn.addEventListener('click', function () {
  let menu = document.querySelector('.showmenu');
  menu.style.display = '';
})

//Klik na pricing kartici desno i prikazivanje naredne kartice
document.querySelector('.pricings').addEventListener('click', function (e) {
  let pricingsArray = ['pricing-box-1', 'pricing-box-2', 'pricing-box-3'];

  let pricingBox1 = document.getElementById('pricing-box-1');
  let pricingBox2 = document.getElementById('pricing-box-2');
  let pricingBox3 = document.getElementById('pricing-box-3');

  let niz = [pricingBox1,pricingBox2,pricingBox3];

  if (e.target.parentNode.classList.contains('button-right')) {
    let id = e.target.parentNode.parentNode.id;
    let box = e.target.parentNode.parentNode;
    box.style.display = 'none';
    let nextElement = null;
    let lol = null;
    pricingsArray.forEach(function (item,index) {
      if (item == id) {
        if (item == pricingsArray[2]) {
          nextElement = pricingBox1;
        }
        else {
          nextElement = niz[index+1];
        }
      }
    });
    nextElement.style.display = 'block';
  }
});

//Klik na pricing kartici lijevo i prikazivanje naredne kartice
document.querySelector('.pricings').addEventListener('click', function (e) {
  let pricingsArray = ['pricing-box-1', 'pricing-box-2', 'pricing-box-3'];

  let pricingBox1 = document.getElementById('pricing-box-1');
  let pricingBox2 = document.getElementById('pricing-box-2');
  let pricingBox3 = document.getElementById('pricing-box-3');

  let niz = [pricingBox1,pricingBox2,pricingBox3];

  if (e.target.parentNode.classList.contains('button-left')) {
    let id = e.target.parentNode.parentNode.id;
    let box = e.target.parentNode.parentNode;
    box.style.display = 'none';
    let nextElement = null;
    let lol = null;
    pricingsArray.forEach(function (item,index) {
      if (item == id) {
        if (item == pricingsArray[0]) {
          nextElement = pricingBox3;
        }
        else {
          nextElement = niz[index-1];
        }
      }
    });
    nextElement.style.display = 'block';
  }
});

//Klik na card ( team ) kartici desno i prikazivanje naredne kartice
let card1 = document.querySelector('#card-1');
let card2 = document.querySelector('#card-2');
let card3 = document.querySelector('#card-3');
let card4 = document.querySelector('#card-4');
let cardsArray = [card1,card2,card3,card4];
document.querySelector('.cards').addEventListener('click', function(e){
  let nextElement = null;
  if(e.target.parentNode.classList.contains('button-right')){
    // console.log('Button right');
    let currentElement = e.target.parentNode.parentNode;
    cardsArray.forEach(function(item, index){
      if(item.id == currentElement.id){
        if(currentElement.id != cardsArray[3].id){
          nextElement = cardsArray[index+1];
         
        }
        else{
          nextElement = cardsArray[0];
        }
      }
    });
    currentElement.style.display = 'none';
    nextElement.style.display = 'block';
  }

});

//Klik na card ( team ) kartici lijevo i prikazivanje naredne kartice
document.querySelector('.cards').addEventListener('click', function(e){
  let nextElement = null;
  if(e.target.parentNode.classList.contains('button-left')){
    // console.log('Button left');
    let currentElement = e.target.parentNode.parentNode;
    cardsArray.forEach(function(item, index){
      if(item.id == currentElement.id){
        if(currentElement.id != cardsArray[0].id){
          nextElement = cardsArray[index-1];
         
        }
        else{
          nextElement = cardsArray[3];
        }
      }
    });
    currentElement.style.display = 'none';
    nextElement.style.display = 'block';
  }

});

