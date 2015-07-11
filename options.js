// Populate existing values
function showValues() {
  chrome.storage.sync.get('colors', function(items) {
    document.getElementById('background-color').value = items.colors.background
    document.getElementById('face-color').value = items.colors.face
    document.getElementById('face-outline-color').value = items.colors.faceOutline
    document.getElementById('hour-color').value = items.colors.hour
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
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

document.addEventListener('DOMContentLoaded', showValues);
document.getElementById('save').addEventListener('click', saveOptions);
