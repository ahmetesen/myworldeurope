function showSimpleModal(title, message){
    $('.modal-title').text(title);
    $('.modalBody').text(message);
    $('btn btn-secondary').text("Kapat!");
    $('.modal').modal();
}

function showTimeoutModal(title,message){
    $('.modal-title').text(title);
    $('.modalBody').text(message);
    $('btn btn-secondary').text("Kapat!");
    $('.modal').modal();
    setTimeout(function(){
        $('.modal').modal('hide');
    }, 2000);
}