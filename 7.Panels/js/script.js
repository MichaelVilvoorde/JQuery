//https://www.youtube.com/watch?v=1nWrIBB_bMA&list=PLoYCgNOIyGABdI2V8I_SWo22tFpgh2s6_&index=5

$('.tab-panels .tabs li').on('click', function() {
    let panel = $(this).closest('.tab-panels');

    //makes the selected panel dark grey instead of grey
    panel.find('.tabs li.active').removeClass('active');
    $(this).addClass('active');


    //figure out wich panel to show  
    let showPanel = $(this).attr('rel');
    //hide current panel


    //Waarom klassen panel en active aan elkaar?
    //Spaces indicate matching against descendants. For every space, you're descending (at least) one level and applying your selector to the children of the previously selected elements.
    panel.find('.panel.active').slideUp(500, function() {
        $(this).removeClass('active');
    })
    $('#' + showPanel).slideDown(500, function() {
        $(this).addClass('active');
    })

});