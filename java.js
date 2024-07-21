function calc(event) {
  var current = document.getElementById("Current Reading");
  var previous = document.getElementById("Previous Reading");
  var total = current.value - previous.value;
  var result = document.getElementById("button");
  var display = document.getElementById("result");
  var amt;
  if (total <= 100) {
    amt = 0;
  } else if (total <= 400) {
    amt = (total - 100) * 4.8;
  } else if (total <= 500) {
    amt = 1440 + (total - 400) * 6.45;
  } else if (total <= 600) {
    amt = 2085 + (total - 500) * 8.55;
  } else if (total <= 800) {
    amt = 2940 + (total - 600) * 9.65;
  } else if (total <= 1000) {
    amt = 4870 + (total - 800) * 10.7;
  } else {
    amt = 7010 + (total - 1000) * 11.8;
  }
  display.append("Rs." + amt);
  event.target.remove();
}
var cal = document.getElementById("Ebcalc");
var tips = document.querySelector(".tipscon");
var chart = document.querySelector(".chart");
function showcal() {
  cal.style.display = "block";
  tips.style.display = "none";
  chart.style.display = "none";
}
function showhome() {
  cal.style.display = "none";
  tips.style.display = "block";
  chart.style.display = "none";
}
function showchart() {
  cal.style.display = "none";
  tips.style.display = "none";
  chart.style.display = "block";
}
