/* Set the width of the offcanvas-side-navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mainContent").style.marginLeft = "250px";
    // and add a black background color to body */
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mainContent").style.marginLeft = "0";
    // and the background color of body to white */
    document.body.style.backgroundColor = "white";
}    

var database = firebase.database();

var MUC = {
    init: function(){
        // When user clicks add player button
        $('#joinHunt').on('click', function(event){
            event.preventDefault();
            var name = $('#yourName');
            MUC.makePlayer(name.val());
            name.val('');
            $('#splash').slideUp('slow');
        });
    },
    makePlayer: function( playerName ){
        // debugger;
        // Set player key, either playerA or player1
        
        
        var playerKey = firebase.database().ref('players/').push({
            name: playerName
        });
        console.log('create a coockie wih this!' + playerKey);
        // somehow set a cookie to persist the current player

        $('#splash').slideToggle('slow');
        
    }
    // add player to firebase
    // player added? get the playerboard
    // player scored? get the playerboard
    // get scav clues
    // write scav clues (where are scav clues?)
    // get the playerboard
    // do navigation things
    // where is the player?
    // where is the point?
    // submit the image to clarifai
        // determine if response from clarifai is good?
        // give the person a point ladies and gentleman
    // write the playerboard
}


MUC.init();