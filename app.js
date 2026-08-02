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
    document.getElementById("case1").textContent = "";
    document.getElementById("case2").textContent = "";
    document.getElementById("case3").textContent = "";
    document.getElementById("case4").textContent = "";
    document.getElementById("case5").textContent = "";
    document.getElementById("case6").textContent = "";
    document.getElementById("case7").textContent = "";
    document.getElementById("case8").textContent = "";
    document.getElementById("case9").textContent = "";
    
}
let tour = "";

function choix(){
    tour = document.getElementById("chose").value;
}
function choix2(){
    tour = document.getElementById("chose2").value;
}

function valeur1(){
    document.getElementById("case1").innerHTML = tour;
    tour = (tour === "X")? "O":"X";
}

function valeur2(){
    document.getElementById("case2").innerHTML = tour;
    tour = (tour === "X")? "O":"X";
}

function valeur3(){
    document.getElementById("case3").innerHTML = tour;
    tour = (tour === "X")? "O":"X";
}

function valeur4(){
    document.getElementById("case4").innerHTML = tour;
    tour = (tour === "X")? "O":"X";
}

function valeur5(){
    document.getElementById("case5").innerHTML = tour;
    tour = (tour === "X")? "O":"X";
}

function valeur6(){
    document.getElementById("case6").innerHTML = tour;
    tour = (tour === "X")? "O":"X";
}

function valeur7(){
    document.getElementById("case7").innerHTML = tour;
    tour = (tour === "X")? "O":"X";
}

function valeur8(){
    document.getElementById("case8").innerHTML = tour;
    tour = (tour === "X")? "O":"X";
}

function valeur9(){
    document.getElementById("case9").innerHTML = tour;
    tour = (tour === "X")? "O":"X";
}
let case1 = document.getElementById("case1").textContent;
let case2 = document.getElementById("case2").textContent;
let case3 = document.getElementById("case3").textContent;
let case4 = document.getElementById("case4").textContent;
let case5 = document.getElementById("case5").textContent;
let case6 = document.getElementById("case6").textContent;
let case7 = document.getElementById("case7").textContent;
let case8 = document.getElementById("case8").textContent;
let case9 = document.getElementById("case9").textContent;
function win(){
    if(case1 ==="O" && case2 == "O" && case2 == "O")
    alert('you win');
}