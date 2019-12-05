// Setting Variables for later use
const newsLetter = document.getElementById("newsletter")
const newsLetterBottom = document.getElementById("newsLetterBottom")
const webinarButtonTop = document.getElementById("webinarTop")
const webinarButtonBottom = document.getElementById("webinarBottom")
const webinarTopSpan = document.getElementById("webinarTopSpan")

// Function for a bad response from the given api.
const badSubmit = () => {
  webinarButtonTop.addEventListener("click", () => {
    fetch("https://bl45immth4.execute-api.us-east-1.amazonaws.com/production/")
      .then(response => response.json())
      .then(data => {
        const buttonResponse = JSON.parse(data.body)
        webinarTopSpan.innerHTML = buttonResponse.submitbad
      })
  })
}

// Function for a good response from the given api.
const goodSubmit = () => {
  webinarButtonTop.addEventListener("click", () => {
    fetch("https://bl45immth4.execute-api.us-east-1.amazonaws.com/production/")
      .then(response => response.json())
      .then(data => {
        const buttonResponse = JSON.parse(data.body)
        webinarTopSpan.innerHTML = buttonResponse.submitok
      })
  })
}

// If statement to check if the input(s) are not checked. If they aren't
// And a user attempts to submit/click the buttons, they're given an
// Alert stating they need to check the box before attempting to submit
if (newsLetter.checked === false || newsLetterBottom.checked === false) {
  webinarButtonTop.addEventListener("click", () => {
    alert("Please check the box before submitting")
  })
  webinarButtonBottom.addEventListener("click", () => {
    alert("Please check the box before submitting")
  })
  badSubmit()
}

// If statement to check to see if the checkboxes are checked. If they are
// The goodSubmit() function is ran.
if (newsLetter.checked === true || newsLetterBottom.checked === true) {
  goodSubmit()
}

// Function to check/uncheck both inputs
const matchCheckA = () => {
  let newsletterStatus = newsLetter.checked === true
  if (newsletterStatus) {
    newsLetterBottom.checked = true
  } else {
    newsLetterBottom.checked = false
  }
}

// Function to check/uncheck both inputs
const matchCheckB = () => {
  let newsletterStatusB = newsLetterBottom.checked === true
  if (newsletterStatusB) {
    newsLetter.checked = true
  } else {
    newsLetter.checked = false
  }
}

// Event Listener for both functions from above
newsLetter.addEventListener("click", matchCheckA)
newsLetterBottom.addEventListener("click", matchCheckB)

// Variables for countdown.
const dt = new Date()
const myDate = dt.setDate(dt.getDate() + 5)
const launchDate = new Date(myDate).getTime()
const countdown = document.getElementById("time")

// Function that executes countdown with a setInterval (1000ms/1s) to start
// The countdown properly
const intvl = setInterval(() => {
  const now = new Date().getTime()
  const distance = launchDate - now
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)
  countdown.innerHTML = `
    ${days} Days
    ${hours} Hours
    ${mins} Minutes
    ${seconds} Seconds
  `
}, 1000)
