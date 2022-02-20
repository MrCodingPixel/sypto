// DOM Elements

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');
const body = document.body;

// Apply the cached theme on reload

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}

// Button Event Handlers

darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
  body.classList.replace('dark', 'light');

  localStorage.setItem('theme', 'light');
};

solarButton.onclick = () => {

  if (body.classList.contains('solar')) {

    body.classList.remove('solar');
    solarButton.style.cssText = `
      --bg-solar: var(--yellow);
    `

    solarButton.innerText = 'solarize';

    localStorage.removeItem('isSolar');

  } else {

    solarButton.style.cssText = `
      --bg-solar: white;
    `

    body.classList.add('solar');
    solarButton.innerText = 'normalize';

    localStorage.setItem('isSolar', true);
  }
};

//api

var btc = document.getElementById('btc');



const api_url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd'
async function getDATA() {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
  let btC = data.bitcoin.usd;
  let etH = data.ethereum.usd;
  let doGe = data.dogecoin.usd;
  const Cprice = [btC ,  etH ,  doGe]
  
  //display usd
  
  document.getElementById('price').innerHTML =data.bitcoin.usd;
  document.getElementById('price1').innerHTML =data.ethereum.usd;
  document.getElementById('price2').innerHTML =data.dogecoin.usd;
  
}
getDATA();
