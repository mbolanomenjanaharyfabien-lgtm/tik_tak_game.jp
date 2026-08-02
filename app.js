function btn() {
    let name_player1 = document.getElementById("name_player1").value;
    let name_player2 = document.getElementById("name_player2").value;
    let player1 = document.getElementById("player1");
    let player2 = document.getElementById("player2");
    let player_name = document.getElementById("player_name");
    player_name.innerHTML = name_player1 + " VS " + name_player2;
    player1.textContent = name_player1;
    player2.textContent = name_player2;
}
