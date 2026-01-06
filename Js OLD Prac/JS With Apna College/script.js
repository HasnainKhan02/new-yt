let score = document.getElementsByTagName("h1")[0];
let incr = document.getElementById("btnIncr");
let decr = document.getElementById("btnDecr");
let rest = document.getElementById("Reset")

let count = 0;

incr.addEventListener("click", function () {
  count++;
  score.innerText = count;
});

decr.addEventListener("click", function () {
  count--;
  score.innerText = count;
});
rest.addEventListener("click" , function() {
    count=0;
    score.innerText = count
})