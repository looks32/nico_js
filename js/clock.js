const clock = document.querySelector('#clock');
console.log(clock);

function clockAuto(){
    //console.log('틱톡')
    const date = new Date();

    const hours = String(date.getHours()).padStart(2,'0');
    const minutes = String(date.getMinutes()).padStart(2,'0');
    const seconds = String(date.getSeconds()).padStart(2,'0');

    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

function clockAuto2(){
    console.log('뱀')
}

clockAuto()
setInterval(clockAuto, 1000)
setTimeout(clockAuto2, 2000)