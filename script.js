// Credit: http://demosthenes.info/blog/943/An-SVG-Analog-Clock-In-6-Lines-of-JavaScript

var hourHand = document.getElementById('hour')

function r(el, deg) {
  el.setAttribute('transform', 'rotate('+ deg +' 50 50)')
}

function setRotation() {
  var d = new Date()
    , mins = d.getMinutes()
    , hours = d.getHours()

  r(hourHand, 15*(hours) + mins/4 + 180)

  document.title = hours + ':' + mins
}

// Initial set
setRotation()

// Show hand once rotated
hourHand.style.visibility = 'visible'

// Continuously update
setInterval(function() {
  setRotation()
}, 1000)
