console.log('werkt')
$(document).ready(function() {
    $('p').css('color', 'red');
    $('#size input').on('change', function() {
        size = $('input[name=size]:checked', '#size').val();
        console.log(size);
    });


    $("#topping").click(function() {
        topping = [];
        $.each($("input[name='topping']:checked"), function() {
            topping.push($(this).val());
        });
        console.log(topping.join(", "));
    });


    $("#pay").on('click', function() {
        let totaal = Number(size) + Number(topping)
        console.log(totaal)
    });






});