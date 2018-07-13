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


var checkingCode = true

function onKeyDownHandler(e) {
  const key = e.key;
  console.log(`I have a ${key}`)
}

function init() {
  // your code here
  const body = document.getElementById('body')
  document.body.addEventListener('keydown', onKeyDownHandler)
}
