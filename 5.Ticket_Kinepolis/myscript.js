       $(document).ready(function() {
           //    var ticket_price = 11.50
           //    var tickets = $('#tickets') * ticket_price
           //    console.log(tickets)
           $("select#tickets").change(function() {
               let selectedTickets = $(this).children("option:selected").val();
               console.log("You have selected the Tickets - " + selectedTickets);
           });
           $("button").click(function() {
               let extras = [];
               $.each($("input[name='extras']:checked"), function() {
                   extras.push($(this).val());
               });
               console.log("My favourite extra's are: " + extras.join(", "));
           });



       });