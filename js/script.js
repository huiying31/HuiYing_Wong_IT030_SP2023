var d = new Date();
var time = d.getHours();

if (time <= 12) {
  document.write ("<h2>Good morning!</h2>");
}
else if (time <= 16) {
  document.write("<h2>Good afternoon!</h2>");
}
else if (time <= 20) {
  document.write("<h2>Good evening!</h2>");
}
else {
  document.write("<h2>Good night!</h2>");
}