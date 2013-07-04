

$(function(){
  $('form').submit(function(event){

    password = $(':password').val();
    console.log(password);
    var captialRegex = /[A-Z]/;
    var numberRegex  = /\d/;
    if(password.length<7){
      $('.error_log').text('The password must be at least 8 characters.  Get Secure.')
      event.preventDefault();
    }
    if(!captialRegex.exec(password)){
      $('.error_log').append('<p>The password must Contain an uppercase Character.  Get Secure.</p>');
      event.preventDefault();
    };
    if(!numberRegex.exec(password)){
      $('.error_log').append('<p>The password must Contain a digit.  Get Secure.</p>');
      event.preventDefault();
    };
  });
});