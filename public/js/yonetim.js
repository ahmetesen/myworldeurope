$(document).ready(function(){
    $("#yonetimSearch").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#yonetimList li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});