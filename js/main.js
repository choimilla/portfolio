
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
      // section[k].classList.add("on"); 

      contents[k].classList.add("on");    
    }
  }
}

const navi = document.querySelector("nav");
const btnHam = document.querySelector(".btn_ham")
const selectItems = document.querySelectorAll('.select li');
const contents = document.querySelectorAll("#container > div"); //content1~4
// 햄버거 메뉴 
btnHam.addEventListener("click", e => {
  e.preventDefault();
  if (navi.classList.contains("on")) {
    navi.classList.remove("on");
    header.classList.remove('on');
  } else {
    navi.classList.add("on");
    header.classList.add('on');
  }
});

//햄버거 네비게이션 메뉴 클릭
const lis = document.querySelectorAll("ul.nav > li");
const header=document.querySelector("header")
for(let i=0; i<lis.length; i++){
  lis[i].addEventListener("click",(e)=>{
    e.preventDefault();
    body.classList.remove("on");
    activation((i+1)*devHeight);
    })
  }

// cont1 article2 메뉴를 클릭하면 해당되는 content로 이동
selectItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    body.classList.remove("on");
    const targetPosition = contents[index+1].offsetTop;
    activation(targetPosition);
    about.classList.add('on');
  });
});

const about = document.querySelector("#content2>section");
const contTop = about.parentElement.getBoundingClientRect().top
console.log(contTop)

// console.log(about.parentElement);
// console.log(about.getBoundingClientRect().top);
// function aboutani(){
//   if(about.parentElement.getBoundingClientRect().top>=0){
//     about.classList.add('on');
//   }
// }

for(let i=0; i<contents.length; i++){
  contents[i].addEventListener('wheel',e=>{
    if(e.deltaY < 0) {
      //wheel up
      let prev = e.currentTarget.previousElementSibling.offsetTop;
      console.log(prev);
      activation(prev);
      about.classList.add('on');
      // aboutani()
    }else if (e.deltaY > 0) {
      //wheel down
      let next = e.currentTarget.nextElementSibling.offsetTop;
      console.log(next);
      activation(next);
      about.classList.add('on');
      // aboutani()
    }
  })
}
// 스크롤 y가 컨텐츠2 top값 보다 같거나 클때 
window.addEventListener('scroll',e=>{
  let scrollY = window.scrollY;
  console.log(scrollY);

  if(scrollY>=contTop){
    about.classList.add('on');
   setTimeout(function(){
    run(_chart)
   }, 800)
  
  }
})

'use strict'
var $window = $(window);

function run()
{
	var fName = arguments[0],
		aArgs = Array.prototype.slice.call(arguments, 1);
	try {
		fName.apply(window, aArgs);
	} catch(err) {
		 
	}
};
 
/* chart
================================================== */
function _chart ()
{
	$('.skills_box').appear(function() {
		setTimeout(function() {
			$('.chart').easyPieChart({
				easing: 'easeOutElastic',
				delay: 3000,
				barColor: '#369670',
				trackColor: '#f3f3f3',
				scaleColor: false,
				lineWidth: 22,
				trackWidth: 22,
				size: 160,
				lineCap: 'round',
				onStep: function(from, to, percent) {
					this.el.children[0].innerHTML = Math.round(percent);
				}
			});
		}, 150);
	});
};
 

$(document).ready(function() {
	run(_chart);  
});


//도넛차트
// const chart1 = document.querySelector('.doughnut1');
// const chart2 = document.querySelector('.doughnut2');
// const chart3 = document.querySelector('.doughnut3');
// const chart4 = document.querySelector('.doughnut4');
// const chart5 = document.querySelector('.doughnut5');

// const makeChart = (percent, classname, color) => {
//   let i = 1;
//   let chartFn = setInterval(function() {
//     if (i < percent) {
//       colorFn(i, classname, color);
//       i++;
//     } else {
//       clearInterval(chartFn);
//     }
//   }, 10);
// }

// const colorFn = (i, classname, color) => {
//   classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #e2e2e2 " + i + "% 100%)";
// }

// window.addEventListener('scroll', e=>{
//   console.log(window.scrollY);
//   let scrollY = window.scrollY;
//   if (scrollY >= 1216)  {
//     setTimeout(
//       makeChart(90, chart1, '#268aff'),
//       makeChart(80, chart2, '#4c9cf9'),
//       makeChart(70, chart3, '#84b6f1'),
//       makeChart(90, chart4, '#268aff'),
//       makeChart(80, chart5, '#4c9cf9'),1000)
//   }
// });

const thumbnail = document.querySelectorAll("ul.project > li");
console.log(thumbnail);
const workDom = document.querySelectorAll(".work_info");
console.log(workDom);
// console.log(workDom[0].children[1].children[1].childElementCount);
const btnEsc = document.querySelectorAll(".btn_esc");
let movingX = document.querySelector(".pjExplanation>li:first-child").offsetWidth;
console.log(movingX);
const btnPrev = document.querySelectorAll(".btn_prev"); //6개
console.log(btnPrev);
const btnNext = document.querySelectorAll(".btn_next"); //6개
console.log(btnNext);


for(let i=0; i<workDom.length; i++){
  //썸네일 누르면 dom창 팝업되기
  thumbnail[i].addEventListener("click",()=>{
  workDom[i].classList.add("on")
  // console.log(workDom[i].children[1].children[1].childElementCount);
  })
  // Esc버튼을 누르면 모든 워크돔의 class on 지우기
  btnEsc[i].addEventListener("click",()=>{
    workDom.forEach(item=>{
      item.classList.remove("on")
    })
  })
};

function slideNext(train){
    if(indxNum<lastNum){
      train.style.transform = `translateX(${-movingX * indxNum}px)`
      train.style.transition = "400ms"
    }
}
function slidePrev(train){
    if(indxNum>0){
      train.style.transform = `translateX(${-movingX * indxNum}px)`
      train.style.transition = "400ms"
    }
}

const pjTrain = document.querySelectorAll(".danggeun"); //6개
console.log(pjTrain);
const pjElement = document.querySelectorAll(".danggeun>li"); 
console.log(pjElement);



//카운팅 함수 선언
// function counting(target,elementLength){
//   number = parseInt(number) + 1
//   target.innerText = number+" / "+elementLength;
// }




