const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email;
  const password = formElements.password;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены");
  }
  console.log({ email: email.value, password: password.value });

  form.reset();
}
