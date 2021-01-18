let a = Number(prompt("insert number 1"));
let b = Number(prompt("insert number 2"));
let c = Number(prompt("insert number 3"));
if (a > 0 && b > 0 && c > 0) {
  alert("The sign is +");
} else if (a < 0 && b < 0 && c < 0) {
  alert("The sign is +");
} else if (a > 0 && b < 0 && c < 0) {
  alert("The sign is +");
} else if (a < 0 && b > 0 && c < 0) {
  alert("The sign is +");
} else {
  alert("The sign is -");
}
