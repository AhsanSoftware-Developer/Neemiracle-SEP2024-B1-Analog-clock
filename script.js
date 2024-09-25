let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2; // 360/12 = 30
    let mRotation = 6 * mm; // 360/60 = 6
    let sRotation = 6 * ss; // 360/60 = 6

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

// Display current date outside the displayTime function
const dateDisplay = document.querySelector('.date-display');
setInterval(() => {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString('en-US', options);
}, 1000);

// Call displayTime every second
setInterval(displayTime, 1000);

const amPmDisplay = document.querySelector('.am-pm-display');
setInterval(() => {
    const hours = new Date().getHours();
    amPmDisplay.textContent = hours >= 12 ? 'PM' : 'AM';
}, 1000);
