const clock = document.querySelector(".clock");
// const hour = document.getElementById("hour");
// const min = document.getElementById("min");
// const sec = document.getElementById("sec");

// Shortest Way!!
setInterval(() => {
    let date = new Date().toLocaleTimeString();
    clock.innerText = date;
}, 1000);

// METHOD-1
// const timer = () => {
//     let date = new Date();
//     hour.innerText = date.getHours();
//     min.innerText = date.getMinutes();
//     sec.innerText = date.getSeconds();
//     setInterval(timer, 1000);
// }
// timer();

//METHOD-2
// const timer = () =>{
//     let date = new Date().toLocaleTimeString();
//     // date = date.split(" ")[0];
//     clock.innerText = date;
//     setInterval(timer, 1000);
// }
// timer();



