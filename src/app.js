import './style.css';
import { Question } from './question';
import { isVaid } from './utils';
const form = document.querySelector('.form-chat');
const textarea = form.querySelector('textarea');
const chatBtn = form.querySelector('button');
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
