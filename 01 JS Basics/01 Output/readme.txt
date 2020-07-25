To display output JS does not have a built-in print function
Data is displayed via:
   1. alert box: window.alert() -> alert("My message here"); 
   ->you get a pop up box when you run the code
   
   2. prompt: window.prompt() -> prompt("Enter your name:")
   -> similar to alert but wants input
   
   3. document.write() -> document.write("Hello World");
   -> permanent, writes directly to the page
   -> not the best method (can be misused to overwrite something else)
  
   4. innerHTML() -> document.getElementById('test').innerHTML = "Hello World";
   -> changes whatever content was there in the ID test with Hello World
   -> When you use getElementById, JS thinks there's only one element with that ID and hence stops after finding the first one
   -> thats why, second test content remains same
   -> change DOM contents by using innerHTML combined with the element you want to change
   -> no parenthesis
   
   
   5. console.log()
   -> writes to the browser console
   -> helps you debug the code for HTML, CSS and JS