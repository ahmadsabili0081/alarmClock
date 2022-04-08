let container = document.querySelector('.container');
let apps = document.createElement('div');
let title = document.createElement('h1');
let label = document.createElement('label');
let inputTime = document.createElement('input')
let btnSetAlarm = document.createElement('button');
title.innerHTML = "Alarm Clock";
apps.className = "App";
container.appendChild(title)
container.appendChild(apps);
label.innerHTML = "Alarm Time";
apps.appendChild(label);
inputTime.type = "time"
inputTime.className = "input__Time";
apps.appendChild(inputTime);
btnSetAlarm.innerHTML = "Set Alarm"
btnSetAlarm.type = "button";
btnSetAlarm.className = "SetAlarm"
apps.appendChild(btnSetAlarm)

// set options btn
let options = document.createElement('div');
let btnSnooze = document.createElement('button');
let stopAlarm = document.createElement('button');

options.className = "options";
btnSnooze.className = "btnSnooze";
btnSnooze.innerHTML = "Snooze for 5s"
stopAlarm.innerHTML = "Stop Alarm";
stopAlarm.className = "stopAlarm";
apps.appendChild(options)
options.appendChild(btnSnooze);
options.appendChild(stopAlarm);

// manipulations data 
let optionsDisplay = document.querySelector('.options');
let timeInput = document.querySelector('.input__Time');
let btnStopAlarm = document.querySelector('.stopAlarm');
let btnSnoozeAlarm = document.querySelector('.btnSnooze');
let btnAlarmSet = document.querySelector('.SetAlarm');
let soundAlarm = new Audio();
optionsDisplay.style.display = 'none';

soundAlarm.src =  "http://soundbible.com/mp3/Rooster-SoundBible.com-1114473528.mp3";
let alarmTime;

btnAlarmSet.addEventListener('click', SetAlarm, false);
function SetAlarm(){
    //untuk mengambil nilai jam
    let msTime = new Date().setHours(0,0,0,0) + timeInput.valueAsNumber;
    // dibawah untuk memberikan kondisi, jika si msTime tidak memberikan nilai makan akan memunculkan dailybox
    if(isNaN(msTime)){
        window.alert('Hii tulis yang benar kawan');
    }
    // mengambil nilai dari msTime
    let alarm = new Date(msTime);
    let dt = new Date().getTime();
    let differentInMs = alarm.getTime() - dt;
    if(differentInMs < 0){
        window.alert('Wah ini waktu dari masa depan kah, apakah kamu penjelajah waktu');
        return;
    }
    // membuat set time function
    alarmTime = setInterval(initAlarm, differentInMs);
    btnAlarmSet.innerHTML = "Cancel Alarm";
    btnSetAlarm.setAttribute('onclick', "cancelAlarm(this);");
    optionsDisplay.style.display = '';
}
// membuat tombol click cancel alarm 
function cancelAlarm(){
    clearInterval(alarmTime);
    btnSetAlarm.innerHTML = "Set Alarm";
    btnSetAlarm.setAttribute('onclick','setAlarm(this);');
    optionsDisplay.style.display = "none";
}
// membuat function time sound alarm 
function initAlarm(){
    window.alert('Waktunya bangun')
    soundAlarm.play();
    // mengulang sound alarm
    soundAlarm.loop = true;
    optionsDisplay.style.display = 'none';
}
btnStopAlarm.addEventListener('click', StopAlarm, false);
// membuat action button stop alarm dan mengpause bunyi alarm
function StopAlarm(){
    soundAlarm.pause();
    soundAlarm.currentTime = 0;
    optionsDisplay.style.display = 'none';
}
btnSnoozeAlarm.addEventListener('click', SnoozeFunction, false);
// membuat function snooze atau memberhentikan bunyi alarm selama 5 detik
function SnoozeFunction (){
    stopAlarm();
    setTimeout(initAlarm, 5000);
}



