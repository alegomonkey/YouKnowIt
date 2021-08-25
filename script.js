const HPQ1 = document.querySelector('.P1-Q')
const HPA1 = document.querySelector('.HPA1')

console.log(HPA1);

let HPA1Active = false

function HPA1F() {
  if (HPA1Active === false) {
    HPA1.innerHTML = "Mao Zedong (The Book is 'The Little Red Book')"
    HPA1Active = true
  } else {
    HPA1.innerHTML = "Click For Answer"
    HPA1Active = false
  }
}

HPA1.addEventListener('click', HPA1F)

let HPQ1Active = false

function HPQ1F() {
  if (HPQ1Active === false) {
    HPQ1.innerHTML = "Click For Question"
    HPQ1Active = true
  } else {
    HPQ1.innerHTML = "Who was: <br> Born in China on the day after   Christmas in 1893 <br> AND <br> Wrote a book that sold  nearly a  billion copies? "
    HPQ1Active = false
  }
}

HPQ1.addEventListener('click', HPQ1F)

