const articleTrain=document.querySelector("#content1 > section"); //기차
const articles = document.querySelectorAll("#content1 > section > article"); //아티클
const onboarding = document.querySelectorAll("#content1 > section > article:last-of-type"); //온보딩아티클
const btnPress = document.querySelector(".btn_press");//press버튼

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
  // btnPress.addEventListener("click",()=>{
  //   let next = articles[0].nextElementSibling.offsetTop;
  //   activation(next);
    // articles.forEach(item=>{
    //   item.style.height=`${devHeight}px`
    // })
    // console.log(devHeight);
    // articleTrain.style.transform=`translateY(${-devHeight})`
  // })


function activation(topValue) {
  window.scroll({
    top:topValue,
    left:0,
    behavior:"smooth"
  })
}
// function activation(topValue) {
//   window.scroll({
//     top:topValue,
//     left:0,
//     behavior:"smooth"
//   })
//   for(let k=0; k < section.length ; k++){
//     if(topValue >= k*devHeight && topValue < (k+1)*devHeight){
//       section.forEach(item =>{
//         item.classList.remove("on")
//       });
//       section[k].classList.add("on");     

//       lis.forEach(item =>{
//         item.classList.remove("on")
//       });
//       lis[k].classList.add("on");
//     }
//   }
// }


//유효성 검사
function webCheckingPopup(){
  var url = "./popup1.html";
  var name = "html 유효성검사";
  var option = "width = 1080, height = 500, top = 100, left = 200, location = no,toolbars= no"
  window.open(url, name, option);
}

const btn_Webcheck = document.querySelector(".btn_detail.view > li:first-of-type");
const btn_W3C = document.querySelector(".btn_detail.view > li:last-of-type");

btn_Webcheck.addEventListener("click",(e)=>{
  e.preventDefault();
  webCheckingPopup();
})

