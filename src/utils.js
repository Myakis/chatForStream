//проверка на количество введенных символов
export function isVaid(value) {
  return value.length >= 5;
}

//Создаение модального окна на основе текста и внутреннего конетнта
export function createModal(title, content) {
  const modal = document.createElement('div');
  document.body.append(modal);
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-overlay"></div>
      <div class="modal-window">
      <h3>${title}</h3>
        ${content}
      <div class="close">✖</div>
    </div>
    `;
  modal.classList.add('modal-open');
  document.querySelector('.modal').remove();
  document.body.append(modal);
}

//Удаляем класс у формы, чтобы ее скрыть
export function removeClassForModal() {
  document.querySelector('.modal').addEventListener('click', e => {
    if (!e.target.closest('.modal-window') || e.target.closest('.close')) {
      document.querySelector('.modal').classList.remove('modal-open');
    }
  });
}
