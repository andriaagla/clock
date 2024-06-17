const body = document.getElementsByTagName("body")[0];
    const btn = document.getElementsByClassName("toggle")[0];
    const toggleTheme = () => {
      if (body.classList.contains("light")) {
        body.classList.add("dark");
        body.classList.remove("light");
        btn.classList.add("fa-sun");
        btn.classList.remove("fa-moon");
      } else {
        body.classList.add("light");
        body.classList.remove("dark");
        btn.classList.add("fa-moon");
        btn.classList.remove("fa-sun");
      }
    };

    setInterval(function () {
      var date = new Date();
      var hours = date.getHours();
      var min = date.getMinutes();
      var sec = date.getSeconds();

      hoursNeedle.style.transform = "rotate(" + (hours * 30 + min / 2) + "deg)";
      minutesNeedle.style.transform = "rotate(" + (min * 6 + sec / 10) + "deg)";
      secondsNeedle.style.transform = "rotate(" + sec * 6 + "deg)";
    }, 10);

    window.addEventListener("load", function () {
      var hours = new Date().getHours();
      if (hours >= 21 || hours <= 6) {
        toggleTheme();
      }
    });

    
const timeOutput = document.querySelector('.time');
const secOutput = document.querySelector('.sec');
const ampmOutput = document.querySelector('.ampm');
const monthOutput = document.querySelector('.month');
const dayOfWeekOutput = document.querySelector(".dayofweek");
const dayOutput = document.querySelector('.day');


const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const monthName = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];


function formatTime(val){
    if(val<10){
        return "0";
    }
    else{
        return "";
    }
}

function clock(){
    
    const d = new Date();

    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    dayOfWeekOutput.innerHTML = weekday[
        d.getDay()
    ];

    
    monthOutput.innerHTML = monthName[
        d.getMonth()
    ];

  
    dayOutput.innerHTML = d.getDate();

  
    const time = formatTime(h)+h+":"+formatTime(m)+m;
    const sec = formatTime(s)+s;

   
    const ampm = h>=12? 'PM':'AM'; 

    // Output the time
    timeOutput.innerHTML = time;
    secOutput.innerHTML = sec;
    ampmOutput.innerHTML = ampm;
}

setInterval(clock, 100);
