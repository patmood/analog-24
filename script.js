// Credit: http://demosthenes.info/blog/943/An-SVG-Analog-Clock-In-6-Lines-of-JavaScript

var hourHand = document.getElementById('hour')

function r(el, deg) {
  el.setAttribute('transform', 'rotate('+ deg +' 50 50)')
}

function padZeroes(x, length) {
  x = x.toString()
  while (x.length < (length || 2)) {
    x = '0' + x
  }
  return x
}

function setRotation() {
  var d = new Date()
    , mins = d.getMinutes()
    , hours = d.getHours()

  r(hourHand, 15*(hours) + mins/4 + 180)

  document.title = padZeroes(hours) + ':' + padZeroes(mins)
}

function setColors() {
  chrome.storage.sync.get(function(items) {
    document.body.style.backgroundColor = items.colors.background
    document.getElementById('face').style.fill = items.colors.face
    document.getElementById('face').style.stroke = items.colors.faceOutline
    document.getElementById('hour').style.stroke = items.colors.hour
  })
}

// Initial set
setRotation()
setColors()

// Show hand once rotated
hourHand.style.visibility = 'visible'

// Continuously update
setInterval(function() {
  setRotation()
}, 1000)
