const chat = document.querySelector(".chat-widget");
const input = document.querySelector(".chat-widget__input");
const messages = document.querySelector(".chat-widget__messages");

let date = new Date();
let time = date.getHours() + ":" + date.getMinutes();

// открываю чат
chat.addEventListener("click", function () {
  document.querySelector(".chat-widget").classList.add("chat-widget_active");
});

// когда на инпуте возникнет keydown, будем вызывать функцию отправки сообщения
input.addEventListener("keydown", sendMessage);

function sendMessage(event) {
  if (event.keyCode === 13 && input.value != "") {
    messages.innerHTML += `<div class="message message_client">
        <div class="message__time">${time}</div>
        <div class="message__text">${input.value}</div>
    </div>`;
    input.value = "";
    setTimeout(botAnswer, 1000);
  }
}

function botAnswer() {
  let answers = [
    "Кто тут?",
    "Я не в настроении",
    "К сожалению все операторы сейчас заняты. Не пишите нам больше!",
    "Добрейший вечерочек",
    "Не газуй, дядя",
    "Нашел у кого спрашивать...",
    "Давай отложим до завтра ",
    "Взрослых нет дома",
    "Простите, ничего не понял...",
  ];

  let random = Math.floor(Math.random() * answers.length);
  messages.innerHTML += `<div class="message">
        <div class="message__time">${time}</div>
        <div class="message__text">${answers[random]}</div>
    </div>`;
}
