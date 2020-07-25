$('p.para1').css({color:'red', background: '#ccc'});

-> to use multiple CSS use {}

To add class to anything we use:
$('p.para2').addClass('myClass');

-> para2 now has class of myClass

To remove class:
$('p.para2').removeClass('myClass');

To toggle class we use:
$('#btn1').click(function(){
        $('p.para3').toggleClass('myClass');
      });

********* Adding and Changing content within a DOM ****************
1. Append and Prepend:

$('ul').append('<li>Append List Item</li>')

-> adds a list item to the list at the end
      
$('ul').prepend('<li>Prepend List Item</li>')

-> adds a list item at the beginning of the list
      
$('.para1').appendTo('.para2')

-> makes the para2 come before para1 on the website

$('.para1').prependTo('.para2')

-> makes the para2 come after para1 on the website

2. Before and after

$('ul').before('<h4>Hello</h4>');
-> Hello is printed before the ul
      
$('ul').after('<h4>World</h4>');
-> world is printed after the ul

3. Empty and Detach
      
$('ul').empty();
-> removes the contents of the ul

$('ul').empty();
-> removes the ul completely

4. Attributes
      
$('a').attr('target', '_blank');
-> opens link in a new page

$('a').removeAttr('target');
-> removes target Attribute

5. Key up
$('#newItem').keyup(function(e){
        var code = e.which;
        if(code == 13){
          e.preventDefault();
          $('ul').append('<li>'+e.target.value+'</li>');
        }
      });

-> makes the input append to the list

5. Array

var myArr = ['Brad', 'Nikhil', 'Arsenal', 'Jose'];

      $.each(myArr, function(i, val){
        console.log(val);
        $('.users').append('<li>'+val+'</li>');
      });
    });

-> Displays the arrays as list items