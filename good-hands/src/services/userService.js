// "users" -> Array
// "currentUser" -> "string"

// LocalForage:
// getItem("currentUser")
// getItem("users")

// https://github.com/localForage/localForage

export const registerUser = (userData) => {
// 1. Sprawdź, czy pola są wypełnione po kliknięciu na "Załóż konto"
// 2. Zawołaj "registerUser" z komponentu
// 2a. Jeśli użytkownik istnieje - rzuć błąd z informacją, że istnieje
// 2b. Jeśli użytkownik nie istnieje - zwróć promise z danymi przekazanymi z formularza
// Uzyj users.findIndex() oraz setItem("users", [...users, newUser])

// new Error('Użytkownik już istnieje');
// W komponencie: registerUser().catch(err => this.setErrorState(err.message);
}

export const loginUser = (username, password) => {
// 1. Sprawdź, czy pola są wypełnione
// 2. Zawołaj "loginUser" z komponentu
// 3. Znajdź użytkownika w obiekcie "users" w localstorage (jak wcześniej)
// 3a. Jeżeli użytkownika nie ma - zwróć błąd, tak jak wcześniej
// 3b. Jeżeli użytkownik jest - zapisz jego e-mail w obiekcie "currentUser", np. setItem("currentUser", "test@gmail.com");
// 4. Wylogowanie - ustawienie setItem("currentUser", null);
};

export const getCurrentUser = async () => {
  // 1. Sprawdź wartość pola "currentUser"
  // 2. Jeśli jest tam e-mail a nie null -> wyszukaj po tym e-mailu w "users" i zwróć, np. tak:
  // users.find(user => user.email === email);

  const currentUser = await localForage.getItem('currentUser')
  if (!currentUser) {
    return null;
  }

  const users = (await localForage.getItem('users')) || [];
  return users.find(user => user.email === currentUser);
}
