// Credit: http://demosthenes.info/blog/943/An-SVG-Analog-Clock-In-6-Lines-of-JavaScript
function r(el, deg) {
  el.setAttribute('transform', 'rotate('+ deg +' 50 50)')
}

function setRotation() {
  var d = new Date()

  r(hour, 15*(d.getHours()) + d.getMinutes()/4 + 180)

  document.title = d.getHours() + ':' + d.getMinutes()
}

// Initial set
setRotation()

// Continuously update
setInterval(function() {
  setRotation()
}, 1000)
