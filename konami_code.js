const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


var checkingCode = false
var index = 1

function onKeyDownHandler(e) {
  const key = e.key
  console.log(`I have a ${key}`)
  if (!checkingCode) { 
    if (key === "ArrowUp") {
      checkingCode = true
    }
  } else {
    if (key === codes[index]) {
      index++
      if (index === 10) {
        alert("You get the egg!")
      }
    }
  }

}

function init() {
  // your code here
  const body = document.getElementById('body')
  document.body.addEventListener('keydown', onKeyDownHandler)
}
