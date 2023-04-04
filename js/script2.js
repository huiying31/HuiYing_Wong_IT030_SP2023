function displayBreakpoint() {
var width = window.innerWidth;
var message = "";
var footer = document.getElementsByTagName("footer")[0];


if (width < 768) {
    message = "You are currently on a mobile device";
  } 
else if (width >= 768 && width < 1024) {
    message = "You are on a tablet device";
  }
else {
    message = "Desktop devices are the best to view my website";
  }

footer.innerHTML = message;
}

window.onload = displayBreakpoint;
window.onresize = displayBreakpoint;