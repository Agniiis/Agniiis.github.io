const username = 'User#' + Math.floor(Math.random() * 1000);
const vulgarWords = ["lohs", "stulbenis", "idiots", "bla","ble"]; // Vulgāro vārdu saraksts


document.getElementById("chat-user-greeting").innerHTML = 'Welcome, <b>' + username + '</b>!';

let lastMessageTimestamp = 0;

function sendChatMessage() {
  const input = document.getElementById("usermsg");
  const text = input.value;
  if (!text) return; //Ja teksts ir tukš, tad atgriežas un nepievieno pap. kodu

  input.value = '';

  const box = document.getElementById("chatbox");

  const currentTime = Date.now();
  if (currentTime - lastMessageTimestamp < 1000) { // Pārbauda vai laika starpība starp pašreizējo ziņu un pēdējo ziņa ir 1 sekundes
    console.log("Jūs varat sūtīt ziņas reizi sekundē!!");
    return;
  }

  lastMessageTimestamp = currentTime;

  const filteredText = filterVulgarWords(text);
  const msgln = document.createElement("div");
  msgln.classList.add("msgln");
  msgln.innerHTML = username + ': ' + filteredText;

  box.appendChild(msgln);
}
//Necenzēto vārdu funkcija
function filterVulgarWords(message) {
  const words = message.split(" ");
  const filteredWords = words.map(word => {
    const lowercasedWord = word.toLowerCase();
    if (vulgarWords.includes(lowercasedWord)) { //Pārbauda vai vārds ir vulgārs
      return "*".repeat(word.length);
    }
    return word;
  });

  return filteredWords.join(" "); //Apvieno filtrētos vārdus atpakaļ virknē
}
