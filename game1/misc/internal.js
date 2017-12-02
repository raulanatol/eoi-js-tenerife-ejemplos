var onResponse = null;

function writeComputerMessage(message) {
  var newMessage = '<li><div class="message cpu-message">' + message + '</li>';
  document.getElementById('history-list').insertAdjacentHTML('beforeend', newMessage);
  scrollToBottom();
}

function scrollToBottom() {
  var historyList = document.getElementsByClassName('history')[0];
  historyList.scrollTop = historyList.scrollHeight;
}

function waitForResponse() {
  return new Promise(function (resolve) {
    onResponse = resolve;
  });
}

function cleanTextArea() {
  document.getElementById('message-to-send').value = '';
}

function cleanHistory() {
  document.getElementById('history-list').innerHTML = '';
}

function writeUserMessage(message) {
  var newMessageElement = '<li><div class="message my-message">' + message + '</li>';
  document.getElementById('history-list').insertAdjacentHTML('beforeend', newMessageElement);
  scrollToBottom();
}

function userSpeak() {
  var userMessage = document.getElementById('message-to-send').value;
  writeUserMessage(userMessage);
  cleanTextArea();
  if (onResponse) {
    onResponse(userMessage);
  }
}

function onKeyDownTextArea(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    if (event.currentTarget.value.length > 0) {
      userSpeak();
    }
  }
}
