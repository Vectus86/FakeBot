const Answer = document.getElementById('Answer');
const Question = document.getElementById('Question');
const loading = document.getElementById('loading');
const container = document.getElementsByClassName('Container');

let init = 0;

const botSay = (data) => {
  return [
    'Halo Nama Kamu Siapa ?',
    `Halo ${data?.Nama}, Berapa Usia Kamu ?`,
    `Ohhh ${data?.Usia}, Hobi Kamu Apa Ya ?`,
    `Waw Sama Dong Aku Juga Hobi ${data?.Hobi}, Sekarang Kamu Punya Pacar Gak ?`,
    `Ohhh ${data?.Pacar}, Kalau Gitu Udahan Dulu Ya ?`,
  ];
};

let userData = [];

Question.innerHTML = botSay()[0];

function botStart() {
  if (Answer.value.length < 1) return alert('SILAHKAN ISI TERLEBIH DAHULU');
  init++;
  if (init === 1) {
    botDelay({ Nama: Answer.value });
  } else if (init === 2) {
    botDelay({ Usia: Answer.value });
  } else if (init === 3) {
    botDelay({ Hobi: Answer.value });
  } else if (init === 4) {
    botDelay({ Pacar: Answer.value });
  } else if (init === 5) {
    Finish();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  loading.style.display = 'block';
  container[0].style.filter = 'blur(8px)';
  setTimeout(() => {
    Question.innerHTML = botSay(jawabanUser)[init];
    loading.style.display = 'none';
    container[0].style.filter = 'none';
  }, [1000]);
  userData.push(Answer.value);
  Answer.value = '';
}

function Finish() {
  Question.innerHTML = `Thanks ${userData[0]} Udah Main Di FAKE BOT ini 😊`;
  Answer.value = 'Siapp';
}

function botEnd() {
  window.location.reload();
}
