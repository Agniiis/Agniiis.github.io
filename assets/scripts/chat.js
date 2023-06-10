const username = 'User#' + Math.floor(Math.random() * 1000);
const vulgarWords = ["lohs", "stulbenis", "idiots"]; // Vulgāro vārdu saraksts


document.getElementById("chat-user-greeting").innerHTML = 'Welcome, <b>' + username + '</b>!';

function sendChatMessage() {
  const input = document.getElementById("usermsg");
  const text = input.value;
  if (!text) return;

  input.value = '';

  const box = document.getElementById("chatbox");

  const filteredText = filterVulgarWords(text);
  const msgln = document.createElement("div");
  msgln.classList.add("msgln");
  msgln.innerHTML = username + ': ' + filteredText;

  box.appendChild(msgln);
}

function filterVulgarWords(message) {
  const words = message.split(" ");
  const filteredWords = words.map(word => {
    const lowercasedWord = word.toLowerCase();
    if (vulgarWords.includes(lowercasedWord)) {
      return "*".repeat(word.length);
    }
    return word;
  });

  return filteredWords.join(" ");
}
