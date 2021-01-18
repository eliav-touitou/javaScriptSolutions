let a = Number(prompt("insert number 1"));
let b = Number(prompt("insert number 2"));
let c = Number(prompt("insert number 3"));
let d = Number(prompt("insert number 4"));
let e = Number(prompt("insert number 5"));

if (a > b && a > c && a > d && a > e) {
  alert(a);
} else if (b > a && b > c && b > d && b > e) {
  alert(b);
} else if (c > a && c > b && c > d && c > e) {
  alert(c);
} else if (d > a && d > c && d > b && d > e) {
  alert(d);
} else if (e > a && e > c && e > d && e > b) {
  alert(e);
}
