$(document).ready(function($) {
    
    $.getJSON("./json/servisdata", function(data){
        
        $.each(data, function( index, value ) {
            console.log(index,value);
            //$('#content').append(cardCreator(index,value));

        });

    });
});