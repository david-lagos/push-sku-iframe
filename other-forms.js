// Find iframe
let myIframe = document.getElementsByTagName('iframe')[0];

// Extract day and hour from date
var date = luxon.DateTime.now().setZone('America/Chicago');
var day = date.toFormat('c');
var hour = date.toFormat('H');

// Modify URL based on time and day of the week
let urlString = '';
if ((parseInt(day) == 5 && parseInt(hour) > 16) || (parseInt(day) == 6 && parseInt(hour) < 18)) {
    if (myIframe.src == "http://go.pardot.com/l/930633/2021-05-14/4z") {
        myIframe.src = "http://go.pardot.com/l/930633/2021-05-28/2zz"; // Weekend Form URL: Catalog
    } else if (myIframe.src == "http://go.pardot.com/l/930633/2021-05-19/cx") {
        myIframe.src = "http://go.pardot.com/l/930633/2021-05-28/312i"; // Weekend Form URL: Financing
    } else if (myIframe.src == "http://go.pardot.com/l/930633/2021-05-16/5l") {
        myIframe.src = "http://go.pardot.com/l/930633/2021-05-28/314i"; // Weekend Form URL: Used
    } else {
        // this is reserved for new forms
        // do nothing
    }
}
myIframe.contentWindow.location.reload();