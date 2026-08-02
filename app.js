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
let valeur_tab =[
    "O", "X"
]
function valeur(){
    let reponse = Math.floor(Math.random()*valeur_tab.length);
    document.getElementById("case1").innerHTML = valeur_tab[reponse];
    document.getElementById("case2").innerHTML = valeur_tab[reponse];
    document.getElementById("case3").innerHTML = valeur_tab[reponse];
    document.getElementById("case4").innerHTML = valeur_tab[reponse];
    document.getElementById("case5").innerHTML = valeur_tab[reponse];
    document.getElementById("case6").innerHTML = valeur_tab[reponse];
    document.getElementById("case7").innerHTML = valeur_tab[reponse];
    document.getElementById("case8").innerHTML = valeur_tab[reponse];
    document.getElementById("case9").innerHTML = valeur_tab[reponse];
}
