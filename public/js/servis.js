$(document).ready(function($) {

    /*var navLink = $('<a></a>');
    navLink.addClass("nav-link");
    navLink.attr("data-toggle","tab");
    var navItem = $("<li></li>");
    navItem.addClass("nav-item");
    navItem.append(navLink);*/

    
    $.getJSON("./json/servis.json", function(data){
        
        $.each(data, function( index, value ) {

            var navLink = $('<a></a>');
            navLink.addClass("nav-link");
            navLink.attr("data-toggle","tab");
            navLink.attr("href","#"+value.id);
            navLink.text(index);
            var navItem = $("<li></li>");
            navItem.addClass("nav-item col-xs-6 col-sm-3");
            navItem.append(navLink);

            $('#header').append(navItem);

            /*<div id="home" class="container tab-pane active align-right"><br>
                <h3>HOME</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>*/

            var containerDiv=$('<div id='+value.id+'></div>');
            containerDiv.addClass('container tab-pane');
            /*var containerTitle = $('<h3></h3>');
            containerTitle.addClass('container-title')
            containerTitle.text(index);

            containerDiv.append(containerTitle);
            containerDiv.append('<br>');*/
            //$('#content').append('<br>');
            $('#content').append(containerDiv);

            

            $.each(value, function( subIndex, subValue ) {
                
                if(subIndex == "id")
                    return;
                
                var listTitle = $('<h6></h6>');
                listTitle.text(subIndex);
                containerDiv.append(listTitle);

                var listGroup = $('<ul></ul>');
                listGroup.addClass('list-group-horizontal');

                $.each(subValue, function(listIndex,listValue){

                    var listItem = $('<li></li>');
                    listItem.addClass('list-group-item');
                    listItem.text(listValue);
                    listGroup.append(listItem);
                    console.log("subindex: "+ listIndex, " subvalue:"+listValue);

                });

                containerDiv.append(listGroup);
                containerDiv.append("<br>");

                
            });
        });

        $("#header li:first-child a").addClass("active show");
        $("#content div:first").addClass("active");

    });
});