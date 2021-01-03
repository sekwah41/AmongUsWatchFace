import clock from "clock";
import { FitFont } from 'fitfont'

const timeFont = new FitFont({
    id:'amongUsTime',
    font:'Amatic_SC_150',

    halign: 'middle',
    valign: 'middle',
    letterspacing: 0
});


const timeAMPM = new FitFont({
    id:'amongUsAMPM',
    font:'Amatic_SC_40',

    halign: 'middle',
    valign: 'middle',
    letterspacing: 0
});

const amongUsDate = new FitFont({
    id:'amongUsDate',
    font:'Amatic_SC_40',

    halign: 'middle',
    valign: 'middle',
    letterspacing: 0
});

timeFont.text = '00:00';

clock.granularity = "minutes"; // seconds, minutes, or hours


function zeroPad(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function dateString(date) {
    let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    return `${day[date.getDay()]} ${zeroPad(date.getDate())} ${month[date.getMonth()]}`;
}

clock.addEventListener("tick", (evt) => {
    let hours = evt.date.getHours();
    let mins = evt.date.getMinutes();

    amongUsDate.text = dateString(evt.date);

    timeAMPM.text = hours >= 12 ? "PM" : "AM";

    if (hours > 12) {
        hours -= 12;
    }

    if(hours === 0) {
        hours = 12;
    }

    timeFont.text = `${hours}:${zeroPad(mins)}`;
})
