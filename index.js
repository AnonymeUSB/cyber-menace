const s1 = document.querySelector("#s1")
const s2 = document.querySelector("#s2")
const s3 = document.querySelector("#s3")
const s4 = document.querySelector("#s4")
const s5 = document.querySelector("#s5")

s1.style.display = "none"
s2.style.display = "none"
s3.style.display = "none"
s4.style.display = "none"
s5.style.display = "none"

function next(number) {
  var section = document.querySelector("#s" + number);
  var sectionList = [s1, s2, s3, s4, s5]
  document.querySelector("#board").innerHTML = sectionList[number-1].innerHTML;
  section.style.display = "block"
}
