function btn() {
    let name_player1 = document.getElementById("name_player1").value;
    let name_player2 = document.getElementById("name_player2").value;
    let player1 = document.getElementById("player1");
    let player2 = document.getElementById("player2");
    let player_name = document.getElementById("player_name");

    if (name_player1 ==="" || name_player2 ==="" ){
        player_name.innerHTML = "Remplir votre nom";
        return;
    }
    else{
        player_name.innerHTML = name_player1 + " VS " + name_player2;
        player1.textContent = name_player1;
        player2.textContent = name_player2;
    }
    
}
function btn2() {
    document.getElementById("name_player1").value = "";
    document.getElementById("name_player2").value = "";
    document.getElementById("player1").textContent = "";
    document.getElementById("player2").textContent = "";
    document.getElementById("player_name").textContent = "";
    
}
let valeur_tab1 =[
    "O", "X", "O", "X", "O", "X","O", "X", "O", "X"
]
let reponse1 = Math.floor(Math.random()*valeur_tab1.length);
function valeur1(){
    let reponse1 = Math.floor(Math.random()*valeur_tab1.length);
    document.getElementById("case1").innerHTML = valeur_tab1[reponse1];
}
function valeur2(){
    let reponse1 = Math.floor(Math.random()*valeur_tab1.length);
    document.getElementById("case2").innerHTML = valeur_tab1[reponse1];
}
function valeur3(){
    let reponse1 = Math.floor(Math.random()*valeur_tab1.length);
    document.getElementById("case3").innerHTML = valeur_tab1[reponse1];
}
function valeur4(){
    let reponse1 = Math.floor(Math.random()*valeur_tab1.length);
    document.getElementById("case4").innerHTML = valeur_tab1[reponse1];
}
function valeur5(){
    let reponse1 = Math.floor(Math.random()*valeur_tab1.length);
    document.getElementById("case5").innerHTML = valeur_tab1[reponse1];
}
function valeur6(){
    let reponse1 = Math.floor(Math.random()*valeur_tab1.length);
    document.getElementById("case6").innerHTML = valeur_tab1[reponse1];
}
function valeur7(){
    let reponse1 = Math.floor(Math.random()*valeur_tab1.length);
    document.getElementById("case7").innerHTML = valeur_tab1[reponse1];
}
function valeur8(){
    let reponse1 = Math.floor(Math.random()*valeur_tab1.length);
    document.getElementById("case8").innerHTML = valeur_tab1[reponse1];
}
function valeur9(){
    let reponse1 = Math.floor(Math.random()*valeur_tab1.length);
    document.getElementById("case9").innerHTML = valeur_tab1[reponse1];
}
    // let valeur_tab2 =[
    //     "X", "O"
    // ]
    // let valeur_tab3 =[
    //     "O", "X"
    // ]
    // let valeur_tab4 =[
    //     "X", "O"
    // ]
    // let valeur_tab5 =[
    //     "O", "X"
    // ]
    // let valeur_tab6 =[
    //     "X", "O"
    // ]
    // let valeur_tab7 =[
    //     "O", "X"
    // ]
    // let valeur_tab8 =[
    //     "X", "O"
    // ]
    // let valeur_tab9 =[
    //     "O", "X"
    // ]