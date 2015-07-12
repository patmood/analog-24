var activeInput
  , activeClock

// Populate existing values
function showValues() {
  chrome.storage.sync.get('colors', function(items) {
    document.getElementById('background-color').value = items.colors.background
    document.getElementById('background-color').onchange()
    document.getElementById('face-color').value = items.colors.face
    document.getElementById('face-color').onchange()
    document.getElementById('face-outline-color').value = items.colors.faceOutline
    document.getElementById('face-outline-color').onchange()
    document.getElementById('hour-color').value = items.colors.hour
    document.getElementById('hour-color').onchange()
  })
}

// Saves options to chrome.storage
function saveOptions() {
  var backgroundColor = document.getElementById('background-color').value
    , faceColor = document.getElementById('face-color').value
    , faceOutlineColor = document.getElementById('face-outline-color').value
    , hourColor = document.getElementById('hour-color').value

  chrome.storage.sync.set({
    colors: {
      background: backgroundColor,
      face: faceColor,
      faceOutline: faceOutlineColor,
      hour: hourColor,
    }
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    document.getElementById('cp').style.display = 'none'
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function pickColor(e) {
  if (e.target.className === 'color-input') {
    setColor(e.target)
  }
}

function setColor(el) {
  activeInput = el
  activeClock = document.getElementById(el.dataset.clockId)
  document.getElementById('cp').style.display = 'block'
}

// Init color picker
ColorPicker(
  document.getElementById('cp'),
  function(hex, hsv, rgb) {
    activeInput.value = hex
    activeInput.onchange()
  }
);


document.addEventListener('DOMContentLoaded', showValues);
document.getElementById('color-inputs').addEventListener('click', pickColor)
document.getElementById('save').addEventListener('click', saveOptions);

// Update clock colors with inputs
document.getElementById('background-color').onchange = function() {
  document.getElementById('clock-container').style.backgroundColor = this.value
}

document.getElementById('face-color').onchange = function() {
  document.getElementById('face').style.fill = this.value
}

document.getElementById('face-outline-color').onchange = function() {
  document.getElementById('face').style.stroke = this.value
}

document.getElementById('hour-color').onchange = function() {
  document.getElementById('hour').style.stroke = this.value
}
