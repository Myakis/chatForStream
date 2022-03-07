export class Question {
  //Отправляем запрос на сервер, добавляем полученные данные в бд на сервере
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
  //Выводим вопросы в чат, если они есть
  static renderList() {
    const questions = getQuestionsFromLocalStorage();
    const html = questions.length ? questions.map(toCard).join(' ') : '';
    const list = document.querySelector('.chat');
    list.innerHTML = html;
  }
  //Проверяем наш токен в форме регистранции
  static fetch(token) {
    if (!token) {
      return Promise.resolve('<p class="error">У вас нет токена<p>');
    }
    return fetch(`https://app-with-questions-default-rtdb.firebaseio.com/question.json?auth=${token}`)
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          return `<p class"error">${response.error}<p>`;
        }
        return response
          ? Object.keys(response).map(key => ({
              ...response[key],
              id: key,
            }))
          : [];
      });
  }
  //Выводим список вопросов, если вход прошел успешно и они есть, если вопросо нет- выводим соответсвующий текст
  static listToHTML(questions) {
    return questions.length
      ? `
    <ol>
    ${questions.map(q => `<li>${q.text}</li>`).join('')}
    </ol>`
      : '<p>Вопросов нет</p>';
  }
}
//Сохраняем вопросы в localStorage
function addToLocalStorage(question) {
  const all = getQuestionsFromLocalStorage();

  all.push(question);
  localStorage.setItem('question', JSON.stringify(all));
}

function getQuestionsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('question') || '[]');
}

//Создаем обертку для ввывода вопрса в чат
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
