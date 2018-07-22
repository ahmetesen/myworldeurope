function showSimpleModal(title, message){
    $('.modal-title').text(title);
    $('.modalBody').text(message);
    $('.modal').modal();
}

function showTimeoutModal(title,message){
    $('.modal-title').text(title);
    $('.modalBody').text(message);
    $('.modal').modal();
    setTimeout(function(){
        $('.modal').modal('hide');
    }, 2000);
}