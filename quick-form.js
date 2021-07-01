// Find components
let myIframe = document.getElementById('quoteForm');
let productName = document.getElementsByClassName('product-meta__title')[0].innerHTML;

// Extract day and hour from date
var date = luxon.DateTime.now().setZone('America/Chicago');
var day = date.toFormat('c');
var hour = date.toFormat('H');

// Modify URL based on time and day of the week
let urlString = '';
if ((parseInt(day) == 5 && parseInt(hour) > 16) || (parseInt(day) == 6 && parseInt(hour) < 18)) {
    urlString = "http://go.pardot.com/l/930633/2021-05-28/2zx"; // Weekend Form URL
} else {
    urlString = "https://www2.quickattach.com/l/930633/2021-05-15/54i"; // Default Form URL
}

// Append Product name to the chosen URL and reload iframe
let productURL = urlString+'?Product='+productName;
myIframe.src = productURL;
myIframe.contentWindow.location.href.reload();

// Listen to message from Pardot and change iframe's height
window.addEventListener('message', function(e){
    const data = e.data;
    myIframe.height = data;
})