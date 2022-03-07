import './style.css';
import { Question } from './question';
import { removeClassForModal, createModal, isVaid } from './utils';
import { authWithEmailAndPassword, getAuthForm } from './auth';
const form = document.querySelector('.form-chat');
const textarea = form.querySelector('textarea');
const chatBtn = form.querySelector('button');
const modalBtn = document.querySelector('.log-in');
const modal = document.querySelector('.modal');
window.addEventListener('load', Question.renderList);
form.addEventListener('submit', submitFormHandler);
textarea.addEventListener('input', () => {
  chatBtn.disabled = !isVaid(textarea.value);
});

function submitFormHandler(e) {
  e.preventDefault();
  if (isVaid(textarea.value)) {
    const question = {
      text: textarea.value,
      date: new Date().toJSON(),
    };
    chatBtn.disabled = true;
    Question.create(question).then(() => {
      textarea.value = '';
      chatBtn.disabled = false;
    });
  }
}

modalBtn.addEventListener('click', openModal);

function authFormHandler(e) {
  e.preventDefault();
  const email = e.target.querySelector('#auth-input').value;
  const password = e.target.querySelector('#auth-password').value;
  const btn = e.target.querySelector('button');
  btn.disabled = true;
  authWithEmailAndPassword(email, password)
    .then(Question.fetch)
    .then(renderModalAfterAuth)
    .then(() => {
      btn.disabled = false;
    });
}

function renderModalAfterAuth(content) {
  if (typeof content === 'string') {
    createModal('Ошибка', content);
  } else {
    createModal('Вопросы', Question.listToHTML(content));
  }
  removeClassForModal();
}
function openModal() {
  createModal('Авторизация', getAuthForm());
  removeClassForModal();
  document.querySelector('#auth-form').addEventListener('submit', authFormHandler, { once: true });
}
