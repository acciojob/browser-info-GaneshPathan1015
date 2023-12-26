//your JS code here. If required.
let user = navigator.userAgent;
let user2 =navigator.appName;

let user3 = navigator.appVersion;



const display = document.getElementById("browser-info");
display.innerText = user+user2+user3;