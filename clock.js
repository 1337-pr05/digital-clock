function time(){
    let date = new Date();
    let dayofweek=['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let day= dayofweek[date.getDay()];
    let daydate= date.getDate();
    let hour = date.getHours();
    let meridian = hour > 12 ? "PM" : 'AM';
    hour =  (hour>12) ? hour - 12: hour;
    hour.toString().padStart(2,0);
    let minutes= date.getMinutes().toString().padStart(2,0);
    let seconds= date.getSeconds().toString().padStart(2,0);
    document.getElementById("date").textContent=`${day} ${daydate}`;
    document.getElementById("clock").textContent=`${hour}:${minutes}:${seconds} ${meridian}`
}

setInterval(time,1000)