$(document).ready(function(){

    $.getJSON("./json/dukkan.json", function(data){
        $.each(data.dukkanlar, function( index, value ) {
            console.log("index: ",index,"value: ",value);
            var item = $("<li></li>");
            item.addClass("list-group-item");
            var itemContainer = $("<div></div>");
            itemContainer.addClass("row dukkan-item-container");
            var itemName = $("<div></div>");
            itemName.addClass("col-6");
            itemName.append(value.name);

            var itemPhone = $("<div></div>");
            itemPhone.addClass("col-6 text-right");
            phoneLink = $("<a></a>");
            phoneLink.attr("href","tel:"+value.phone);
            phoneLink.append(value.phone)
            itemPhone.append(phoneLink);

            itemContainer.append(itemName);
            itemContainer.append(itemPhone);
            item.append(itemContainer);
            $("#dukkanList").append(item);
        });
    });



    $("#dukkanSearch").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#dukkanList li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});