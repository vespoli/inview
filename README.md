Executes an action when element comes into viewport

On screen algo was derived from Unveil:  http://luis-almeida.github.io/unveil/

Example usage:
$("img").inView(function(){...});

OR

$("img").inView(function(){...}, 200); 

to trigger 200px before in viewport

OR

$("img").inView(function(){...}, 200, function(){..}); 

pass custom function which returns boolean and cancels trigger
