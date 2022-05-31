function addUser() {
Player1 = document.getElementById("textP1").value;
Player2 = document.getElementById("textP2").value;
localStorage.setItem("Player1Name", Player1)
localStorage.setItem("Player2Name", Player2)
}
