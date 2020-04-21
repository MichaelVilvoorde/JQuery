       $(document).ready(function() {
           $('h1').css('color', 'red');

           $('li').on('click', function() {
               $(this).wrap("<del>")
           });
           //    // option 2
           //    $('li').on('click', function() {
           //        $(this).css("text-decoration", "line-through");
           //    });

           $('li').on('dblclick', function() {
               $(this).toggle();
           });


       });