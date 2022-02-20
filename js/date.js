function checkDate(){
    let date = new Date();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let weekday = days[ date.getDay() ];
    let month = months[ date.getMonth() ];
    let day = date.getDate();
    let year = date.getFullYear();

    today = weekday +', ' + day +', ' + month +', ' + year;
    document.getElementById("date-now").innerHTML = today;
}