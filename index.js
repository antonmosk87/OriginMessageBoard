$( document ).ready(function() {

    $("#sendMessage-btn").click(function(){

      var messages = {
        username: $("#username").val(),
        message: $("#message").val()
      };

      alert('stuff');
      $.ajax({
           type: 'POST',
           url: 'http://originmessages.herokuapp.com/messages',
           contentType: "application/json",
           data: JSON.stringify(messages),
           dataType: "json"
         });

    });
});
