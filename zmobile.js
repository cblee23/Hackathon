
$(document).ready(function(){
  $('#btn').click(function(){
    var currentpw = $('#pw').text();
    $('#pw').hide();
    $('#btn').hide();
    $("#gif").fadeTo('slow',.5);


     var r= $('<input type="button" id = "btn2" value="Enter"/>');
     $("p").append(r);

    var input = $('<input id="newpw" />');
      input.attr('type', 'text');
       input.val(currentpw);
       $('#pw').after(input);

    $("#btn2").click(function(){
       $("#pw").html($("#newpw").val());
       $("#pw").show();
       $(input).hide();
       $("#btn2").hide();


    });


    });
  });

