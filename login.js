function adduser(){
    player1=document.getElementById("player_1_name").value;
    player2= document.getElementById("player_2_name").value;
    localStorage.setItem("player_1_name",player1);
    localStorage.setItem("player_2_name",player2);
    window.location="game_page.html";
    

}