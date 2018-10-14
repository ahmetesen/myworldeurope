$(document).ready(function($) {
  
  $('#contactForm').submit(function(e) {

    e.preventDefault();
    e.stopPropagation();
    response = grecaptcha.getResponse();
    if (response.length === 0) {
      $( '.msg-error').text( "Lütfen üstteki kutucuğu işaretleyiniz.\n" );
      if( !$('#recaptcha').hasClass( "error" ) ){
        $('#recaptcha').addClass( "error" );
      }
    }
    else {
      $( '.msg-error' ).text('');
      $('#recaptcha').removeClass( "error" );
      if($('#contactForm')[0].checkValidity())
        formCompleteSuccessfuly(response);
    }
    $('#contactForm')[0].classList.add('was-validated');

  });

  $('button[type="submit"]').removeAttr('disabled');

  function formCompleteSuccessfuly(captchaCode){

    var name=$('#name').val();
    var email=$('#email').val();
    var message = $('#message').val();

    if(message.length>400){
      showSimpleModal("Uyarı!", "400 karakterden fazla mesaj giremezsiniz!");
      return;
    }

    data = {'name':name,'email':email,'message':message, 'captcha':captchaCode};
    url = "./mailsender";

    $.post('./sendmail', data)
      .done(function(res){
        showTimeoutModal("Bilgi",res.responseDesc);
      })
      .fail(function(res){
        showSimpleModal("Uyarı!",res.responseDesc);
      });
  }

});

