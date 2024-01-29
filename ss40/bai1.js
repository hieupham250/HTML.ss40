let form = document.getElementById("form");
let fullNameInput = document.getElementById("fullName");
let ageInput = document.getElementById("age");
let emailInput = document.getElementById("email");
let infoList = document.getElementById("infoList");
let info = JSON.parse(localStorage.getItem('people')) || [];

// Hàm render thông tin
function renderInfo() {
    infoList.innerHTML = "";
    // Duyệt qua mảng info và hiển thị thông tin
    info.forEach(function(person) {
        let li = document.createElement("li");
        li.textContent = `Họ tên: ${person.fullName}, Tuổi: ${person.age}, Email: ${person.email}`;
        infoList.appendChild(li);
    });
}
renderInfo();

// Bắt sự kiện khi form được gửi
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form
    let fullName = fullNameInput.value;
    let age = ageInput.value;
    let email = emailInput.value;

    let newPerson = {
        fullName: fullName,
        age: age,
        email: email
    };

    info.push(newPerson);
    localStorage.setItem('people', JSON.stringify(info));
    // Hiển thị thông tin mới đã được thêm
    renderInfo();
    // Reset form
    form.reset();
});
