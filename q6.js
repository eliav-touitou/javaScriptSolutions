const David = 80;
const Vinoth = 77;
const Divya = 88;
const Ishitha = 95;
const Thomas = 68;
const avg = [David + Vinoth + Divya + Ishitha + Thomas] / 5;
if (avg < 60) {
  console.log("the total average is F");
} else if (avg < 70) {
  console.log("the total average is D");
} else if (avg < 80) {
  console.log("the total average is C ");
} else if (avg < 90) {
  console.log("the total average is B ");
} else {
  console.log("the total average is A");
}
