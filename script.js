setTimePage = (d,h,m,s) => {
  e1.innerHTML = d;
  e2.innerHTML = h;
  e3.innerHTML = m;
  e4.innerHTML = s;
  if ( (d < 0) && (h < 0) && (m < 0) && (s <= 0) ) {
    e1.innerHTML = '0';
    e2.innerHTML = '0';
    e3.innerHTML = '0';
    e4.innerHTML = '0';
  }
}
const timer = () => {
  const endDate = new Date(2017,11,01); // дата дня
  let currentDate = new Date();
  let seconds = (endDate-currentDate)/1000;

  let days = Math.floor(seconds/(24*60*60));
  let rest = seconds%(24*60*60);
  let hours = Math.floor(rest/(60*60));
  let minutes = Math.floor((rest%3600)/60);
  let sec =  Math.floor((rest%(3600))%60);
  
  setTimePage(days, hours, minutes, sec);
}

const e1 = document.querySelector(".days");
const e2 = document.querySelector(".hours");
const e3 = document.querySelector(".minutes");
const e4 = document.querySelector(".sec");
timer();
// устанавливаем вызов функции через каждую секунду
timerId = setInterval(timer, 1000);
