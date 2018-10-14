$(document).ready(function(){
    $("#dukkanSearch").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#dukkanList li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});