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

timeFont.text = '00:00';

clock.granularity = "minutes"; // seconds, minutes, or hours

clock.addEventListener("tick", (evt) => {
    let hours = evt.date.getHours();
    if (hours > 12) {
        hours -= 12;
    }
    timeFont.text = `${hours}:${evt.date.getMinutes()}`;
    timeAMPM.text = 'AM';
})
