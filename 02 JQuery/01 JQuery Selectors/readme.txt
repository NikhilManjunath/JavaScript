JQuery is a small, fast and feature rich JavaScript Library

It requires very less code and has extensive functionality

We can either download JQuery or use an external link(CDN)

Copy the link for JQuery CDN and paste it in the head tag

******************** JQuery Selectors *******************************

$("") is used to as Selector

$("h1").hide();            -> hides all the headings
$("h1#heading-1").hide();  -> hides only h1 with id of heading-1
$(".heading-2").hide();       -> hides only h1 with class of heading-2
$("span").css('color','green');  -> makes the text in all spans green
$("p span").css('color','red');  -> makes only the text in the spans inside p red

$("ul#list li:first").css('color','violet');   -> makes the first list item violet
$("ul#list li:last").css('color','blue');      -> makes the last list item blue
$("ul#list li:even").css('background-color','yellow'); -> makes all the even list items yellow
$("ul#list li:odd").css('background-color','#cccccc'); -> makes all the odd lists background #ccccc
$("ul#list li:nth-child(3n)").css('list-style','none'); -> makes every 3rd list item style none


$(":text").hide();     -> hides all inputs with type text
$(":button").hide();   -> hides all inputs with type button
$(":submit").hide();   -> hides all inputs with type submit

