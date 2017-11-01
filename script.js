setTimePage = (d,h,m,s) => {
  const e1 = document.querySelector(".days");
  const e2 = document.querySelector(".hours");
  const e3 = document.querySelector(".minutes");
  const e4 = document.querySelector(".sec");
  console.log(e1);
  e1.innerHTML = d;
  e2.innerHTML = h;
  e3.innerHTML = m;
  e4.innerHTML = s;
}
const timer = () => {
  const endDate = new Date(2017,11,01);
  let currentDate = new Date();
  let seconds = (endDate-currentDate)/1000;

  let days = Math.floor(seconds/(24*60*60));
  let rest = seconds%(24*60*60);
  let hours = Math.floor(rest/(60*60));
  let minutes = Math.floor((rest%3600)/60);
  let sec =  Math.floor((rest%(3600))%60);
  //console.log(days, hours, minutes, sec);
  //let hours = 
   setTimePage(days, hours, minutes, sec);
    
  timerId = setInterval(timer, 1000) // устанавливаем вызов функции через каждую секунду
  //let minutes = seconds/60;
  //let hours = minutes/60;
  //let days = hours/24;
}
  
window.onload = () => {
  timer();
}