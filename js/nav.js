$(document).ready(function(){

    $('#menu-toggle').click(function(){
        $('#menu-list').toggleClass('open', function(){
            $(this).toggle();
        });
    })

})