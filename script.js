const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 1000);
})

const showTime = () => {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    time.innerHTML = ` ${hours} : ${minutes} : ${seconds}`;
    timeformat.innerHTML = ampm
}