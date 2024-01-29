let playerNameInput = document.getElementById("playerName");
let listPlayer = JSON.parse(localStorage.getItem("players")) || [];
let ulElement = document.getElementById("listPlayer");
let addBtn = document.getElementById("addPlayer-btn");

function displayPlayers() {
    ulElement.innerHTML = "";
    listPlayer.forEach(function(player) {
        let liElement = document.createElement("li");
        liElement.textContent = `ID: ${player.id}, Tên: ${player.name}`;
        ulElement.appendChild(liElement);
    });
}

displayPlayers();

function addPlayer () {
    if (!playerNameInput.value) {
        alert("Tên cầu thủ không được để trống.");
    } else {
        let player = {
            id: Math.ceil(Math.random() * 100000),
            name: playerNameInput.value,
        };
        listPlayer.push(player);
        localStorage.setItem("players", JSON.stringify(listPlayer));
        playerNameInput.value = ""; // Xóa giá trị của input
        displayPlayers();
    }
}

addBtn.addEventListener("click", function(event){
    event.preventDefault();
    addPlayer();
});