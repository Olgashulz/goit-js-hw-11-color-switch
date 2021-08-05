const colors = [
    '#FFFFFF', 
    '#2196F3', 
    '#4CAF50', 
    '#FF9800', 
    '#009688', 
    '#795548', 
];

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body')
}

let isActive = false;
let intervalId = null;
let colorId = null;

refs.startBtn.addEventListener('click', chackIntervalState);
refs.stopBtn.addEventListener('click', stopColor);


const randomIntegerFromInterval = (colors) => {    
    let newColorId = Math.floor(Math.random() * (colors.length));
    if (colorId === newColorId){
        return randomIntegerFromInterval(colors);
    }    
    return colorId = newColorId;
   };


function chackIntervalState () {
  if(isActive){
      return
  }  
  refs.startBtn.setAttribute("disabled", true);
  refs.startBtn.style.pointerEvents = "none";
  changeColor();
  }

function changeColor() {
    isActive = true;
    
    intervalId = setInterval(() =>  { 
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(colors)] }
    , 1000)    
    return intervalId;         
}



function stopColor() {
    refs.startBtn.removeAttribute('disabled');
    refs.body.removeAttribute('style');
    refs.startBtn.removeAttribute('style');

    isActive = false;
    clearInterval(intervalId);
}


