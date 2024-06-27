let clock;
let hours = 0, minutes = 0, seconds = 0;

function updateClock(){
   
const date = new Date();
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();

// hours = hours % 12;
// hours =  hrs ? hrs : 12;
// const ampm = hrs >= 12 ? 'PM' : 'AM';

const ampm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'

const digiClock = document.getElementById('clock');
digiClock.innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')} ${ampm}`;

}

setInterval(updateClock, 1000);
updateClock(); 
