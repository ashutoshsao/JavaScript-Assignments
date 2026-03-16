// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function pad(num){
    return num.toString().padStart(2,'0');
}

function showTime(){
    let time = new Date();

    let hours = pad(time.getHours());
    let minutes = pad(time.getMinutes());
    let seconds = pad(time.getSeconds());

    let hours24 = `${hours}:${minutes}::${seconds}`

    let ampm = hours<12 ? "am" : "pm";
    let hours12 = (hours === 0) ? 12 : pad(hours%12);
    hours12 = `${hours12}:${minutes}::${seconds} ${ampm}`

    console.clear();
    console.log("24 Hours format " + hours24);
    console.log("12 Hours format " + hours12);
}

setInterval(showTime,1000);