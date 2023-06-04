const username = 'User#' + Math.floor(Math.random() * 1000);

document.getElementById("chat-user-greeting").innerHTML = 'Welcome, <b>' + username + '</b>!';

function sendChatMessage() {
  const input = document.getElementById("usermsg");
  const text = input.value;
  if (!text) return;

  input.value = '';

  const box = document.getElementById("chatbox");

  const msgln = document.createElement("div");
  msgln.classList.add("msgln");
  msgln.innerHTML = username + ': ' + text;

  box.appendChild(msgln);
}
