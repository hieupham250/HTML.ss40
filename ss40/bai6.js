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

function loginUser (){
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let foundUser = users.find(user => user.username === username && user.password === password);
    if (foundUser) {
        alert("Đăng nhập thành công!");
    } else {
        alert("Tên người dùng hoặc mật khẩu không chính xác!");
    }
    loginForm.reset();
}

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addUser();
});

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    loginUser();
});