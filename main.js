// DOM Elements
function myFunction() {
    
   var Head = document.getElementById('Head');
   var body = document.getElementById('light');
   var nav = document.getElementById('navbar');
   var navv = document.getElementById('navbar-nav');
   var usi = document.getElementById('BTC');
   

   Head.classList.toggle("dark-mode");
   body.classList.toggle("dark-mode");
   navv.classList.toggle("tabel-dark");
   usi.classList.toggle("hover-dark");



}







//api










const api_url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Ctether%2Cbinancecoin%2Cdogecoin%2Ccardano%2Cripple%2Csolana&vs_currencies=usd'
async function getDATA() {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
  let btC = data.bitcoin.usd;
  let etH = data.ethereum.usd;
  let Tether = data.tether.usd;
  let BC = data.binancecoin.usd;
  let dOge = data.dogecoin.usd;
  let car = data.cardano.usd;
  let rip = data.ripple.usd;
  let sol = data.solana.usd;
  let lite = data.litecoin.usd;
  console.log(Tether);
  const Cprice = [btC ,  etH ,  Tether, BC , dOge , rip , sol]
  console.log(Cprice)
  
  //display usd
  
  if (btC > -1) {
   document.getElementById('price').innerHTML = '+' + '<b>'+btC+'</b>';
  }else if (btC < -1) {
    document.getElementById('price').innerHTML = '-' + '<b>'+btC+'</b>';
  }
  if (etH > -1) {
    document.getElementById('price1').innerHTML = '+' + '<b>'+etH+'</b>';
  } else if (etH < -1) {
    document.getElementById('price1').innerHTML = '-' + '<b>'+etH+'</b>';
  }
  if (Tether > -1) {
    document.getElementById('price2').innerHTML = '+' + '<b>'+Tether+'</b>';
  } else if (Tether < -1) {
    document.getElementById('price2').innerHTML = '-' + '<b>'+Tether+'</b>';
  }
  if (BC > -1) {
    document.getElementById('price3').innerHTML = '+' + '<b>'+lite+'</b>';
  } else if (BC < -1) {
    document.getElementById('price3').innerHTML = '-' + '<b>'+lite+'</b>';
  }
  if (dOge > -1) {
    document.getElementById('price4').innerHTML = '+' + '<b>'+dOge+'</b>';
  } else if (dOge < -1) {
    document.getElementById('price4').innerHTML = '-' + '<b>'+dOge+'</b>';
  }
  if (car > -1) {
    document.getElementById('price5').innerHTML = '+' + '<b>'+car+'</b>';
  } else if (car <- 1) {
    document.getElementById('price5').innerHTML = '-' + '<b>'+car+'</b>';
  }
   if (sol > -1) {
     document.getElementById('price6').innerHTML = '+' + '<b>'+sol+'</b>';
   } else if (sol < -1) {
     document.getElementById('price6').innerHTML = '-' + '<b>'+sol+'</b>';
   }
    if (rip > -1) {
      document.getElementById('price7').innerHTML = '+' + '<b>'+rip+'</b>';
    } else if (rip < -1) {
      document.getElementById('price7').innerHTML = '-' + '<b>'+rip+'</b>';
    }
     if (lite > -1) {
       document.getElementById('price8').innerHTML = '+' + '<b>'+lite+'</b>';
     } else if (lite < -1) {
       document.getElementById('price8').innerHTML = '-' + '<b>'+lite+'</b>';
     }
     
     
  //dmain content
  document.getElementById('usd1').innerHTML ='<b>'+'$'+btC+'</b>'
  document.getElementById('usd2').innerHTML ='<b>'+'$'+lite+'</b>'
  document.getElementById('usd3').innerHTML ='<b>'+'$'+etH+'</b>'
  
}
getDATA();

