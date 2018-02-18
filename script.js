setTimePage = (d,h,m,s) => {
  e1.innerHTML = d;
  e2.innerHTML = h;
  e3.innerHTML = m;
  e4.innerHTML = s;
}
const timer = () => {
  const endDate = new Date(2018,03,18); // дата дня
  let currentDate = new Date();
  endDate.setMonth(endDate.getMonth() - 1); // месяцы от 0 до 11
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let sec = 0; 

  let ms = endDate.getTime() - currentDate.getTime();
  if (ms > 0) {
    days = Math.floor(ms / (1000 * 60 * 60 * 24 ));
    hours = 24 - currentDate.getHours() - 1;
    minutes = 60 - currentDate.getMinutes() - 1;
    sec = 60 - currentDate.getSeconds();
  }
  setTimePage(days, hours, minutes, sec);
}

const e1 = document.querySelector(".days");
const e2 = document.querySelector(".hours");
const e3 = document.querySelector(".minutes");
const e4 = document.querySelector(".sec");
timer();
// устанавливаем вызов функции через каждую секунду
timerId = setInterval(timer, 1000);
