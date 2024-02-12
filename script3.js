const container = document.querySelector('.container');
let color='white';

let marime = document.getElementById("input").value;

function tabla(marime){
  const container = document.querySelector('.container');
  let patrat=container.querySelectorAll("div");
  container.style.gridTemplateColumns=`repeat(${marime},1fr)`;
  container.style.gridTemplateRows=`repeat(${marime},1fr)`;
  patrat.forEach((div) => div.remove());
  let marimeadev= marime*marime;
  for(let i=0;i<marimeadev;i++){
    const patrat = document.createElement('div');
    container.insertAdjacentElement("beforeend",patrat);
    patrat.addEventListener("mouseover", culoarepatrat)
  }
}

tabla(marime);

function changeSize(input){
  if(input>=2&&input<=100){
    tabla(input);
    document.getElementById("preamare").innerHTML="";
  }
  else{
    document.getElementById("preamare").innerHTML="The size must be between 2 and 100!";
  }
}

function reset(marime){
  tabla(marime);
}

function culoarepatrat(){
 if(color==='rand'){
   this.style.backgroundColor='#' + (Math.random().toString(16) + "000000").substring(2,8);
  }
  else{
    this.style.backgroundColor=color;
  }
}

function changeColor(choice){
  color=choice;
}




/*function culoarepatrat(){
  if(color==="random"){
    this.style.backgroundColor=`hs1(${Math.random()*360},100%,50%)`;
  }
  else{
    this.style.backgroundColor=color;
  }
}

function changeColor(choice){
  color=choice;
}

/*for(let i=0;i<256;i++){
  const patrat = document.createElement('div');
  container.insertAdjacentElement("beforeend",patrat);
  patrat.addEventListener("mouseover", () => {
    patrat.style.backgroundColor="black";
  })
}*/