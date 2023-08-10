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
//btnpress 누르면 메뉴 셀렉트 페이지 나오기
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


for(let i=0; i<contents.length; i++){
  contents[i].addEventListener('wheel',e=>{
    if(e.deltaY < 0) {
      //wheel up
      if(e.currentTarget==contents[1]){
        // console.log(e.currentTarget);
        makeChart(90, chart1, '#268aff');
        makeChart(80, chart2, '#4c9cf9');
        makeChart(70, chart3, '#84b6f1');
        makeChart(90, chart4, '#268aff');
        makeChart(80, chart5, '#4c9cf9');
      }
      let prev = e.currentTarget.previousElementSibling.offsetTop;
      console.log(prev);
      activation(prev);
    }else if (e.deltaY > 0) {
      //wheel down
      if(e.currentTarget==contents[2]){
        // console.log(e.currentTarget);
        makeChart(90, chart1, '#268aff');
        makeChart(80, chart2, '#4c9cf9');
        makeChart(70, chart3, '#84b6f1');
        makeChart(90, chart4, '#268aff');
        makeChart(80, chart5, '#4c9cf9');
      }
      let next = e.currentTarget.nextElementSibling.offsetTop;
      console.log(next);
      activation(next);
    }
  })
}

//도넛차트

const chart1 = document.querySelector('.doughnut1');
const chart2 = document.querySelector('.doughnut2');
const chart3 = document.querySelector('.doughnut3');
const chart4 = document.querySelector('.doughnut4');
const chart5 = document.querySelector('.doughnut5');

const makeChart = (percent, classname, color) => {
  let i = 1;
  let chartFn = setInterval(function() {
    if (i < percent) {
      colorFn(i, classname, color);
      i++;
    } else {
      clearInterval(chartFn);
    }
  }, 10);
}

const colorFn = (i, classname, color) => {
  classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #e2e2e2 " + i + "% 100%)";
}

// window.addEventListener('scroll', e=>{
//   console.log(window.scrollY);
//   let scrollY = window.scrollY;
  // if (scrollY >= 1216)  {
  //   setTimeout(
  //     makeChart(90, chart1, '#268aff'),
  //     makeChart(80, chart2, '#4c9cf9'),
  //     makeChart(70, chart3, '#84b6f1'),
  //     makeChart(90, chart4, '#268aff'),
  //     makeChart(80, chart5, '#4c9cf9'),1000)
  // }
// });



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
//Dom창에서 next버튼 클릭하면 슬라이드 이동
btnNext.addEventListener("click",e=>{
  if (indxNum < lastNum) {
    indxNum++;
    number = parseInt(number) + 1;
    console.log(number);
    numElement.innerText = "0" + number;
    pjTrain.style.transform = `translateX(${-movingX * indxNum}px)`
    pjTrain.style.transition = "400ms"
  }
})
//Dom창에서 prev버튼 클릭하면 슬라이드 이동
btnPrev.addEventListener("click",e=>{
  // indxNum--;
  // number = parseInt(number) - 1;
  if (indxNum > 0) {
    indxNum--;
    number = parseInt(number) - 1;
    console.log(number);
    numElement.innerText = "0" + number;
    pjTrain.style.transform = `translateX(${-movingX * indxNum}px)`
    pjTrain.style.transition = "400ms"
  }
})




