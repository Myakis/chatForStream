export class Question {
  static create(question) {
    return fetch('https://app-with-questions-default-rtdb.firebaseio.com/question.json', {
      method: 'POST',
      body: JSON.stringify(question),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        question.id = data.name;
        return question;
      })
      .then(addToLocalStorage)
      .then(Question.renderList);
  }
  static renderList() {
    const questions = getQuestionsFromLocalStorage();
    const html = questions.length ? questions.map(toCard).join(' ') : '';
    const list = document.querySelector('.chat');
    list.innerHTML = html;
  }
}

function addToLocalStorage(question) {
  const all = getQuestionsFromLocalStorage();

  all.push(question);
  localStorage.setItem('question', JSON.stringify(all));
}

function getQuestionsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('question') || '[]');
}
function toCard(question) {
  return `
  <div class="chat__question-block">
      <div class="chat__data">
      ${new Date(question.date).toLocaleDateString()}
      ${new Date(question.date).toLocaleTimeString()}
      </div>
      <div class="chat__question">${question.text}</div>
  </div>
  
  `;
}
