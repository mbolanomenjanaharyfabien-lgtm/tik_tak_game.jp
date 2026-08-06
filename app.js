function sombre(){
    document.body.style.background = "rgb(28, 28, 28)";
    document.body.style.color = "white";
    document.getElementById("name_player1").style.background ="none";
    document.getElementById("name_player1").style.border ="2px solid white";
    document.getElementById("name_player2").style.background ="none";
    document.getElementById("commencer").style.background ="tansparent";
    document.getElementById("commencer").style.color ="white";
    document.getElementById("continuer").style.color ="white"
    document.getElementById("commencer").style.borderColor ="white";
    document.getElementById("continuer").style.borderColor ="white";
    document.getElementById("recommencer").style.background ="transparent";
    document.getElementById("recommencer").style.color ="white";
    document.getElementById("recommencer").style.borderColor ="white";
    document.getElementById("name_player2").style.border ="2px solid white";
    document.getElementById("chose").style.border ="2px solid white";
    document.getElementById("chose").style.color ="white";
    document.getElementById("chose").style.background ="transparent";
    document.getElementById("chose2").style.background ="tansparent";
    document.getElementById("chose2").style.border ="2px solid white";
    document.getElementById("chose2").style.color ="white";
    document.getElementById("mode").style.background ="white";
    document.getElementById("mode3").style.display ="block";
    document.getElementById("mode2").style.background ="transparent";
    document.getElementById("mode2").style.transition ="0.3s";
}
function clair(){
    document.body.style.background = "";
    document.body.style.color = "";
    document.getElementById("name_player1").style.background ="";
    document.getElementById("commencer").style.color ="";
    document.getElementById("commencer").style.borderColor ="";
    document.getElementById("continuer").style.color ="";
    document.getElementById("continuer").style.borderColor ="";
    document.getElementById("recommencer").style.color ="";
    document.getElementById("recommencer").style.borderColor ="";
    document.getElementById("mode").style.background ="";
    document.getElementById("name_player1").style.border ="";
    document.getElementById("name_player2").style.background ="";
    document.getElementById("name_player2").style.border ="";
    document.getElementById("commencer").style.background ="";
    document.getElementById("recommencer").style.background ="";
    document.getElementById("chose").style.border ="";
    document.getElementById("chose").style.color ="";
    document.getElementById("chose").style.background ="";
    document.getElementById("chose2").style.background ="";
    document.getElementById("chose2").style.border ="";
    document.getElementById("chose2").style.color ="";
    document.getElementById("mode3").style.display ="none";
    document.getElementById("mode2").style.display ="block";
    document.getElementById("mode2").style.background ="grey";
    document.getElementById("mode2").style.transition ="0.3s";
}

function commencer() {
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
function recommencer() {
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
    document.getElementById("deb_score1").textContent ="";
    document.getElementById("deb_score2").textContent ="";
    
}
function continuer() {
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
    document.getElementById("case1").innerHTML=tour;
    let name_player1 = document.getElementById("name_player1").value;
    let name_player2 = document.getElementById("name_player2").value;
    let case1 = document.getElementById("case1").textContent;
    let case2 = document.getElementById("case2").textContent;
    let case3 = document.getElementById("case3").textContent;
    let case4 = document.getElementById("case4").textContent;
    let case5 = document.getElementById("case5").textContent;
    let case6 = document.getElementById("case6").textContent;
    let case7 = document.getElementById("case7").textContent;
    let case8 = document.getElementById("case8").textContent;
    let case9 = document.getElementById("case9").textContent;
    if( (case1 === "O" && case2 === "O" && case3 === "O" || 
        case4 === "O" && case5 === "O" && case6 === "O" || 
        case1 === "O" && case4 === "O" && case7 === "O" ||
        case2 === "O" && case5 === "O" && case8 === "O" ||
        case3 === "O" && case6 === "O" && case9 === "O" ||
        case7 === "O" && case8 === "O" && case9 === "O" ||
        case1 === "O" && case5 === "O" && case9 === "O" ||
        case3 === "O" && case5 === "O" && case7 === "O")) 
    {
        let debut_score = document.getElementById("deb_score1");
        let debut_score_number = Number(debut_score.textContent);
        debut_score.textContent = debut_score_number + 1;
        alert(name_player1 + " à gagner");
        return;
    }
    else if( (case1 === "X" && case2 === "X" && case3 === "X" || 
        case4 === "X" && case5 === "X" && case6 === "X" || 
        case1 === "X" && case4 === "X" && case7 === "X" ||
        case2 === "X" && case5 === "X" && case8 === "X" ||
        case3 === "X" && case6 === "X" && case9 === "X" ||
        case7 === "X" && case8 === "X" && case9 === "X" ||
        case1 === "X" && case5 === "X" && case9 === "X" ||
        case3 === "X" && case5 === "X" && case7 === "X")) 
    {
        let debut_score2 = document.getElementById("deb_score2");
        let debut_score_number2 = Number(debut_score2.textContent);
        debut_score2.textContent = debut_score_number2 + 1;
        return;
        alert(name_player2 + " à gagner");
    }
    tour = (tour === "X")? "O":"X";
}

function valeur2(){
    document.getElementById("case2").innerHTML = tour;
    let name_player1 = document.getElementById("name_player1").value;
    let name_player2 = document.getElementById("name_player2").value;
    let case1 = document.getElementById("case1").textContent;
    let case2 = document.getElementById("case2").textContent;
    let case3 = document.getElementById("case3").textContent;
    let case4 = document.getElementById("case4").textContent;
    let case5 = document.getElementById("case5").textContent;
    let case6 = document.getElementById("case6").textContent;
    let case7 = document.getElementById("case7").textContent;
    let case8 = document.getElementById("case8").textContent;
    let case9 = document.getElementById("case9").textContent;
    if( (case1 === "O" && case2 === "O" && case3 === "O" || 
        case4 === "O" && case5 === "O" && case6 === "O" || 
        case1 === "O" && case4 === "O" && case7 === "O" ||
        case2 === "O" && case5 === "O" && case8 === "O" ||
        case3 === "O" && case6 === "O" && case9 === "O" ||
        case7 === "O" && case8 === "O" && case9 === "O" ||
        case1 === "O" && case5 === "O" && case9 === "O" ||
        case3 === "O" && case5 === "O" && case7 === "O")) 
    {
        let debut_score = document.getElementById("deb_score1");
        let debut_score_number = Number(debut_score.textContent);
        debut_score.textContent = debut_score_number + 1;
        alert(name_player1 + " à gagner");
        return;
    }
    else if( (case1 === "X" && case2 === "X" && case3 === "X" || 
        case4 === "X" && case5 === "X" && case6 === "X" || 
        case1 === "X" && case4 === "X" && case7 === "X" ||
        case2 === "X" && case5 === "X" && case8 === "X" ||
        case3 === "X" && case6 === "X" && case9 === "X" ||
        case7 === "X" && case8 === "X" && case9 === "X" ||
        case1 === "X" && case5 === "X" && case9 === "X" ||
        case3 === "X" && case5 === "X" && case7 === "X")) 
    {
        let debut_score2 = document.getElementById("deb_score2");
        let debut_score_number2 = Number(debut_score2.textContent);
        debut_score2.textContent = debut_score_number2 + 1;
        return;
        alert(name_player2 + " à gagner");
    }

    tour = (tour === "X")? "O":"X";
}

function valeur3(){
    document.getElementById("case3").innerHTML = tour;
    let name_player1 = document.getElementById("name_player1").value;
    let name_player2 = document.getElementById("name_player2").value;
    let case1 = document.getElementById("case1").textContent;
    let case2 = document.getElementById("case2").textContent;
    let case3 = document.getElementById("case3").textContent;
    let case4 = document.getElementById("case4").textContent;
    let case5 = document.getElementById("case5").textContent;
    let case6 = document.getElementById("case6").textContent;
    let case7 = document.getElementById("case7").textContent;
    let case8 = document.getElementById("case8").textContent;
    let case9 = document.getElementById("case9").textContent;
    if( (case1 === "O" && case2 === "O" && case3 === "O" || 
        case4 === "O" && case5 === "O" && case6 === "O" || 
        case1 === "O" && case4 === "O" && case7 === "O" ||
        case2 === "O" && case5 === "O" && case8 === "O" ||
        case3 === "O" && case6 === "O" && case9 === "O" ||
        case7 === "O" && case8 === "O" && case9 === "O" ||
        case1 === "O" && case5 === "O" && case9 === "O" ||
        case3 === "O" && case5 === "O" && case7 === "O")) 
    {
        let debut_score = document.getElementById("deb_score1");
        let debut_score_number = Number(debut_score.textContent);
        debut_score.textContent = debut_score_number + 1;
        alert(name_player1 + " à gagner");
        return;
    }
    else if( (case1 === "X" && case2 === "X" && case3 === "X" || 
        case4 === "X" && case5 === "X" && case6 === "X" || 
        case1 === "X" && case4 === "X" && case7 === "X" ||
        case2 === "X" && case5 === "X" && case8 === "X" ||
        case3 === "X" && case6 === "X" && case9 === "X" ||
        case7 === "X" && case8 === "X" && case9 === "X" ||
        case1 === "X" && case5 === "X" && case9 === "X" ||
        case3 === "X" && case5 === "X" && case7 === "X")) 
    {
        let debut_score2 = document.getElementById("deb_score2");
        let debut_score_number2 = Number(debut_score2.textContent);
        debut_score2.textContent = debut_score_number2 + 1;
        return;
        alert(name_player2 + " à gagner");
    }

    tour = (tour === "X")? "O":"X";
}

function valeur4(){
    document.getElementById("case4").innerHTML = tour;
    let name_player1 = document.getElementById("name_player1").value;
    let name_player2 = document.getElementById("name_player2").value;
    let case1 = document.getElementById("case1").textContent;
    let case2 = document.getElementById("case2").textContent;
    let case3 = document.getElementById("case3").textContent;
    let case4 = document.getElementById("case4").textContent;
    let case5 = document.getElementById("case5").textContent;
    let case6 = document.getElementById("case6").textContent;
    let case7 = document.getElementById("case7").textContent;
    let case8 = document.getElementById("case8").textContent;
    let case9 = document.getElementById("case9").textContent;
    if( (case1 === "O" && case2 === "O" && case3 === "O" || 
        case4 === "O" && case5 === "O" && case6 === "O" || 
        case1 === "O" && case4 === "O" && case7 === "O" ||
        case2 === "O" && case5 === "O" && case8 === "O" ||
        case3 === "O" && case6 === "O" && case9 === "O" ||
        case7 === "O" && case8 === "O" && case9 === "O" ||
        case1 === "O" && case5 === "O" && case9 === "O" ||
        case3 === "O" && case5 === "O" && case7 === "O")) 
    {
        let debut_score = document.getElementById("deb_score1");
        let debut_score_number = Number(debut_score.textContent);
        debut_score.textContent = debut_score_number + 1;
        alert(name_player1 + " à gagner");
        return;
    }
    else if( (case1 === "X" && case2 === "X" && case3 === "X" || 
        case4 === "X" && case5 === "X" && case6 === "X" || 
        case1 === "X" && case4 === "X" && case7 === "X" ||
        case2 === "X" && case5 === "X" && case8 === "X" ||
        case3 === "X" && case6 === "X" && case9 === "X" ||
        case7 === "X" && case8 === "X" && case9 === "X" ||
        case1 === "X" && case5 === "X" && case9 === "X" ||
        case3 === "X" && case5 === "X" && case7 === "X")) 
    {
        let debut_score2 = document.getElementById("deb_score2");
        let debut_score_number2 = Number(debut_score2.textContent);
        debut_score2.textContent = debut_score_number2 + 1;
        return;
        alert(name_player2 + " à gagner");
    }

    tour = (tour === "X")? "O":"X";
}

function valeur5(){
    document.getElementById("case5").innerHTML = tour;
    let name_player1 = document.getElementById("name_player1").value;
    let name_player2 = document.getElementById("name_player2").value;
    let case1 = document.getElementById("case1").textContent;
    let case2 = document.getElementById("case2").textContent;
    let case3 = document.getElementById("case3").textContent;
    let case4 = document.getElementById("case4").textContent;
    let case5 = document.getElementById("case5").textContent;
    let case6 = document.getElementById("case6").textContent;
    let case7 = document.getElementById("case7").textContent;
    let case8 = document.getElementById("case8").textContent;
    let case9 = document.getElementById("case9").textContent;
    if( (case1 === "O" && case2 === "O" && case3 === "O" || 
        case4 === "O" && case5 === "O" && case6 === "O" || 
        case1 === "O" && case4 === "O" && case7 === "O" ||
        case2 === "O" && case5 === "O" && case8 === "O" ||
        case3 === "O" && case6 === "O" && case9 === "O" ||
        case7 === "O" && case8 === "O" && case9 === "O" ||
        case1 === "O" && case5 === "O" && case9 === "O" ||
        case3 === "O" && case5 === "O" && case7 === "O")) 
    {
        let debut_score = document.getElementById("deb_score1");
        let debut_score_number = Number(debut_score.textContent);
        debut_score.textContent = debut_score_number + 1;
        alert(name_player1 + " à gagner");
        return;
    }
    else if( (case1 === "X" && case2 === "X" && case3 === "X" || 
        case4 === "X" && case5 === "X" && case6 === "X" || 
        case1 === "X" && case4 === "X" && case7 === "X" ||
        case2 === "X" && case5 === "X" && case8 === "X" ||
        case3 === "X" && case6 === "X" && case9 === "X" ||
        case7 === "X" && case8 === "X" && case9 === "X" ||
        case1 === "X" && case5 === "X" && case9 === "X" ||
        case3 === "X" && case5 === "X" && case7 === "X")) 
    {
        let debut_score2 = document.getElementById("deb_score2");
        let debut_score_number2 = Number(debut_score2.textContent);
        debut_score2.textContent = debut_score_number2 + 1;
        return;
        alert(name_player2 + " à gagner");
    }

    tour = (tour === "X")? "O":"X";
}

function valeur6(){
    document.getElementById("case6").innerHTML = tour;
    let name_player1 = document.getElementById("name_player1").value;
    let name_player2 = document.getElementById("name_player2").value;
    let case1 = document.getElementById("case1").textContent;
    let case2 = document.getElementById("case2").textContent;
    let case3 = document.getElementById("case3").textContent;
    let case4 = document.getElementById("case4").textContent;
    let case5 = document.getElementById("case5").textContent;
    let case6 = document.getElementById("case6").textContent;
    let case7 = document.getElementById("case7").textContent;
    let case8 = document.getElementById("case8").textContent;
    let case9 = document.getElementById("case9").textContent;
    if( (case1 === "O" && case2 === "O" && case3 === "O" || 
        case4 === "O" && case5 === "O" && case6 === "O" || 
        case1 === "O" && case4 === "O" && case7 === "O" ||
        case2 === "O" && case5 === "O" && case8 === "O" ||
        case3 === "O" && case6 === "O" && case9 === "O" ||
        case7 === "O" && case8 === "O" && case9 === "O" ||
        case1 === "O" && case5 === "O" && case9 === "O" ||
        case3 === "O" && case5 === "O" && case7 === "O")) 
    {
        let debut_score = document.getElementById("deb_score1");
        let debut_score_number = Number(debut_score.textContent);
        debut_score.textContent = debut_score_number + 1;
        alert(name_player1 + " à gagner");
        return;
    }
    else if( (case1 === "X" && case2 === "X" && case3 === "X" || 
        case4 === "X" && case5 === "X" && case6 === "X" || 
        case1 === "X" && case4 === "X" && case7 === "X" ||
        case2 === "X" && case5 === "X" && case8 === "X" ||
        case3 === "X" && case6 === "X" && case9 === "X" ||
        case7 === "X" && case8 === "X" && case9 === "X" ||
        case1 === "X" && case5 === "X" && case9 === "X" ||
        case3 === "X" && case5 === "X" && case7 === "X")) 
    {
        let debut_score2 = document.getElementById("deb_score2");
        let debut_score_number2 = Number(debut_score2.textContent);
        debut_score2.textContent = debut_score_number2 + 1;
        return;
        alert(name_player2 + " à gagner");
    }

    tour = (tour === "X")? "O":"X";
}

function valeur7(){
    document.getElementById("case7").innerHTML = tour;
    let name_player1 = document.getElementById("name_player1").value;
    let name_player2 = document.getElementById("name_player2").value;
    let case1 = document.getElementById("case1").textContent;
    let case2 = document.getElementById("case2").textContent;
    let case3 = document.getElementById("case3").textContent;
    let case4 = document.getElementById("case4").textContent;
    let case5 = document.getElementById("case5").textContent;
    let case6 = document.getElementById("case6").textContent;
    let case7 = document.getElementById("case7").textContent;
    let case8 = document.getElementById("case8").textContent;
    let case9 = document.getElementById("case9").textContent;
    if( (case1 === "O" && case2 === "O" && case3 === "O" || 
        case4 === "O" && case5 === "O" && case6 === "O" || 
        case1 === "O" && case4 === "O" && case7 === "O" ||
        case2 === "O" && case5 === "O" && case8 === "O" ||
        case3 === "O" && case6 === "O" && case9 === "O" ||
        case7 === "O" && case8 === "O" && case9 === "O" ||
        case1 === "O" && case5 === "O" && case9 === "O" ||
        case3 === "O" && case5 === "O" && case7 === "O")) 
    {
        let debut_score = document.getElementById("deb_score1");
        let debut_score_number = Number(debut_score.textContent);
        debut_score.textContent = debut_score_number + 1;
        alert(name_player1 + " à gagner");
        return;
    }
    else if( (case1 === "X" && case2 === "X" && case3 === "X" || 
        case4 === "X" && case5 === "X" && case6 === "X" || 
        case1 === "X" && case4 === "X" && case7 === "X" ||
        case2 === "X" && case5 === "X" && case8 === "X" ||
        case3 === "X" && case6 === "X" && case9 === "X" ||
        case7 === "X" && case8 === "X" && case9 === "X" ||
        case1 === "X" && case5 === "X" && case9 === "X" ||
        case3 === "X" && case5 === "X" && case7 === "X")) 
    {
        let debut_score2 = document.getElementById("deb_score2");
        let debut_score_number2 = Number(debut_score2.textContent);
        debut_score2.textContent = debut_score_number2 + 1;
        return;
        alert(name_player2 + " à gagner");
    }

    tour = (tour === "X")? "O":"X";
}

function valeur8(){
    document.getElementById("case8").innerHTML = tour;
    let name_player1 = document.getElementById("name_player1").value;
    let name_player2 = document.getElementById("name_player2").value;
    let case1 = document.getElementById("case1").textContent;
    let case2 = document.getElementById("case2").textContent;
    let case3 = document.getElementById("case3").textContent;
    let case4 = document.getElementById("case4").textContent;
    let case5 = document.getElementById("case5").textContent;
    let case6 = document.getElementById("case6").textContent;
    let case7 = document.getElementById("case7").textContent;
    let case8 = document.getElementById("case8").textContent;
    let case9 = document.getElementById("case9").textContent;
    if( (case1 === "O" && case2 === "O" && case3 === "O" || 
        case4 === "O" && case5 === "O" && case6 === "O" || 
        case1 === "O" && case4 === "O" && case7 === "O" ||
        case2 === "O" && case5 === "O" && case8 === "O" ||
        case3 === "O" && case6 === "O" && case9 === "O" ||
        case7 === "O" && case8 === "O" && case9 === "O" ||
        case1 === "O" && case5 === "O" && case9 === "O" ||
        case3 === "O" && case5 === "O" && case7 === "O")) 
    {
        let debut_score = document.getElementById("deb_score1");
        let debut_score_number = Number(debut_score.textContent);
        debut_score.textContent = debut_score_number + 1;
        alert(name_player1 + " à gagner");
        return;
    }
    else if( (case1 === "X" && case2 === "X" && case3 === "X" || 
        case4 === "X" && case5 === "X" && case6 === "X" || 
        case1 === "X" && case4 === "X" && case7 === "X" ||
        case2 === "X" && case5 === "X" && case8 === "X" ||
        case3 === "X" && case6 === "X" && case9 === "X" ||
        case7 === "X" && case8 === "X" && case9 === "X" ||
        case1 === "X" && case5 === "X" && case9 === "X" ||
        case3 === "X" && case5 === "X" && case7 === "X")) 
    {
        let debut_score2 = document.getElementById("deb_score2");
        let debut_score_number2 = Number(debut_score2.textContent);
        debut_score2.textContent = debut_score_number2 + 1;
        return;
        alert(name_player2 + " à gagner");
    }

    tour = (tour === "X")? "O":"X";
}

function valeur9(){
    document.getElementById("case9").innerHTML = tour;
    let name_player1 = document.getElementById("name_player1").value;
    let name_player2 = document.getElementById("name_player2").value;
    let case1 = document.getElementById("case1").textContent;
    let case2 = document.getElementById("case2").textContent;
    let case3 = document.getElementById("case3").textContent;
    let case4 = document.getElementById("case4").textContent;
    let case5 = document.getElementById("case5").textContent;
    let case6 = document.getElementById("case6").textContent;
    let case7 = document.getElementById("case7").textContent;
    let case8 = document.getElementById("case8").textContent;
    let case9 = document.getElementById("case9").textContent;
    if( (case1 === "O" && case2 === "O" && case3 === "O" || 
        case4 === "O" && case5 === "O" && case6 === "O" || 
        case1 === "O" && case4 === "O" && case7 === "O" ||
        case2 === "O" && case5 === "O" && case8 === "O" ||
        case3 === "O" && case6 === "O" && case9 === "O" ||
        case7 === "O" && case8 === "O" && case9 === "O" ||
        case1 === "O" && case5 === "O" && case9 === "O" ||
        case3 === "O" && case5 === "O" && case7 === "O")) 
    {
        let debut_score = document.getElementById("deb_score1");
        let debut_score_number = Number(debut_score.textContent);
        debut_score.textContent = debut_score_number + 1;
        alert(name_player1 + " à gagner");
        return;
    }
    else if( (case1 === "X" && case2 === "X" && case3 === "X" || 
        case4 === "X" && case5 === "X" && case6 === "X" || 
        case1 === "X" && case4 === "X" && case7 === "X" ||
        case2 === "X" && case5 === "X" && case8 === "X" ||
        case3 === "X" && case6 === "X" && case9 === "X" ||
        case7 === "X" && case8 === "X" && case9 === "X" ||
        case1 === "X" && case5 === "X" && case9 === "X" ||
        case3 === "X" && case5 === "X" && case7 === "X")) 
    {
        let debut_score2 = document.getElementById("deb_score2");
        let debut_score_number2 = Number(debut_score2.textContent);
        debut_score2.textContent = debut_score_number2 + 1;
        return;
        alert(name_player2 + " à gagner");
    }

    tour = (tour === "X")? "O":"X";
}
