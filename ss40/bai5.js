let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let emailInput = document.getElementById("email");
let registrationForm = document.getElementById("registrationForm");
let users = JSON.parse(localStorage.getItem('users')) || [];

function addUser() {
    let user = {
        username: usernameInput.value,
        password: passwordInput.value,
        email: emailInput.value,
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    registrationForm.reset();
    alert("Đăng ký thành công.");
}

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addUser();
});
