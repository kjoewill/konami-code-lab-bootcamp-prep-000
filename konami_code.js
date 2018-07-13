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
var index = 0

function onKeyDownHandler(e) {
  const key = e.key
  console.log(`I have a ${key}`)
  if (not checkingCode) { 
    if (key === "ArrowUp") {
      checkingCode = true
    }
  } else {
    
  }

}

function init() {
  // your code here
  const body = document.getElementById('body')
  document.body.addEventListener('keydown', onKeyDownHandler)
}
