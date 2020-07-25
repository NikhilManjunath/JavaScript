************** Fade Effects **********************
$('#btnFadeOut').click(function(){
        $('#box').fadeOut(3000, function(){
          $('#btnFadeOut').text('Its Gone');
        });
      });
-> The box fades out (3000 is miliseconds i.e, time to fade in or out)

      $('#btnFadeIn').click(function(){
        $('#box').fadeIn(3000, function(){
          $('#btnFadeOut').text('Fade Out');
        });
      });
-> The box fades In

      $('#btnFadeTog').click(function(){
        $('#box').fadeToggle(1000);
      });
-> The box fades In and out


Similarly Slide and Move(Animate) works