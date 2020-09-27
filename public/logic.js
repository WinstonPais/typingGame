document.addEventListener('DOMContentLoaded', (event) => {
  //the event occurred

  const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
  const quoteDisplayElement = document.getElementById('quoteDisplay')
  const quoteInputElement = document.getElementById("quoteInput")
  const timerElement = document.getElementById('timer')
  const t4Element = document.getElementsByClassName('t4')

  quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')

    let correct = true
    arrayQuote.forEach((characterSpan, index) => {
      const character = arrayValue[index]
      if (character == null) {
        characterSpan.classList.remove('correct')
        characterSpan.classList.remove('incorrect')
        correct = false
      } else if (character === characterSpan.innerText) {
        characterSpan.classList.add('correct')
        characterSpan.classList.remove('incorrect')
      } else {
        characterSpan.classList.remove('correct')
        characterSpan.classList.add('incorrect')
        correct = false
      }
    })

    if (correct) renderNewQuote()
  })

  function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
      .then(response => response.json())
      .then(data => data.content)
  }

  async function renderNewQuote() {
    const quote = await getRandomQuote()
    quoteDisplayElement.innerHTML = ''
    quote.split('').forEach(character => {
      const characterSpan = document.createElement('span')
      characterSpan.innerText = character
      quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = null
    startTimer()
  }

  let startTime
  let flag =0;
  let greenval=3;
  function startTimer() {
    timerElement.innerText = 0
    startTime = new Date()
    setInterval(() => {
      timer.innerText = getTimerTime()
    }, 1000)
    if (flag !=0){
      t4Element[greenval].style.backgroundColor = "green";
      greenval-=1;
    }
    flag = 1;

  }

  function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
  }

  renderNewQuote()

})
