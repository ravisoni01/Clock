console.log("welcome to clock project");
setInterval(()=>{
    currentDate = new Date();
    // console.log(currentDate);
    currentHour = currentDate.getHours();
    currentMin = currentDate.getMinutes();
    currentSecond = currentDate.getSeconds();

    hourRotation = 30*currentHour + currentMin/2;
    minRotation = 6*currentMin;
    secondRotation = 6*currentSecond;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minRotation}deg)`;
    second.style.transform = `rotate(${secondRotation}deg)`;
},1000)