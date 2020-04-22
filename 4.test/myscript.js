       $(document).ready(function() {
           $('#text').text('test');
           $('#html').html('test');
           $('#val').val('test');

           //    $(function() {
           //            var test = $('a').attr('href');
           //            alert(test);
           //        })
           // -------------------------------
           //Veranderd de link sololeaern.com in jquery.com
           $(function() {
               $("a").attr("href", "http://www.jquery.com");
           });
           $("#text").append(" .-t5*David");
           $('#text').after(' david did vidad');
           $('#text').before(' .-t5* random text en tekens')

           var newtext = $('<p></p>').text("This is new text!");
           $('#html').after(newtext);
           $('#html').css("color", "red");
           $(newtext).css('color', 'green');




       });