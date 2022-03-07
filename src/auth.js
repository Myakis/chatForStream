export function getAuthForm() {
  return `
    <form action="#" id="auth-form">
      <div class="form-label">
        <label for="auth-input">Почта</label>
        <input type="email" id="auth-input" />
      </div>
      <div class="form-label">
        <label for="auth-password">Пароль</label>
        <input type="password" id="auth-password" />
      </div>
      <button type="submit">Войти</button>
    </form>
  `;
}

export function authWithEmailAndPassword(email, password) {
  const apiKey = 'AIzaSyAFMv6iwAwxe0Cc7wNeK4BXceOkDHTa2VU';
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(data => data.idToken);
}
