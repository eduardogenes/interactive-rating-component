const container = document.querySelector('#main-container')
const hiddenContainer = document.querySelector('#hidden-container')

const submitBtn = document.querySelector('#submit-btn')
const rateAgain = document.querySelector('#rate-again')

const rating = document.querySelector("#rating")
const rates = document.querySelectorAll(".rate")



submitBtn.addEventListener('click', () => {
  hiddenContainer.classList.remove('hidden')
  container.classList.add('hidden')
  
})



rateAgain.addEventListener('click', () => {
  hiddenContainer.classList.add('hidden')
  container.classList.remove('hidden')
})



rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML
  })
})

