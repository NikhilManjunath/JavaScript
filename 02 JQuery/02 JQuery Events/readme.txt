function() -> a self calling function

*************************** Button Events *******************************************

$("#btn1").click(function(){                   
      alert('Button Clicked');
    });

    -> a message displayed that the button was clicked

$('#btn2').on('click', function(){             
      alert('Button Clicked!');
      });

      ->does the same function as click

$('#btn1').click(function(){
        $('#para1').hide(); 
        -> hides the para1               
        $('#para1').toggle();  
        -> hides/displays the para when btn1 clicked               

$('document').ready(function(){             
    -> dont run any of the code until the document is ready

$('#btn2').click(function(){                  
      $('#para1').show();
      });

      -> displays the para when btn2 is clicked

$('#btn1').dblclick(function(){
      $('#para1').toggle();                   
      });

      -> toggles when doublecliked on btn1

$('#btn6').hover(function(){
        $('#para1').toggle();                
        });

        -> toggles when hover over btn6

      $('#btn7').on('mouseenter', function(){
        $('#para1').toggle();                      
        });

        -> hover is ashorthand event i.e., is a combination of mouse enter and mouse leave

      $('#btn7').on('mouseleave', function(){
        $('#para1').toggle();
        });

      $('#btn8').on('mousemove', function(){      
        $('#para1').toggle();
        });

        -> para toggles as we move the cursor inside btn8

      $('#btn9').on('mousedown', function(){
        $('#para1').toggle();                      
        });

        -> mouse down hides/displays para when mouse clicked and held

      $('#btn9').on('mouseup', function(){
        $('#para1').toggle();                     
        });

        -> mouse up displays data when mouse click is lifted

      $("#btn10").click(function(e){
        alert(e.currentTarget.id);
        alert(e.currentTarget.innerHTML);
        alert(e.currentTarget.outerHTML);
        alert(e.currentTarget.className);
        });

***********************************************************************************************************

$(document).on('mousemove', function(e){
          console.log('Coords: Y: '+e.clientY+' X:'+e.clientX);  
          });

          -> displays coordinates of the cursor in the console

$(document).on('mousemove', function(e){
          $('#coords').html('Coords: Y: '+e.clientY+' X:'+e.clientX);
          });

          -> displays the coordinates of the cursor in the h1

$('input').focus(function(){
        // alert('Focus');
        $(this).css('background','pink');
      });

      -> makes the input space pink when clicked

$('input').blur(function(){
        // alert('Focus');
        $(this).css('background','white');
      });

      -> makes the input space when clicked outside the space

$('input').keyup(function(e){
        console.log(e.target.value)
      });

      -> displays the value entered in the input in the console

$('select#gender').change(function(e){
        // alert('Changed');
        alert(e.target.value);
      });

      -> provides an alert when the gender is Changed

$('#form').submit(function(e){
        e.preventDefault();
        var name = $('input#name').val();
        console.log(name);
        console.log('Submitted');
      });

      -> displays the name as well as 'Submitted' on the console
