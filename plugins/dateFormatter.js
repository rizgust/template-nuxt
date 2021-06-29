export function formattedDate(date) {
    var year = date.getFullYear();

    var month = getMonthName(date.getMonth());
    // var month = (1 + date.getMonth()).toString();
    // month = month.length > 1 ? month : '0' + month;
  
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + ' ' + day + ', ' + year;
}

export function getMonthName(month) {
    var monthName = new Array();
    monthName[0] = "January";
    monthName[1] = "February";
    monthName[2] = "March";
    monthName[3] = "April";
    monthName[4] = "May";
    monthName[5] = "June";
    monthName[6] = "July";
    monthName[7] = "August";
    monthName[8] = "September";
    monthName[9] = "October";
    monthName[10] = "November";
    monthName[11] = "December";

    return monthName[month];
}