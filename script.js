const button = document.querySelector('.CFA')

console.log(button);

let buttonActive = false

function onClick() {
  if (buttonActive === false) {
    button.innerHTML = "Mao Zedong (The Book is 'The Little Red Book')"
    buttonActive = true
  } else {
    button.innerHTML = "Click For Answer"
    buttonActive = false
  }
}

button.addEventListener('click', onClick)
