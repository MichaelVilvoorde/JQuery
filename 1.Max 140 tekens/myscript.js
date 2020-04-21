$(function() {
    $('h1').css('color', 'red');

    var maxLength = 140;
    $('#input').keyup(function() {
        var length = maxLength - $(this).val().length + ' Character(s) Remaining';
        $('#rest').text(length);
    });




    // Schrijf een functie die de input .val() van een veld controleert en maximaal 140 tekens
    // toelaat.
    // Tip gebruik: keyup() en .text()

});