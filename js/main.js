const articleTrain=document.querySelector("#content1 > section"); //기차
const articles = document.querySelectorAll("#content1 > section > article"); //아티클
const onboarding = document.querySelectorAll("#content1 > section > article:last-of-type"); //온보딩아티클
const btnPress = document.querySelector(".btn_press");//press버튼


//content1 메인이미지 에니메이션
function ani(){
  articles[0].classList.add("on")
}
let indxAni = setTimeout(ani,300)


let devHeight = window.innerHeight;
window.addEventListener('resize',()=>{
  devHeight = window.innerHeight;
})

btnPress.addEventListener("click",()=>{
  articles.forEach(item=>{
    item.classList.toggle("on");
  })
})

//innerheight top = 0보다작을때 바디 Fixed
const body = document.querySelector('body');
body.addEventListener('wheel',()=>{
  if(devHeight<=0){
    body.classList.remove("on");
  }
})

//top값에 맞춰서 부드럽게 이동
function activation(topValue) {
  window.scroll({
    top:topValue,
    left:0,
    behavior:"smooth"
  })
  for(let k=0; k < contents.length ; k++){
    if(topValue >= k*devHeight && topValue < (k+1)*devHeight){
      contents.forEach(item =>{
        item.classList.remove("on")
      });
      contents[k].classList.add("on");    
      // lis.forEach(item =>{
      //   item.classList.remove("on")
      // });
      // lis[k].classList.add("on");
    }
  }
}


const selectItems = document.querySelectorAll('.select li');
const contents = document.querySelectorAll("#container > div"); //content1~4
const ul = document.querySelectorAll(".nav")
const lis = document.querySelectorAll(".nav li");

console.log(contents);
console.log(lis);

// cont1 article2 메뉴를 클릭하면 해당되는 content로 이동
selectItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    body.classList.remove("on");
    const targetPosition = contents[index+1].offsetTop;
    activation(targetPosition);
  });
});
// cont2~con4 메뉴를 클릭하면 해당하는 content로 이동
lis.forEach((item,index)=>{
  item.addEventListener('click',()=>{
    const targetPosition = contents[index+1].offsetTop;
    activation(targetPosition);
  })
})


const workDom = document.querySelector(".work_info");
const btnEsc = document.querySelector(".btn_esc");

btnEsc.addEventListener("click",()=>{
  workDom.classList.remove("on");
})


const pjTrain = document.querySelector(".dom > ul");
const pjElement = document.querySelectorAll(".dom>ul>li");
const movingX = document.querySelector(".dom>ul>li:first-of-type").offsetWidth;
console.log(movingX);
const btnPrev = document.querySelector(".btn_prev");
const btnNext = document.querySelector(".btn_next");

const numElement = document.querySelector(".number");
let number = numElement.innerText;
console.log(number);

let indxNum = 0;
let lastNum = pjElement.length-1;

btnNext.addEventListener("click",e=>{
  indxNum++;
  number = parseInt(number) + 1;
  console.log(number);
  numElement.innderText = number;


  pjTrain.style.transform = `translateX(${-movingX * indxNum}px)`
  pjTrain.style.transition="400ms"
  if(indxNum == lastNum){
    indxNum ==lastNum;
    `translateX(${-movingX * indxNum}px)`
  }
})
btnPrev.addEventListener("click",e=>{
  indxNum--;
  // number = parseInt(number) - 1;
  pjTrain.style.transform = `translateX(${-movingX * indxNum}px)`
  pjTrain.style.transition="400ms"
  if(indxNum >= lastNum){
    indxNum == 0;
    pjTrain.style.transform = `translateX(${-movingX * indxNum}px)`
  }
})




//도넛차트
const chart1 = document.querySelector('.doughnut1');
const chart2 = document.querySelector('.doughnut2');
const chart3 = document.querySelector('.doughnut3');

function makeChart (percent,classname,color){
  let i=1;
  let chartFn = setInterval(function(){
    if(i<=percent){
      colorFn(i,classname,color);
      i++;
    } else {
      clearInterval(chartFn);
    }
  },10);
}

function colorFn (i,classname,color){
  classname.style.background = "conic-gradient("+color+"0%"+i+"%,#fff"+i+"100%)";
}


