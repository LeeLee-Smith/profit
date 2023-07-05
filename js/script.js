const publicDate = document.querySelectorAll('.publicDate')
const dateSpan = document.querySelectorAll('.currentDate')
const currYear = document.querySelectorAll('.currYear')
const leftPlace = document.querySelectorAll('.leftPlace')

publicDate.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString('sk', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
})


dateSpan.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString('sk', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
})


currYear.forEach(item => {
  item.innerHTML = new Date().getFullYear()
})
const left = Math.floor(Math.random() * (15 - 5) + 5)
leftPlace.forEach(item => {
  item.innerHTML = left
})


//popup
setTimeout(() => {
  $('.popupForm').fadeIn()
}, 3000)
$('.modal').click(function () {
  if (event.target === $('.modal')[0]) {
    $('.modal').fadeOut()
  }
})
$('.popupForm').click(function () {
  if (event.target === $('.popupForm')[0] || event.target === $('.modal--wrapper')[0]) {
    $('.modal').fadeOut()
  }
})


const updDate = getYesterdayDate().toLocaleDateString('sk', {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
  hour12: false,
  hour: "numeric",
  minute: "numeric",
})

document.querySelector('.updateDate').innerHTML = updDate
// document.querySelector('.updateDate2').innerHTML = updDate

function getYesterdayDate() {
  let yesterday = new Date()
  yesterday.setMonth(yesterday.getMonth())
  yesterday.setDate(yesterday.getDate())
  yesterday.setHours(yesterday.getHours())
  yesterday.setMinutes(yesterday.getMinutes() - 95)
  return yesterday
}