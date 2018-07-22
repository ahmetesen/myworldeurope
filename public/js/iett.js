$(document).ready(function($) {
    
    $.getJSON("./json/otobus.json", function(data){
        
        $.each(data, function( index, value ) {

            var navLink = $('<a></a>');
            navLink.addClass("nav-link");
            navLink.attr("data-toggle","tab");
            navLink.attr("href","#"+value.id);
            navLink.html(index);
            var navItem = $("<li></li>");
            navItem.addClass("nav-item col-xs-6 col-sm-3");
            navItem.append(navLink);

            $('#header').append(navItem);



            var containerDiv=$('<div id='+value.id+'></div>');
            containerDiv.addClass('container tab-pane');
            $('#content').append(containerDiv);

            $.each(value, function( subIndex, subValue ) {
                
                if(subIndex == "id")
                    return;
                
                var listTitle = $('<h6></h6>');
                listTitle.text(subIndex);
                containerDiv.append(listTitle);

                if(subIndex == "Notlar")
                {
                    var listGroup = $('<ul></ul>');
                    listGroup.addClass('list-group-horizontal');
                    $.each(subValue, function(noteIndex,noteValue){
                        var listItem = $('<li></li>');
                        //listItem.addClass('list-group-item');
                        listItem.html(noteValue);
                        listGroup.append(listItem);
                    });

                    containerDiv.append(listGroup);
                    containerDiv.append("<br>");

                }
                else
                {
                    
                    $.each(subValue, function(h6Index,h6Value){
                    

                        //var h6Title = $('<p></p>');
                        //h6Title.text(h6Index);
                        //containerDiv.append(h6Title);

                        rollItems(containerDiv,h6Index,h6Value)

                    });

                }
                
                

                

                
            });
        });

        $("#header li:first-child a").addClass("active show");
        $("#content div:first").addClass("active");

    });
});

function rollItems(htmlContainer,index,value){
    
    if(Array.isArray(value))
    {
        var listGroup = $('<ul></ul>');
        listGroup.addClass('list-group-horizontal');
        $.each(value, function(listIndex,listValue){

            var listItem = $('<li></li>');
            listItem.addClass('list-group-item');
            listItem.text(listValue);
            listGroup.append(listItem);
            console.log("listindex: "+ listIndex, " listvalue:"+listValue);

        });
        htmlContainer.append(index);
        htmlContainer.append(listGroup);
        htmlContainer.append("<br>");
    }
    else
    {
        var keys = Object.keys(value);
        for(i=0;i<keys.length;i++){
            rollItems(htmlContainer, keys[i],value[keys[i]]);
        }
        //var key = Object.keys(value)[0];
        //rollItems(htmlContainer,key,value[key]);
    }
}
