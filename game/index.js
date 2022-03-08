const userContainer = document.querySelector("#user-info");
const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");
const mooButton = document.querySelector("#intro")

const baseURL = `http://localhost:3456`;

const login = (body) =>
  axios
    .post(`${baseURL}/api/login`, body)
    .then((res) => {
      createUserCard(res.data)
  window.location.href = "./intro.html" 
    })
    .catch((err) => {
      console.log(err);
      alert("MOOO! Your request failed.");
    });
const register = (body) =>
  axios
    .post(`${baseURL}/api/register`, body)
    .then((res) => {
      // createUserCard(res.data);
  window.location.href = "./intro.html" 
    })
    .catch((err) => {
      console.log(err);
      alert("MOOO! Your request failed.");
    });

function loginSubmitHandler(e) {
  e.preventDefault();

  let username = document.querySelector("#login-username");
  let password = document.querySelector("#login-password");

  let bodyObj = {
    username: username.value,
    password: password.value,
  };

  login(bodyObj);

  username.value = "";
  password.value = "";
  window.location.href = "./intro.html" 
}

function registerSubmitHandler(e) {
  e.preventDefault();

  let username = document.querySelector("#register-username");
  let email = document.querySelector("#register-email");
  let firstName = document.querySelector("#register-firstName");
  let lastName = document.querySelector("#register-lastName");
  let password = document.querySelector("#register-password");
  let password2 = document.querySelector("#register-password-2");

  if (password.value !== password2.value) {
    alert("Your passwords need to match. Moo!");
    return;
  }

  let bodyObj = {
    username: username.value,
    email: email.value,
    firstName: firstName.value,
    lastName: lastName.value,
    password: password.value,
  };

  register(bodyObj);

  username.value = "";
  email.value = "";
  firstName.value = "";
  lastName.value = "";
  password.value = "";
  password2.value = "";
}

// function createUserCard(data) {
//   console.log(data)
//   // userContainer.innerHTML = "";
//   const userCard = document.createElement("div");
//   userCard.classList.add("user-card");

//   userCard.innerHTML = `<p class="username">Username: ${data.username}</p>
//     <p class="email">Email: ${data.email}</p>
//     <p class="first-name">First Name: ${data.firstName}</p>
//     <p class="last-name">Last Name: ${data.lastName}</p>
//     `;

//   userContainer.appendChild(userCard);
// }

loginForm.addEventListener("submit", loginSubmitHandler);
registerForm.addEventListener("submit", registerSubmitHandler);
