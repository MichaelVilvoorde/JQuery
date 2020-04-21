       var number = ["rock", "paper", "scissors"];
       console.log(number.indexOf("paper"));
       console.log()

       //    if (number[0] = number[0]) {
       //        document.write("Tie");
       //    }


       $(document).ready(function() {
           $('h1').css('color', 'red');
           $('#rock1').on('click', function() {
               ///////////  player 1 ////////////
               $('#p1choice').html("Player 1 chose rock!");
           });
           $('#paper1').on('click', function() {
               $('#p1choice').html("Player 1 chose paper!");
           });
           $('#scissors1').on('click', function() {
               $('#p1choice').html("Player 1 chose scissors!");
           });
           ///////////  player 2 ////////////
           $('#rock2').on('click', function() {
               $('#p2choice').html("Player 2 chose rock!");
           });
           $('#paper2').on('click', function() {
               $('#p2choice').html("Player 2 chose paper!");
           });
           $('#scissors2').on('click', function() {
               $('#p2choice').html("Player 2 chose scissors!");
           });

           //    if ($('#kaas') && $('#salamaaiaiie')) {
           //        console.log("tie");
           //    



       });